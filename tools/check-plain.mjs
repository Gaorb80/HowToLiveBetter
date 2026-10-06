// 「Giải thích dễ hiểu "Điểm tra: Đây là đoạn rõ ràng nhất trên thẻ truy cập, và hầu hết người đọc chỉ xem nó.。
// 2026-09-28 issue #42 Thanh tiếng nói AI Thức mạnh, nâng lên 1 Chương 3 33 Một dòng viết số bệnh viện、
// Số trường hợp, phân nhóm, và sử dụng "một cái đầu khác", "tạo ra" và "sự kết thúc sạch" để cho người đọc tự mình biết. bản dịch Lời nói。
// Đó là tất cả. CLAUDE.md Những chữ viết đã bị cấm từ lâu, nhưng không có kiểm tra máy, viết lại và viết lại.。
//
//   node tools/check-plain.mjs          # Danh sách những người không đủ điều kiện Giải thích dễ hiểu Một số người đã rút mã 1（CI Được sử dụng）
//   node tools/check-plain.mjs --stat     # Chỉ tính theo quy tắc
//   node tools/check-plain.mjs --numbers  # Gaddafi ③ Tiếp tục kiểm tra.
//
// Tìm kiếm bằng mặc định ①②④，Thứ nhất ③ Thêm vào --numbers Chỉ cần kiểm tra. Đó là quá nhiều thông tin sai lầm. CI：Số đường dây nóng（120、12356）、
// Luật pháp và tiền bạc mục Số tiền được sử dụng trong ví dụ: 1000 Những con số này sẽ được coi là những con số mới, và đó là cách viết hợp pháp.。
// kiểm tra 4 cách：
// ① Độ dài：120 Không gian không bao gồm chữ）。
// ② Bài giảng nghiên cứu：Viết tắt thống kê、Thiết kế nghiên cứu、Cỡ mẫu。Người đọc quan tâm đến hướng và mức độ, không quan tâm đến việc ai làm, bao nhiêu người làm。
// ③ Số liệu mới: Giải thích dễ hiểu Tất cả các con số Ả Rập đều ở trong cùng một chữ cái. tiêu đề 、 Chi phí hoặc mục lợi ích Trong đó có。
//    Giải thích dễ hiểu Chỉ có bản dịch mục lợi ích Không được thêm con số. Những từ ngữ như "nhiều hơn 40 phần trăm" và "một phần tư" không được sử dụng.。
// ④ Abstract Cave: Đọc cho người đọc bản dịch Một lần nữa, những câu ngụ ngôn và câu nói, xem danh sách VAGUE。Chỉ cần nghe những từ đã thực sự xuất hiện trong câu hỏi，
//    Bạn không nên bỏ qua và không nên làm sai báo cáo, nếu bạn làm sai báo cáo nhiều hơn, bạn sẽ không nhìn thấy.。
// Thử dụng /\r?\n/，Lý do check-refs.mjs Đầu tài liệu。
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

// Số bằng giá trị, không bằng chữ：「.28」và「0.28」、「11,523」và「1.15 "M" là cùng một con số.。
function numbers(s) {
  return [...s.replace(/(\d),(\d{3})/g, '$1$2').matchAll(/(\d*\.?\d+)\s*(万)?/g)]
    .map(m => Number(m[1]) * (m[2] ? 10000 : 1));
}
// Giải thích dễ hiểu Lilly n Không kể từ mục lợi ích của p bản dịch Tiếp theo: 4 x 5（45.6 → 46，5801 → 5800），
// Hoặc rủi ro thay vì giảm（0.72 → Thấp hơn 28%，0.53 → Thấp hơn 47%）。Không tốt. 5% Trong số đó。
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
      if (fresh.length) { problems.push(`mục lợi ích Những con số không có ${fresh.join('、')}`); count['Số mới']++; }
    }
    const vague = VAGUE.filter(w => plain.includes(w));
    if (vague.length) { problems.push(`Quảng cáo trừu tượng「${vague.join('」「')}」`); count['Diễn đạt trừu tượng']++; }
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
