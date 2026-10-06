// Đưa ra README + book/*.md + docs/*.md Dòng 1 PDF：pandoc Đưa ra Markdown Chuyển đổi typst，typst Phiên bản。
// Sử dụng：node tools/pdf/build.mjs [Đường dẫn xuất]   Tiết xuất mặc định dist/HowToLiveBetter.pdf
// cần thiết pandoc（≥3.1，Nếu có typst sản xuất) và typst（≥0.13）Trong PATH trên, hoặc bằng các biến môi trường PANDOC、TYPST Hướng dẫn。
// Trang này là tools/pdf/template.typ Trò chơi nội dung chính Không thay đổi một lời, chỉ làm ba điều.：
// Tránh đi.「← Tổng cộngMục lục」、Đọc cho mỗi đoạn tiêu đề Đăng vào các nút, chuyển các liên kết trong kho thành sách hoặc GitHub Địa chỉ。
import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.pdf');
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();          // 「（Thời gian Bắc Kinh) " viết trên mẫu vàThông tin phiên bảnLee, đưa cho tôi. pandoc Giá trị giữ nguyên ASCII
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();

// ---------- Trang: Mỗi trang một cấp độ tiêu đề cấp 1 tiêu đề Trong typst Một trang khác.） ----------
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# Lời mở đầu\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## Mục lục/, '# Giới thiệu các chương'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- Commit tương ứng: ${COMMIT.slice(0, 7)}\n` : '';
  return `# Thông tin phiên bản

PDF được tạo tự động từ các tệp Markdown trong kho. Khi nội dung thay đổi, sách được tạo lại.

- Thời điểm tạo: ${STAMP} (giờ Việt Nam)
${commitLine}- Tải bản mới nhất, tra cứu và góp ý: ${REPO}
- Tra cứu theo từ khóa, chương, cấp bằng chứng và chi phí; có bản HTML ngoại tuyến: ${SITE}

Liên kết tới các chương đã được đổi thành liên kết bên trong sách. Các tệp không đưa vào sách, như hồ sơ kiểm chứng và giấy phép, được liên kết tới GitHub.

Nội dung phát hành theo CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Bạn có thể chia sẻ, cải biên và sử dụng thương mại. Hãy ghi nguồn Cẩm nang cuộc sống tối ưu chi phí hiệu quả, kèm liên kết kho và ghi rõ các chỉnh sửa.`;
}

// ---------- Liên kết: Điểm chuyển đổi trong sách, chuyển đổi ngoài sách thành địa chỉ web tuyệt đối ----------
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    // README Nhìn vào các điểm nhỏ của bản thân（#Mục lục "Điều này không nhất thiết phải có trong cuốn sách. GitHub Nhanh lên README
    if (href.startsWith('#')) return `](${REPO}/blob/main/README.md${href}${title ?? ''})`;
    const [path] = href.split('#');
    const target = posix.normalize(posix.join(posix.dirname(src), path));
    const anchor = anchorOf.get(target);
    if (anchor) return `](#${anchor}${title ?? ''})`;
    const kind = target.endsWith('/') ? 'tree' : 'blob';
    return `](${REPO}/${kind}/main/${target}${title ?? ''})`;
  });
}

const body = pages.map(p => {
  const md = rewriteLinks(p.md, p.src)
    .replace(/<!--[\s\S]*?-->/g, '')                       // nhãn chi phí Các loại HTML Không tham gia PDF
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);        // Một cấp độ cho trang này tiêu đề Điểm treo
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`${p.src} Tôi không tìm thấy một cấp độ. tiêu đề Không có chỗ nào để ngã.`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);

// ---------- pandoc → typst → pdf ----------
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`Không tìm thấy ${cmd}，Thiết lập nó hoặc sử dụng các biến môi trường ${cmd === PANDOC ? 'PANDOC' : 'TYPST'} Hướng dẫn:`);
    throw new Error(`${cmd} Thất bại：\n${err.stderr || err.stdout || err.message}`);
  }
};

const typFile = resolve(ROOT, 'dist/pdf-build.typ');
run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(ROOT, 'tools/pdf/template.typ')}`,
  '-V', `booktitle=${TITLE}`, '-V', `subtitle=${description}`,
  '-V', `builddate=${STAMP}`, '-V', `commit=${COMMIT.slice(0, 7) || 'không rõ'}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`,
  '-o', typFile, WORK,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

const entries = pages.filter(p => bookFiles.includes(p.src))
  .reduce((n, p) => n + p.md.split('\n').filter(l => l.startsWith('### ')).length, 0);
console.log(`Đã tạo ${OUT}：${bookFiles.length} chương, ${entries} mục; phụ lục: ${docFiles.length} bài，${(statSync(OUT).size / 1048576).toFixed(1)} MB`);
