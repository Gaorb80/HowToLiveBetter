// Bảng đối chiếu tham chiếu chéo Đặt: nội dung chính "Bất cứ nơi nào" X Điều "thích dẫn phân tích theo hướng thực tế của nó" mục tiêu đề，
// Đăng vào docs/doi-chieu-tham-chieu.md。Đó là một tài liệu trong thư viện, vì vậy hãy thêm vào hoặc xóa mục Khi dẫn đến sự thay đổi hướng dẫn tham chiếu，
// git diff Nó sẽ làm cho sự thay đổi trực tiếp và nó sẽ không được chuyển động. tiêu đề Tôi đã thay đổi, đó là sai lầm.。
//
//   node tools/check-refs.mjs            # Tạo lại bảng kiểm soát（sync-stats.mjs sẽ tự động gọi）
//   node tools/check-refs.mjs --check    # Chỉ cần kiểm tra không viết tài liệu và tham khảo không hiệu quả sẽ rút mã 1（CI Được sử dụng）
//   node tools/check-refs.mjs --suspect  # Thống kê thêm các từ ngữ và mục tiêu tiêu đề Xin lỗi, thông báo sai lầm nhiều, sử dụng để kiểm tra di sản lịch sử
//
// Tại sao chúng ta cần nó: số của nó phụ thuộc vào vị trí, nội dung chính Quảng cáo chỉ ghi nhớ vị trí mà không ghi nhớ nội dung。2026-09-19
// Địa điểm 7 Phát hiện 6 Định nghĩa sai là: trợ cấp bảo đảm mức sống tối thiểu Cảnh sát cứu hộ chỉ số sai), tất cả đều nằm trong phạm vi số，
// Không có kiểm tra xuyên biên giới nào.。
// Lưu ý: Cắt một lần /\r?\n/，Không được. '\n'。book/ Các file dưới đây không thống nhất: CRLF Có. LF），
// Và JS Công thức . Không phù hợp \r（CR Và nó cũng là một điểm chấm dứt. Python、Perl Không giống nhau），
// Ở lại \r Tôi sẽ làm. /^### (\d+)\. (.*)$/ Trong CRLF Không có tài liệu nào phù hợp。
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

// Các đoạn trích khỏa thân trong đoạn "Xem đoạn 8 Điều "") chỉ tìm kiếm trong các vị trí này: mục nguồn "Thứ thứ hai" N "Hầu như tất cả".
// Điều khoản số 1 của Đạo luật, tất cả đều là thông báo sai lầm。
const FIELDS = /^- (?:说人话|Giải thích dễ hiểu|收益|Lợi ích|备注|Ghi chú|成本|Chi phí)[：:]/;
const CROSS_FIELDS = /^- (?:说人话|Giải thích dễ hiểu|收益|Lợi ích|备注|Ghi chú|成本|Chi phí|来源|Nguồn)[：:]/;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
// docs/ Thêm vào đó, bạn có thể tìm hiểu thêm. Chúng cũng giống như câu đầu tiên, thời gian dài không nằm trong phạm vi quét:
// --check thường hiển thị thông qua, bảng kiểm tra diff Và tôi cũng không thấy những trích dẫn này.。2026-09-21 Khi làm sạch
// 3 bài viết dài 23 Địa điểm: X Chương 3 Y "Không có nơi nào được kiểm tra".。
// Chỉ cần lấy docs/ Dưới đáy .md。Thư mục nhỏ docs/ho-so-kiem-chung/ Không kiểm tra: Những tài liệu ghi lại quá trình kiểm tra tại thời điểm đó，
// Những dòng chữ trong đó là trạng thái lịch sử, không nên theo dõi nội dung chính Đi thôi. Bảng kiểm tra tự loại bỏ。
const docs = readdirSync(resolve(ROOT, 'docs')).filter(f => f.endsWith('.md') && f !== 'doi-chieu-tham-chieu.md').sort();

// Đọc từng đoạn. mục tiêu đề Đọc：sections[Chương số] = { file, titles: { Địa chỉ:: tiêu đề } }
const sections = new Map();
for (const f of files) {
  const num = Number(f.slice(0, 2));
  const titles = new Map();
  for (const line of readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/)) {
    const m = /^### (\d+)\. (.*)$/.exec(line);
    if (m) titles.set(Number(m[1]), m[2].trim());
  }
  sections.set(num, { file: f, titles });
}

