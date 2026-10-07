// Đưa ra index.html + README + book/*.md Tạo ra một tự bao gồm HTML：Bạn có thể xem bằng hai click, không cần máy chủ, không cần kết nối.。
// Sử dụng：node tools/offline/build.mjs [Đường dẫn xuất]   Tiết xuất mặc định dist/HowToLiveBetter.html
// nội dung chính Liên kết nội bộ window.__CORPUS__，index.html của init() Nhận biến này sẽ không còn yêu cầu nữa；
// Các liên kết tương đối trong trạm được chuyển thành địa chỉ trực tuyến, hình ảnh bên cạnh được chuyển thành hình ảnh bên ngoài. data URI，Một lời còn lại không động。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, read, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.html');
const STAMP = buildStamp();
const COMMIT = gitCommit();

// ---------- nội dung chính ----------
const readme = read('README.md');
const files = [...new Set([...readme.matchAll(/\]\((book\/[^)]+\.md)\)/g)].map(m => m[1]))].sort();
if (!files.length) throw new Error("README Không tìm thấy trong thư mục book/ Các tài liệu, phiên bản offline sẽ trống");
// Lời bài hát:（docs/*.md）Bạn cũng nên mang theo: các cửa sổ phát nổ văn bản trong các trang tìm kiếm sẽ làm cho chúng bị nhiễm trùng, không còn gì trong các bản sao ngoại tuyến.
// Một chút bất ổn. GitHub Liên kết. Danh sách từ README Rhiv, và EPUB、PDF Hai bộ xây dựng được sử dụng ở cùng một nơi.。
const docs = [...new Set([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))].sort();
const corpus = {
  readme,
  parts: Object.fromEntries(files.map(f => [f, read(f)])),
  docs: Object.fromEntries(docs.map(f => [f, read(f)])),
};
// </script Thập tắt thẻ kịch bản trước；\/ Trong JS Dòng là: /，Nội dung không thay đổi
const corpusJson = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');

// ---------- Trang ----------
let html = read('index.html');
const must = (needle, label) => {
  if (!html.includes(needle)) throw new Error(`index.html Không tìm thấy${label}，Các kịch bản ngoại tuyến sẽ được thay đổi：${needle}`);
};

// Các kịch bản thống kê không thể đi theo phiên bản ngoại tuyến: các bản sao được mở hai lần không được gửi ra ngoài, và phải chờ quá lâu khi bị gián đoạn mạng.
const GA_START = '<!-- ga:start', GA_END = '<!-- ga:end -->';
if (html.includes(GA_START) || html.includes(GA_END)) {
  must(GA_START, 'dấu bắt đầu GA');
  must(GA_END, 'dấu kết thúc GA');
  html = html.slice(0, html.indexOf(GA_START)) + html.slice(html.indexOf(GA_END) + GA_END.length);
}
// Chỉ cần tìm tên miền bên ngoài: trong kịch bản chính track() Đưa typeof Bảo vệ, không có gtag Nó cũng có thể chạy mà không còn ở lại.
if (/googletagmanager|google-analytics/.test(html)) throw new Error("Các nội dung giữa các nhãn được loại bỏ và các tên miền thống kê vẫn còn tồn tại, phiên bản ngoại tuyến sẽ được yêu cầu ra ngoài.");

// Liên kết tương đối đã chết khi mở địa phương, chuyển thành địa chỉ trực tuyến
must('href="README.md"', " README.md Liên kết");
html = html
  .replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="book/"', `href="${REPO}/tree/main/book"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);

// Hình quảng cáo bên lề và chuyển đổi mã đánh giá cao data URI，Nếu không, việc tắt điện thoại sẽ là một vết nứt.
for (const [img, mime] of [['ads/mcyyy-side.webp', 'image/webp'], ['ads/wechat-reward.png', 'image/png']]) {
  if (!html.includes(`src="${img}"`)) continue;
  const data = readFileSync(resolve(ROOT, img)).toString('base64');
  html = html.replace(`src="${img}"`, `src="data:${mime};base64,${data}"`);
}

// Bức chân trang chỉ ra bản sao ngoại tuyến của phiên bản nào
const foot = '<div class="foot">';
must(foot, 'chân trang');
const commitNote = COMMIT ? `, commit ${COMMIT.slice(0, 7)}` : '';
html = html.replace(foot, `${foot}Bản ngoại tuyến tạo lúc ${STAMP} (giờ Việt Nam)${commitNote}. Nội dung tiếp tục được cập nhật; xem <a href="${SITE}">bản trực tuyến</a>.<br>`);

// nội dung chính Đặt trước kịch bản chính
const mainScript = '\n<script>\n';
must(mainScript, "Khởi đầu kịch bản chính");
html = html.replace(mainScript, `\n<script>window.__CORPUS__=${corpusJson}</script>${mainScript}`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
const kb = n => (n / 1024 | 0) + ' KB';
console.log(`Đã tạo ${OUT}：${files.length} tệp nội dung; bài chuyên sâu: ${docs.length} bài，${kb(Buffer.byteLength(html))}（dữ liệu sách: ${kb(Buffer.byteLength(corpusJson))}）`);
