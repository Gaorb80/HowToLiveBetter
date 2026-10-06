// Kết hợp thống kê: đã hoàn thành mục Cứ chạy đi. 4 điều theo thứ tự：
// ① Đánh giá lại số liệu thống kê của toàn bộ sách, viết lại README.md、index.html、tools/og.html；
// ② Định hướng check-refs.mjs Đánh giá lại docs/doi-chieu-tham-chieu.md；
// ③ Định hướng check-plain.mjs Đánh giá Giải thích dễ hiểu Không đủ điều kiện, chỉ cần yêu cầu không ngừng.；
// ④ Không có đầu Chrome Đưa ra tools/og.html Cắt lại og.png。
//
//   node tools/sync-stats.mjs                   # Được rồi.
//   node tools/sync-stats.mjs --no-screenshot   # Không chụp
//   node tools/sync-stats.mjs --check           # Chỉ là đúng. ① Không viết, có những con số lỗi thời và rút mã 1（CI Được sử dụng）
//
// Chrome Tìm vị trí lắp đặt thông thường, lắp đặt các biến môi trường ở nơi khác CHROME Hướng dẫn:。
// og.html Được sử dụng bởi Microsoft.，Linux Nếu không có, bạn sẽ thay đổi chữ cái khác, các biểu đồ được cắt và Windows Không giống nhau.；
// CI Chỉ cần chạy thôi. --check Đó là lý do tại sao chúng ta không chụp ảnh.。
//
// 2026-09-29 Từ sync-stats.ps1 Cấy ghép，ps1 Đã bị xóa: nó chỉ là Windows Đi lên.，
// Bên ngoài kết hợp trực tiếp trên trang web PR Nếu không hoàn toàn vượt qua nó, số liệu đã lỗi thời và không có kiểm tra nào sẽ đỏ.。
// ① Chỉ thay đổi số tự nó mà không động bất kỳ chữ cái nào khác。
// Số tiêu chí đánh giá ： mục Số lượng = book/*.md Lilly ### tiêu đề Số; Số đoạn = book/*.md Số tài liệu；
// A/B/C = Mức độ bằng chứng Các chữ cái đầu tiên của dòng là: Có tranh cãi (văn số tương tự như sau); Có tranh cãi = Ghi chú Bạn có thể nói: Có tranh cãi "Điều đầu tiên"；
// TODO = nội dung chính Trong đó có: Cần kiểm chứng "hoặc「TODO」số dãy; Liên kết = 「- Nguồn "và「- Ghi chú "Trong đường": http(s) Tổng số；
// Các quy tắc về giá cả của giới tính index.html。
// Thử dụng /\r?\n/，Lý do check-refs.mjs Đầu tài liệu。
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const read = f => readFileSync(join(ROOT, f), 'utf8');

// Quy tắc xếp hạng và index.html của COST_W、e.ratio 2 dòng đồng nhất; Khi hai dòng thay đổi ở đây, chúng ta phải thay đổi theo đó, vì vậy chúng ta phải thay đổi trước một lần.
const indexText = read('index.html');
const COST_W_LINE = "const COST_W = { money:{'0':0,'Ít':1,'Nhiều':2}, time:{'Ít':0,'Vừa':1,'Nhiều':2}, will:{'Không':0,'Một_chút':1,'Có':2} };";
if (!indexText.includes(COST_W_LINE)) throw new Error("index.html của COST_W Định hướng thay đổi, hãy đồng bộ trong kịch bản Chi phí trọng lượng");

const W = {
  money: { '0': 0, 'Ít': 1, 'Nhiều': 2 },
  time: { 'Ít': 0, 'Vừa': 1, 'Nhiều': 2 },
  will: { 'Không': 0, 'Một_chút': 1, 'Có': 2 },
};

function ratioOf(cost, level) {
  if (level === 'Lớn') return cost === 0 ? 'Rất_cao' : cost <= 2 ? 'Cao' : 'Bình_thường';
  return (level === 'Vừa') && cost === 0 ? 'Cao' : 'Bình_thường';
}

const bookFiles = readdirSync(join(ROOT, 'book')).filter(f => f.endsWith('.md')).sort();
const sections = bookFiles.length;
let entries = 0, dispute = 0, todo = 0, links = 0;
const grade = { A: 0, B: 0, C: 0 };
const ratio = { 'Rất_cao': 0, 'Cao': 0, 'Bình_thường': 0 };