// Một trích dẫn có thể viết như: 3、10、11 Điều "", được chia thành nhiều số. Nó cũng được biết đến với cách viết phân đoạn: 11 đến 14 Đạo luật」
// 「Thứ nhất 5 Tới thứ 2 10 Điều ":" Cách viết này không phù hợp với mọi thứ trước đây, đồng nghĩa với việc không lau, toàn bộ cuốn sách có. 5 Nó viết như thế.。
const RANGE = /^\s*(\d+)\s*(?:到|至)\s*第?\s*(\d+)\s*$/;
// Trở lại [Địa chỉ:, Có phải là khoảng cách mở ra]。Một khoảng cách là một khối. mục (Thêm vào đó, "Thêm vào những điều đó", "Trách nhiệm của nền tảng")
// Những đoạn này"), không thể cung cấp cho mỗi đoạn trong khối một điểm gạch, vì vậy các đoạn được mở ra không kiểm tra điểm gạch.
// Trong bảng điều khiển, khi bị trục trặc theo trật tự diff Trò chơi tiêu đề Sự thay đổi được phát hiện。
const nums = s => {
  const out = [];
  for (const part of s.split(/[、,]/)) {
    const r = RANGE.exec(part);
    if (r) {
      const [a, b] = [Number(r[1]), Number(r[2])];
      if (b >= a && b - a <= 30) for (let i = a; i <= b; i++) out.push([i, true]);
      continue;
    }
    const n = Number(part.trim());
    if (Number.isFinite(n)) out.push([n, false]);
  }
  return out;
};
// Bài viết có tên là:：「3」「3、10」「11 đến 14」「5 Tới thứ 2 10」
const SPEC = '[\\d、,\\s]+?(?:(?:到|至)\\s*第?\\s*\\d+)?';

const out = [];
const problems = [];
const suspects = [];
const weak = [];
let total = 0;

// Đơn vị quét：book/ Một trong mỗi đoạn，docs/ Một trong số đó là:。
const targets = [
  ...files.map(f => ({ f, dir: 'book', isDoc: false })),
  ...docs.map(f => ({ f, dir: 'docs', isDoc: true })),
];

