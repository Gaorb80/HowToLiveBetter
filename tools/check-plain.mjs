// 「说人话」检查：这一行是检索页卡片上最显眼的一段，读者多半只看它。
// 2026-09-28 issue #42 抱怨文风 AI 味重，举的第 1 节第 33 条一行里写了医院数、
// 病例数、分组，还用了「另一头」「产出」「干净的结局」这类要读者自己翻译的说法。
// 这些都是 CLAUDE.md 早就禁掉的写法，只是没有机器检查，写着写着就回来了。
//
//   node tools/check-plain.mjs          # 列出所有不合格的说人话，有则退出码 1（CI 用）
//   node tools/check-plain.mjs --stat     # 只按规则计数
//   node tools/check-plain.mjs --numbers  # 加查第 ③ 样，人工排查用
//
// 默认查 ①②④，第 ③ 样要加 --numbers 才查。它误报太多，不进 CI：热线号码（120、12356）、
// 法律和金钱条目里举例用的金额（「借 1000 元」）都会被当成新数字，而这些是合法写法。
// 检查四样：
// ① 长度：120 字以内（空格不算字）。
// ② 研究行话：Viết tắt thống kê、Thiết kế nghiên cứu、Cỡ mẫu。读者关心方向和量级，不关心谁做的、做了多少人。
// ③ 新数字：说人话里的每个阿拉伯数字都要在同一条的标题、成本或收益栏里出现过。
//    说人话只翻译收益栏，不许添数字。「四成多」「四分之一」这类汉字说法不查。
// ④ 抽象腔：要读者自己翻译一遍的比喻和套话，名单见 VAGUE。只收确实出过问题的词，
//    宁可漏也别误报，误报多了大家就不看了。
// 切行用 /\r?\n/，理由见 check-refs.mjs 文件头。
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STAT = process.argv.includes('--stat');
const NUMBERS = process.argv.includes('--numbers');
const MAX = 120;

const JARGON = [
  [/\b(HR|RR|OR|CI|RCT|OR值)\b/, 'Viết tắt thống kê'],
  [/队列|荟萃|综述|随机|对照组|安慰剂组|双盲|样本/, 'Thiết kế nghiên cứu'],
  [/\d[\d,.]*\s*(例|名受试者|名参与者|家医院|项研究|篇研究|个国家)/, 'Cỡ mẫu'],
  [/那组|两组|各组|组的人/, 'Chia nhóm'],
];
const VAGUE = ['另一头', '产出', '干净的结局', '这条路没有', '说到底', '本质上', '换句话说'];

// 数字按值比，不按字面比：「.28」和「0.28」、「11,523」和「1.15 万」是同一个数。
function numbers(s) {
  return [...s.replace(/(\d),(\d{3})/g, '$1$2').matchAll(/(\d*\.?\d+)\s*(万)?/g)]
    .map(m => Number(m[1]) * (m[2] ? 10000 : 1));
}
// 说人话里的 n 算不算从收益栏的 p 翻译过来的：四舍五入（45.6 → 46，5801 → 5800），
// 或者风险比换成降幅（0.72 → 低 28%，0.53 → 低 47%）。差 5% 以内都算。
function derived(n, p) {
  const near = (a, b) => a === b || Math.abs(a - b) <= 0.05 * Math.max(Math.abs(a), Math.abs(b));
  return near(n, p) || near(n / 100, p) || (p < 1 && near(n / 100, 1 - p)) || (p > 1 && p < 100 && near(n, 100 - p));
}

const bad = [];
const count = { 'Độ dài': 0, 'Thuật ngữ': 0, 'Số mới': 0, 'Diễn đạt trừu tượng': 0 };
let total = 0;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
for (const f of files) {
  const sec = Number(f.slice(0, 2));
  const lines = readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/);
  let no = 0, title = '', fields = {};
  const flush = () => {
    const plain = fields['说人话'];
    if (!no || plain == null) return;
    total++;
    const where = `Chương ${sec}, mục ${no}`;
    const problems = [];
    const len = plain.trim().split(/\s+/).length;
    if (len > 120) { problems.push(`${len} từ, vượt quá 120 từ`); count['Độ dài']++; }
    const jar = JARGON.filter(([re]) => re.test(plain)).map(([re, name]) => `${name}「${plain.match(re)[0]}」`);
    if (jar.length) { problems.push(...jar); count['Thuật ngữ']++; }
    if (NUMBERS) {
      const pool = numbers([title, fields['成本'] ?? '', fields['Lợi_ích'] ?? ''].join(' '));
      const fresh = [...new Set(numbers(plain))].filter(n => !pool.some(p => derived(n, p)));
      if (fresh.length) { problems.push(`收益栏里没有的数字 ${fresh.join('、')}`); count['Số mới']++; }
    }
    const vague = VAGUE.filter(w => plain.includes(w));
    if (vague.length) { problems.push(`抽象说法「${vague.join('」「')}」`); count['Diễn đạt trừu tượng']++; }
    if (problems.length) bad.push(`${f}  ${where}：${problems.join('；')}`);
  };
  for (const line of lines) {
    const h = line.match(/^### (\d+)\. (.*)$/);
    if (h) { flush(); no = Number(h[1]); title = h[2]; fields = {}; continue; }
    const m = line.match(/^- (?:说人话|Giải thích dễ hiểu|成本|Chi phí|收益|Lợi ích)[：:]\s*(.*)$/);
    if (m && no) {
      if (line.includes('说人话') || line.includes('Giải thích dễ hiểu')) fields['说人话'] = m[1];
      else if (line.includes('成本') || line.includes('Chi phí')) fields['成本'] = m[1];
      else if (line.includes('Lợi_ích') || line.includes('Lợi ích')) fields['Lợi_ích'] = m[1];
    }
  }
  flush();
}

if (!STAT) for (const b of bad) console.log(b);
console.log(`\nTổng ${total} đoạn giải thích dễ hiểu, ${bad.length} đoạn chưa đạt: ` +
  Object.entries(count).map(([k, v]) => `${k} ${v}`).join('，'));
if (bad.length && !STAT) process.exit(1);