for (const f of bookFiles) {
  for (const line of read(join('book', f)).split(/\r?\n/)) {
    if (line.startsWith('### ')) entries++;
    const g = line.match(/^- (?:证据等级|Mức độ bằng chứng)[：:]\s*([ABC])/i);
    if (g) grade[g[1].toUpperCase()]++;
    if (/^- (?:备注：争议|Ghi chú:\s*Tranh cãi|Ghi chú:\s*Có tranh cãi)/i.test(line)) dispute++;
    if (/待核实|TODO|Chưa thẩm định|Cần thẩm định/i.test(line)) todo++;
    if (/^- (?:来源|Nguồn|备注|Ghi chú)[：:]/.test(line)) links += (line.match(/https?:\/\//g) ?? []).length;
    const t = line.match(/<!--\s*Nhãn chi phí:\s*Tiền=(\S+)\s+Thời_gian=(\S+)\s+Ý_chí=(\S+)\s+Lợi_ích=(\S+)\s+Tiêu_chí=/);
    if (t) ratio[ratioOf(W.money[t[1]] + W.time[t[2]] + W.will[t[3]], t[4])]++;
  }
}

const tagged = ratio['Rất_cao'] + ratio['Cao'] + ratio['Bình_thường'];
if (tagged !== entries) console.warn(`Cảnh báo: Có ${entries - tagged} Lắng mặt nhãn chi phí Thêm vào đó, tình dục có giá cả cao hơn ba cấp. mục Số lượng`);
if (grade.A + grade.B + grade.C !== entries) console.warn("Cảnh báo: Mức độ bằng chứng số dãy và mục Số không đúng, kiểm tra xem có mục Không được viết Mức độ bằng chứng");

// Các tỷ lệ phần trăm được phân bổ theo cách số dư lớn nhất: lấy toàn xuống trước, phần trăm còn lại được phân bổ theo phần nhỏ từ phần lớn đến phần nhỏ。
// 3 số 4 và 5 trong số đó sẽ được đưa ra 99 Hoặc là 101（2026-09-21 Gaddai 33 Tôi đã gặp nhau ở thời điểm lễ hội) và đảm bảo kết hợp đúng. 100。
const ORDER = ['Rất_cao', 'Cao', 'Bình_thường'];
const pct = {}, rem = {};
for (const k of ORDER) {
  const exact = ratio[k] * 100 / entries;
  pct[k] = Math.floor(exact);
  rem[k] = exact - pct[k];
}
const short = 100 - ORDER.reduce((s, k) => s + pct[k], 0);
for (const k of [...ORDER].sort((a, b) => rem[b] - rem[a]).slice(0, Math.max(short, 0))) pct[k]++;

console.log(`Mục ${entries} ｜ Chương ${sections} ｜ A ${grade.A} B ${grade.B} C ${grade.C} ｜ Có tranh cãi ${dispute} ｜ TODO ${todo} ｜ Liên kết ${links}`);
console.log(`Hiệu quả/chi phí: rất cao ${ratio['Rất_cao']}（${pct['Rất_cao']}%） cao ${ratio['Cao']}（${pct['Cao']}%） Thông thường ${ratio['Bình_thường']}（${pct['Bình_thường']}%）`);
console.log('');

const EDITS = [
  ['README.md', "số mục đầu trang", /(\d+) lời khuyên thực tiễn/g, `${entries} lời khuyên thực tiễn`],
  ['README.md', 'huy hiệu số mục', /M%E1%BB%A5c-(\d+)%20m%E1%BB%A5c/g, `M%E1%BB%A5c-${entries}%20m%E1%BB%A5c`],
  ['README.md', "huy hiệu cấp bằng chứng", /A%20(\d+)%20%C2%B7%20B%20\d+%20%C2%B7%20C%20\d+/g, `A%20${grade.A}%20%C2%B7%20B%20${grade.B}%20%C2%B7%20C%20${grade.C}`],
  ['README.md', "số liên kết nguồn", /-(\d+)%20li%C3%AAn%20k%E1%BA%BFt/g, `-${links}%20li%C3%AAn%20k%E1%BA%BFt`],
  ['README.md', "số tệp nội dung", /chia thành (\d+) tệp/g, `chia thành ${sections} tệp`],
  ['index.html', 'các mô tả trang', /(\d+) lời khuyên/g, `${entries} lời khuyên`],
  ['index.html', 'numberOfPages', /numberOfPages":(\d+)/g, `numberOfPages":${entries}`],
  ['tools/og.html', "số mục trên ảnh bìa", /<b>(\d+)<\/b> lời khuyên/g, `<b>${entries}</b> lời khuyên`],
  ['tools/og.html', "số mục cấp A trên ảnh bìa", /Bằng chứng cấp A <b>(\d+)<\/b> mục/g, `Bằng chứng cấp A <b>${grade.A}</b> mục`],
  ['tools/og.html', "số liên kết trên ảnh bìa", /<b>(\d+)<\/b> liên kết tài liệu gốc/g, `<b>${links}</b> liên kết tài liệu gốc`],
];

const texts = new Map();
const stale = [];
for (const [file, label, pattern, repl] of EDITS) {
  const text = texts.get(file) ?? read(file);
  const found = [...text.matchAll(pattern)];
  if (found.length === 0) throw new Error(`${file} Không tìm thấy「${label}」，Mô hình：${pattern}`);
  const old = found[0][1];
  // Đổi giá trị bằng hàm để tránh thay thế các chuỗi $ được trích dẫn trong nhóm thành phần
  const updated = text.replace(pattern, () => repl);
  texts.set(file, updated);
  if (updated === text) {
    console.log(`  ${file} ${label}：${old}（Không thay đổi）`);
    continue;
  }
  stale.push(`${file} ${label}`);
  console.log(`  ${file} ${label}：${old} -> ${CHECK ? 'lỗi thời' : `Được cập nhật（${found.length} Ở đâu）`}`);
}

if (CHECK) {
  if (stale.length === 0) {
    console.log("\nKiểm tra số liệu thống kê: đạt");
    process.exit(0);
  }
  console.log(`\nCó. ${stale.length} Số liệu thống kê đã lỗi thời. Đúng là chạy node tools/sync-stats.mjs（Trở lại theo dõi og.png），Sau đó nộp。`);
  process.exit(1);
}

for (const [file, text] of texts) if (text !== read(file)) writeFileSync(join(ROOT, file), text);

// ② Đánh giá lại Bảng đối chiếu tham chiếu chéo Thêm hoặc xóa: mục "Điều thứ hai" sau đó X Điều "Thế độ sai lầm tập thể, số sai lầm sau đó"
// Thường vẫn còn trong phạm vi（2026-09-19 Thứ nhất 7 Giáng sinh 6 Đúng là, chỉ cần "thích dẫn" → Mục tiêu tiêu đề "Hãy mở thư viện".，
// diff Chúng ta sẽ thấy. Trước khi được chụp，--no-screenshot Và phải chạy.
const runTool = name => spawnSync(process.execPath, [join(ROOT, 'tools', name)], { stdio: 'inherit' }).status;
console.log('');
if (runTool('check-refs.mjs') !== 0) throw new Error("check-refs.mjs Thất bại");
console.log("Xem trước khi nộp docs/doi-chieu-tham-chieu.md của diff：Đơn vị không di chuyển và \"định hướng\" mục \"Điều đã thay đổi, đó là một trích dẫn bị lật ngược.。");

// ③ kiểm tra cách diễn đạt dễ hiểu Chỉ cần gợi ý không bị gián đoạn: số liệu đã được đồng bộ hóa, và thẻ ở đây khiến người ta nghĩ rằng số liệu không được cập nhật.。CI Nó sẽ đỏ.
console.log('');
if (runTool('check-plain.mjs') !== 0) console.log("Danh sách trên Giải thích dễ hiểu Không đủ điều kiện, thay đổi quy tắc trước khi nộp tools/check-plain.mjs Đầu tài liệu）。");

if (process.argv.includes('--no-screenshot')) process.exit(0);

// ④ Đánh dấu og.png
const CHROME_PATHS = [
  process.env.CHROME,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];
const chrome = CHROME_PATHS.find(p => p && existsSync(p));
if (!chrome) throw new Error("Không tìm thấy Chrome，Variable môi trường CHROME chỉ ra nó, hoặc thêm --no-screenshot Chuyển qua bức ảnh");

// Mỗi lần sử dụng một cái mới user-data-dir：Nếu không Chrome Tôi sẽ giữ những thứ cũ trong kho. og.html Xác định, cắt hoặc số cũ。
// --screenshot Đặt một con đường hoàn toàn: Đặt một con đường tương đối Chrome Không viết gì, và vẫn quay lại 0
const profile = mkdtempSync(join(tmpdir(), 'og-shot-'));
const target = join(ROOT, 'og.png');
const startedAt = Date.now();
// Chrome Đưa ra「xxx bytes written」Những thông tin này được viết stderr Không phải sai lầm, bỏ đi.
spawnSync(chrome, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--user-data-dir=${profile}`, `--screenshot=${target}`,
  pathToFileURL(join(ROOT, 'tools', 'og.html')).href,
], { stdio: 'ignore' });
rmSync(profile, { recursive: true, force: true });

// Bản kiểm tra: Tài liệu được viết lần này, kích thước nằm trong khoảng bình thường. Sau hai liên kết này, bạn sẽ không cần phải mở các biểu đồ để xem, tiết kiệm chi phí đọc một biểu đồ.
const png = statSync(target);
if (png.mtimeMs < startedAt - 1000) throw new Error("og.png Không được ghi lại trong cuộc điều hành này, chụp thất bại");
if (png.size < 120 * 1024 || png.size > 400 * 1024) throw new Error(`og.png Sự bất thường nhỏ（${png.size} Byte), bình thường là 120KB đến 400KB，Hãy mở ra để xem liệu nó có bị nhiễm trùng không.`);
console.log(`\nog.png Đã xuất hiện lại：${png.size} Byte, tự kiểm tra qua. Thay đổi tools/og.html Vị bản mới cần mở biểu đồ để xác nhận。`);