for (const { f, dir, isDoc } of targets) {
  const num = isDoc ? 0 : Number(f.slice(0, 2));
  const self = isDoc ? null : sections.get(num);
  const lines = readFileSync(resolve(ROOT, dir, f), 'utf8').split(/\r?\n/);
  const rows = [];
  // cur Đó là hiện tại. mục Số bài viết，0 Cho biết chưa vào mục（book Lời bài hát:、docs bất kỳ vị trí nào）。
  // unit Đây là tên của danh mục xuất phát: mục Đọc: N Câu "", phần đầu viết "chốt đầu", phần dài viết nhỏ gần đây nhất tiêu đề。
  let cur = 0;
  let unit = isDoc ? 'mở đầu' : 'đầu chương';

  // Những câu được trích dẫn trước đây thường được viết là "hỗ trợ y tế" (xem p. 11 (câu) "), để phân đoạn toàn bộ
  // Được liệt kê, không cần phải xoay khi quét bảng kiểm tra nội dung chính Bạn có thể quyết định có hay không?。
  // Đưa đến câu gần nhất để đọc là biên giới thay vì cố định chữ số cố định 14 Từ này đã khiến một số trích dẫn chính xác có vẻ đáng nghi ngờ.
  // （「CO2 18 Bài viết này được viết bởi: 13 Điều "CO2 chỉ còn lại sau khi bị cắt đứt" đối với "những vết thương"」）。
  const ctxOf = (line, idx) => {
    const before = line.slice(0, idx);
    let start = -1;
    for (const p of ['。', '；', '！', '？', '：']) start = Math.max(start, before.lastIndexOf(p));
    return before.slice(start + 1).slice(-44).replace(/\|/g, '｜');
  };
  // Chiếc cửa sổ được sử dụng để kiểm tra điểm thắt hơn so với cửa sổ trên: chỉ giao dịch với các đoạn comma ở đó. Trong một cửa sổ rộng như vậy,
  // 「Những từ "công ty" có thể dễ dàng thay đổi với những từ khác. mục tiêu đề Một sự kết hợp ngẫu nhiên, và nó trở nên sai lầm.——
  // 2026-09-20 Thứ nhất 31 Thêm vào mục , Chương 2 1 Đạo luật Ghi chú Trò chơi「……Các khoản vay được xem tại phần 15 Điều "đã bị đâm theo dõi"
  // Đổi mới mục "Công việc từ xa cho các công ty tại nước ngoài"……Thêm cả hai dấu ngoặc trong cửa sổ trên tờ báo cá nhân.
  // 「"Bạn đã đụng vào". tiêu đề Bài báo cá nhân của Larry」，--check Thông báo thông qua。
  // Khi câu nói quá ngắn（「……，Xem phần 11 Điều "như thế này, cửa sổ chỉ còn một từ "xem") và quay lại một câu.，
  // Nếu không, chúng ta sẽ sai lầm về việc trích dẫn đúng là số trống.。
  // Các chữ "tông" và chữ "tông" không bao giờ là giới hạn: "nhiều đồ uống có đường, thịt chế biến" 3 Địa điểm của "") nằm bên cạnh số Don，
  // 「Thêm ngân sách cho "Thêm hơn người khác" xem mục này 24 Điểm nhấn của mục "" trong đoạn trích, cắt sẽ làm tổn thương mọi người.。
  const CLAUSE = ['。', '；', '！', '？', '：', '，'];
  const narrowOf = (line, idx) => {
    const before = line.slice(0, idx);
    const cut = s => {
      let start = -1;
      for (const p of CLAUSE) start = Math.max(start, s.lastIndexOf(p));
      return { head: s.slice(0, start + 1), tail: s.slice(start + 1) };
    };
    const last = cut(before);
    if (last.tail.replace(/[见按同和依据参照的在]/g, '').length >= 4) return last.tail.slice(-24);
    return (cut(last.head.slice(0, -1)).tail + last.tail).slice(-24);
  };
  // Trong khi đó, người ta cũng có thể nói rằng: "Điều thứ hai" và "Điều thứ hai". 16 Bài viết: giấy vay nợ và bảo lãnh "Đây là một từ khóa được viết sau chữ số.
  // Nhận đến khi đọc câu đầu tiên sau khi trích dẫn 40 Lời bài hát: Không thể sử dụng số ký tự cố định: 1 Chương 3 7、8、
  // 14、17、18、19、23、24、29 Bệnh huyết áp, đường huyết…）」Những dòng chữ dài này sẽ đưa các dấu hiệu ra ngoài cửa sổ.。
  const afterOf = (line, idx) => {
    const rest = line.slice(idx).replace(new RegExp(`^Thứ nhất\\s*\\d+\\s*Chương 3?Thứ nhất?\\s*(?:${SPEC})?\\s*Đạo luật`), '');
    const end = rest.search(/[。；！？]/);
    return (end === -1 ? rest : rest.slice(0, end)).slice(0, 40).replace(/\|/g, '｜');
  };

  lines.forEach((line, i) => {
    if (isDoc) {
      const h = /^#{1,6}\s+(.+?)\s*$/.exec(line);
      if (h) { unit = h[1].slice(0, 24); return; }
    } else {
      const t = /^### (\d+)\. (.*)$/.exec(line);
      if (t) { cur = Number(t[1]); unit = `Thứ nhất ${cur} Đạo luật`; return; }
    }
    // mục nội dung chính Chỉ cần quét những vị trí đó thôi mục nguồn Đọc: N Điều "Thêm hơn là điều khoản điều khoản của luật") Lời bài hát và đoạn văn
    // nội dung chính Đó là những đoạn văn bình thường, không phù hợp với vị trí của người đứng đầu, và họ đã được nhảy qua một cách lặng lẽ như vậy.。
    const inEntry = !isDoc && cur > 0;
    if (inEntry ? !CROSS_FIELDS.test(line) : !line.trim()) return;

    // Các hướng dẫn tương đối ("xem phần tiếp theo" ("Cách phạt là phần tiếp theo") bị chặn một lần: nó không có số tiêu chuẩn, được chèn vào mục Khi theo dõi
    // Vị trí ảnh hưởng đến sự thay đổi của hệ thống kiểm soát diff Và không thể thấy được.，--check Bắt đầu kiểm tra số trống thậm chí không thể quét nó。
    // 2026-09-20 Một lần quét sẽ phát hiện ra ba điểm sai trước đó.：HPV Vaccine: "View Next" đề cập đến ung thư vú
    // Điều này được gọi là "sự trừng phạt" (xem trên) và đề cập đến điều khoản đăng ký thất nghiệp.
    // 「Bài trước không ký từ chức chủ động" đề cập đến việc lưu trữ bằng chứng. "Điều này sẽ giúp bạn tránh những sai lầm như "chiếc chân cuối cùng" và "một chân sau".。
    for (const m of line.matchAll(/(?<![最之以])(上一条|下一条|前一条|后一条|上面那条|上面这条|前面那条)/g)) {
      problems.push(`${f}:${i + 1} ${unit}: tham chiếu tương đối "${m[1]}"; đổi thành số mục cụ thể và từ khóa đối chiếu.`);
    }

    // Phân đoạn: 1 N Chương 3 X Đạo luật
    for (const m of line.matchAll(new RegExp(`Thứ nhất\\s*(\\d+)\\s*Chương 3\\s*(${SPEC})\\s*Đạo luật`, 'g'))) {
      const target = sections.get(Number(m[1]));
      for (const [x, range] of nums(m[2])) {
        const title = target?.titles.get(x);
        rows.push({ from: unit, range, ref: `Thứ nhất ${m[1]} Chương 3 ${x} Đạo luật`, title, line: i + 1, ctx: ctxOf(line, m.index), narrow: narrowOf(line, m.index), after: afterOf(line, m.index) });
        if (!title) problems.push(`${f}:${i + 1} ${unit}: chương ${m[1]} không có mục ${x}.`);
      }
    }

    // Không có khái niệm "nơi đây" trong phần dài, không có khái niệm "nơi này" trong phần dài. N Điều "trong phần dài" có nghĩa là số điều khoản của điều luật, không được quét。
    if (isDoc) return;

    // Trong phần: Quét tất cả các "thứ" X Điều " , không giới hạn cho các từ khóa nội dung chính Trong bài viết này, ông viết: X "Điều" và
    // 「Theo đoạn 1 "Phương pháp đánh giá và đoạn 4 Điều "Trước tiên đối lập" 8 Bài viết "Với phần 2 4 Điều 2 chọn 1」，
    // Trước đó, chỉ có ba từ hướng dẫn được nhận ra, tất cả đều bị bỏ qua ngoài việc quét. mục nguồn Không được quét sạch (tất cả là số điều khoản của luật pháp)）。
    // Bài viết đầu tiên không bị giới hạn vị trí: N Điều "đây là hướng dẫn" 9 "Điều thứ hai" 2 Đọc sách
    // và mối quan hệ với tuổi thọ"), cũng sẽ bị trục trặc theo trình tự, cũng được đưa vào bảng điều khiển.。
    if (inEntry && !FIELDS.test(line)) return;
    const stripped = line.replace(new RegExp(`Thứ nhất\\s*\\d+\\s*Chương 3\\s*${SPEC}\\s*Đạo luật`, 'g'), '');
    for (const m of stripped.matchAll(new RegExp(`Thứ nhất\\s*(${SPEC})\\s*Đạo luật`, 'g'))) {
      // Điều này là điều khoản của luật hay không? mục Lời trích dẫn。2026-09-21 Cách trước đây là nhìn trước. 16 Có chữ trong đó không?
      // 「Từ pháp luật, nhưng "phương pháp", "phương pháp", "hỗ trợ pháp lý", "bước giải pháp bất hợp pháp" đều có "lập pháp", một loạt các trích dẫn thực sự.
      // Tôi đã bỏ qua dây chuyền. Và nó cũng là một bước nhảy vọt trong sự im lặng: trích dẫn rễ không vào bảng kiểm tra，--check Không có tài liệu có thể kiểm tra được.
      // 「Trong khi đó, một số người có thể nhận được thông qua "", chỉ có thể tìm ra bằng số lượng tham khảo ít hơn. Một lần quét toàn bộ 12 Quý vị:。
      // Giờ đây, chúng tôi đã bỏ qua hai điều kiện rõ ràng.：
      //   ① Đúng thế nào? N Điều "là dấu trích dẫn——《…》、〔…〕、「14 "Điều giải thích này".」，
      //      Hoặc kết thúc với tên quy định: "Đạo luật Hình phạt quản lý an ninh". 26 Đạo luật」）；
      // Chỉ cần biết "đứng cạnh" chứ không phải đi trước. N Trong khi đó, người ta cũng có thể tìm thấy một cách khác để tìm hiểu những gì họ muốn. mục Lời trích dẫn
      // "Điều này có thể xảy ra nếu bạn không làm điều đó". 4 Báo cáo của các nhà chức trách cho biết: 7 Bài viết có tên gọi: "Hãy đến bệnh viện ngay lập tức"」）。
      // Chi phí là khi trích dẫn điều luật phải mang theo tên của tài liệu: một câu sau một câu sau đó phải được viết là "trả lời này được giải thích như thế nào". 11 Điều "không thể viết"
      // 「……Định của tòa án. Thứ nhất 11 Điều này đề cập đến việc lấy bằng chứng dựa trên một câu. Đó là điều mà tôi muốn làm. nội dung chính Những yêu cầu về sự tự phục vụ。
      const tail = stripped.slice(0, m.index).replace(/\s+$/, '');
      const CITE = /(《[^》]*》|〔[^〕]*〕|\d+\s*号|该(?:解释|意见|办法|规定|条例|通知|法)|[^\s，。；：、（）「」]{0,8}(?:法|条例|办法|规定|准则|细则|公约))$/;
      if (CITE.test(tail)) continue;
      for (const [x, range] of nums(m[1])) {
        const title = self.titles.get(x);
        rows.push({ from: unit, range, ref: `Bài viết này ${x} Đạo luật`, title, line: i + 1, ctx: ctxOf(stripped, m.index), narrow: narrowOf(stripped, m.index), after: afterOf(stripped, m.index) });
        // Các đoạn trích bên ngoài đoạn này mục Số, hầu hết là số điều khoản của Luật đã bị nhầm lẫn mục Quảng cáo, liệt kê và xem thủ công
        if (!title) problems.push(`${f}:${i + 1} ${unit}Quảng cáo: ${x} Bài viết: ${self.titles.size} Điều 4 có thể là điều khoản điều khoản）`);
        if (inEntry && x === cur) problems.push(`${f}:${i + 1}: mục ${cur} tự tham chiếu.`);
      }
    }
  });

  // Bạn có thể tự động xác minh rằng tài liệu tham khảo này chỉ ra đúng: trong tài liệu tham khảo trước và sau, không có một từ nào xuất hiện trong mục tiêu mục
  // tiêu đề Rhi. Có. → Đây là điểm tự tròn, được nhận thấy khi có sự thay đổi dẫn đến vị trí sai. Không có → Đó là một số nude.
  // （「Các thuật toán thực tế có thể được xem tại 34 Điều này không thể nhìn thấy được và cần phải bổ sung một dấu hiệu rõ ràng.。
  // Sự kết hợp của hai chữ cái dễ xảy ra một cách ngẫu nhiên (tự thân, công ty, thời gian) vì vậy chúng được phân loại theo chiều dài và khoảng cách.：
  // Trong toàn bộ câu, có 3 chữ cái liên kết với "những đồ uống có đường" và "hỗ trợ chăm sóc sức khỏe dân cư". Chỉ có hai chữ xả.，
  // Khi yêu cầu nó nằm trong các đoạn trích, nó sẽ chạm vào "tự mình" của hai dấu phẩy bên cạnh. tiêu đề Lilly
  // 「Một tờ báo cá nhân". 2026-09-20 Tại sao những người bị trục xuất đã bị kiểm tra。
  const longest = (text, title) => {
    let best = 0;
    for (let i = 0; i < text.length; i++) {
      for (let n = 1; i + n <= text.length; n++) {
        const seg = text.slice(i, i + n);
        if (!/^[一-龥]+$/.test(seg)) break;
        if (!title.includes(seg)) break;
        best = Math.max(best, n);
      }
    }
    return best;
  };
  // Số và chuỗi tiếng Anh cũng là điểm nhấn：12356、AED、CT、BMI、LPR Đây là những gì chúng ta thường đề cập đến.
  const token = (text, title) => (text.match(/[0-9A-Za-z]{2,}/g) ?? []).some(t => title.includes(t));
  for (const r of rows) {
    if (!r.title || r.range) continue;
    const wide = r.ctx + r.after;
    if (token(wide, r.title) || longest(wide, r.title) >= 3) continue;
    if (longest(r.narrow + r.after, r.title) >= 2) continue;
    // Chỉ có hai từ đụng vào bên ngoài đoạn văn, được liệt kê riêng theo điểm yếu điểm: sửa đổi và số trống là các dấu hiệu bổ sung.。
    const list = longest(wide, r.title) >= 2 ? weak : suspects;
    list.push(`${f}:${r.line} ${r.from} →「${r.ref}」${r.title.slice(0, 20)}…　…${r.ctx}【${r.ref}】${r.after}…`);
  }

  if (!rows.length) continue;
  total += rows.length;
  out.push(`## ${isDoc ? 'docs/' : ''}${basename(f, '.md')}\n`);
  out.push("| Đi ra ngoài | Lời trích dẫn | Định hướng mục | Quảng cáo ở trên |");
  out.push('| --- | --- | --- | --- |');
  for (const r of rows) {
    const title = r.title ? r.title : "**Định nghĩa là không tồn tại mục**";
    out.push(`| ${r.from} | ${r.ref} | ${title} | …${r.ctx}… |`);
  }
  out.push('');
}

const body = [
  "# Bảng đối chiếu tham chiếu chéo",
  '',
  "Tài liệu này được `node tools/check-refs.mjs` Được sản xuất, không thay đổi。",
  '',
  "nội dung chính \"Thứ thứ hai\" X Điều \"Chỉ ghi chú không ghi nhớ nội dung, đưa vào hoặc xóa mục Những người tham gia vào các chương trình này có thể tham gia vào các chương trình này.，",
  "Và những con số sai lầm thường vẫn nằm trong phạm vi và không thể nhìn thấy được. Vì vậy, chúng ta cần phải tham khảo tất cả**Định hướng thực tế tiêu đề**",
  "Đọc ở đây và đưa vào thư viện: đã hoàn thành mục Sản xuất lại，`git diff` Rhivân là người đứng yên. tiêu đề Sự thay đổi，",
  "Đó là một câu trích dẫn bị trục trặc.。",
  '',
  "phạm vi quét：`book/` Các đoạn sau mục nội dung chính Thêm vào: `docs/` Bài viết bên dưới: Không có trong văn bản dài",
  "「\"Đây là đoạn\", \"Đây là đoạn\", \"Đây là đoạn\" N Điều \"một lần khi điều luật bị vi phạm, nên trích dẫn phải viết toàn bộ\" X Chương 3 Y Đạo luật」。",
  "「\"Từ hàng\" ra, mục Đọc: N Câu \"\", phần đầu viết \"pháp đầu\", phần đầu viết \"pháp đầu\", phần đầu viết \"pháp đầu\". tiêu đề。",
  '',
  "Một loại bảo hiểm khác là**Vị trí**：Mỗi trích dẫn trước và sau đều có một từ và mục tiêu mục tiêu đề Được rồi.",
  "（「Cứu hộ y tế 11 Trong mục \"hỗ trợ y tế\" hoặc rõ ràng là \"xem mục 16 Bài viết: giấy vay nợ và bảo lãnh）」）。",
  "`node tools/check-refs.mjs --check` Một số chữ khỏa thân mà không có dấu chấm sẽ bị coi là một câu trích dẫn thất bại.",
  "Những người bị trục trặc. diff Và không thấy bất thường gì, chỉ có thể bám vào một cái nét. Trong khi đó, người ta cũng có thể nói rằng họ không phải là người đàn ông. 8 Chương 3 11 đến",
  "14 Điều \"\") là ngoại lệ: nó đề cập đến một phần toàn bộ mục Chúng tôi không thể đặt từng điểm trong từng khối, chỉ cần dựa vào diff Này.。",
  '',
  "Điểm điểm không tính số theo chiều dài và khoảng cách: cả câu liên kết với ba chữ cái và tiêu đề \"Bảo vệ sức khỏe của người dân\"」），",
  "Hoặc có hai chữ cái bên phải trong phân đoạn comma mà bạn đang tham khảo, và đó là điểm chính xác; Chỉ cần đập vào hai chữ phổ biến bên ngoài các đoạn văn",
  "（「Trong khi đó, các nhà sản xuất có thể sử dụng các sản phẩm của họ như các sản phẩm của họ. Đó là sự nghiêm khắc. 2026-09-20 Phụ lục: 31 Thêm vào mục Thời gian",
  "「……Các khoản vay được xem tại phần 15 Điều \"đã bị đụng vào một cái mới\" mục \"Công việc từ xa cho các công ty tại nước ngoài\"……Thuế riêng cho tờ báo，",
  "\"Bạn là chính mình\" bên cạnh hai comma là một điểm mờ.，`--check` Khi đó, báo cáo đã được thông qua。",
  '',
  `Nhìn chung ${total} Quảng cáo。`,
  '',
  ...out,
].join('\n');

if (problems.length) {
  console.log("Cần xác nhận nhân tạo：");
  for (const p of problems) console.log('  ' + p);
  console.log('');
}

// Một trong những điều đáng chú ý nhất là sự cố này. Tiếng Trung Trong bài viết này, ông viết: 30 Điều này chỉ ra rằng: "Thật là một ý tưởng".
// Hãy nói với một người bên cạnh rằng: "Tất cả là đúng, nhưng không có một từ nào chồng chéo".），288 Có thể báo cáo 159 Địa điểm; Sau đó, toàn bộ cuốn sách 345 Ở đâu
// Trong khi đó, có một số câu hỏi được đề cập đến trong bài viết này. 0，Báo cáo đã có một dấu hiệu bổ sung.。
// Nhưng nó chỉ đảm bảo rằng "sự sai lầm sẽ được nhận thấy" mà không đảm bảo "sự sai lầm sẽ bị chặn": mô phỏng liên tục truy cập toàn bộ trong phân đoạn.，
// Có khoảng 70% người bị chặn tại chỗ, còn lại là hai người lân cận nói về điều tương tự. tiêu đề Từ chung) vẫn còn dựa trên bảng kiểm tra diff。
if (process.argv.includes('--suspect') && suspects.length) {
  console.log(`Từ ngữ và mục tiêu của các tài liệu tham khảo tiêu đề Xin lỗi（${suspects.length} Có rất nhiều thông tin sai lệch và chỉ dùng để kiểm tra nhân tạo.）：`);
  for (const s of suspects) console.log('  ' + s);
  console.log('');
}

if (process.argv.includes('--suspect') && weak.length) {
  console.log(`Điểm nhấn chỉ đúng bên ngoài các đoạn văn（${weak.length} Ở đó, hầu hết là những từ thường gặp xảy ra vô tình, tương đương với không có điểm nhấn.）：`);
  for (const s of weak) console.log('  ' + s);
  console.log('');
}

if (CHECK_ONLY) {
  const fatal = problems.filter(p => p.includes('không có mục') || p.includes('tự tham chiếu') || p.includes('tham chiếu tương đối'));
  for (const p of fatal) console.log('  ' + p);
  // Không có một từ và mục tiêu sau khi trích dẫn tiêu đề Đáng chú ý, một số người trong số những người tham gia dự dự án này đã nhận được sự giúp đỡ từ các nhà nghiên cứu. mục Tiếp tục
  // Không ai nhìn thấy. Việc sửa đổi là việc bổ sung một điểm "xem đoạn 16 Bài viết: giấy vay nợ và bảo lãnh）」，
  // Từ trong khung bắt nguồn từ mục tiêu mục tiêu đề Có thể.。
  if (suspects.length) {
    console.log(`${suspects.length} Câu trả lời là số nude, không thể nhìn thấy được, xin hãy bổ sung dấu chấm: --suspect Xem danh sách）：`);
    for (const s of suspects.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (suspects.length > 10) console.log(`  …Một cái khác ${suspects.length - 10} Ở đâu`);
  }
  // Điểm điểm yếu cũng là điểm thất bại: chỉ có hai chữ xách phổ biến trong toàn một câu, bên trên và bên cạnh, tương đương với không có điểm điểm.。
  if (weak.length) {
    console.log(`${weak.length} Các điểm nhấn được trích dẫn ở đây chỉ trùng hợp không liên quan đến các đoạn văn, tương đương với không có điểm nhấn. --suspect Xem danh sách）：`);
    for (const s of weak.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (weak.length > 10) console.log(`  …Một cái khác ${weak.length - 10} Ở đâu`);
  }
  const bad = fatal.length + suspects.length + weak.length;
  console.log(bad ? `Nhìn chung ${bad} Điều cần giải quyết` : `Đánh giá tham chiếu：${total} Tất cả đều hướng về đúng hướng, và đều có dấu chấm.`);
  process.exit(bad ? 1 : 0);
}

writeFileSync(resolve(ROOT, 'docs/doi-chieu-tham-chieu.md'), body, 'utf8');
console.log(`Được viết docs/doi-chieu-tham-chieu.md，Nhìn chung ${total} Quảng cáo`);
