$--
$-- pandoc của typst Mô hình: $body$ Và một vài -V Variable), không cần pandoc Tự đạp conf()：
$-- Bản mẫu tự động đặt trang khóa vào conf() Tôi không thể thay đổi mặt, mặt và chân, vì vậy tôi tự xếp hàng ở đây.。
$-- Bắt đầu divider Đó là: pandoc Tạo ra nội dung chính Định nghĩa hỗ trợ cần sử dụng `pandoc -D typst`，Đừng xóa.。
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
// pandoc Nhập vào biểu mẫu align(center) Trong khi đó, các đơn vị sẽ tiếp tục ở lại. Tiếng Trung Các biểu đồ ở bên trái được sắp xếp để đọc
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
// Một biểu đồ dài có thể vượt qua các trang, nếu không toàn bộ khối sẽ không bị trộn và để lại một trang trống
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- Trang web ----------
#set document(title: "$booktitle$", author: "eternity4719")
#set text(
  // tiếng Tây Ban Nha typst Tự đạp Libertinus，Tiếng Trung Tìm kiếm sau khi có khả năng：CI Ở trên. Noto，Đây là máy bay của Jaha.
  font: ("Libertinus Serif", "Noto Serif CJK SC", "Noto Serif SC", "Source Han Serif SC", "Noto Sans CJK SC", "Microsoft YaHei", "SimSun"),
  size: 10.5pt, lang: "vi", region: "vn",
)
#set par(justify: false, leading: 0.78em, spacing: 0.9em)
#set list(indent: 0.6em, spacing: 0.75em)
#show raw: set text(font: ("DejaVu Sans Mono", "Noto Sans Mono CJK SC", "Consolas"), size: 9pt)
#show link: set text(fill: rgb("#1a4fb4"))
#show heading: set block(sticky: true, above: 1.5em, below: 0.65em)
#show heading.where(level: 1): set text(19pt)
#show heading.where(level: 2): set text(14pt)
#show heading.where(level: 3): set text(11.5pt)
// Mỗi đoạn có một trang khác；weak Đảm bảo rằng bạn sẽ không có nhiều trang trống khi trang trước đầy đủ.
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// Hình trước: Tên sách bên trái, tên hiện tại bên phải; Các trang đầu tiên của một đoạn
#let running-head = context {
  let next = query(selector(heading.where(level: 1)).after(here())).at(0, default: none)
  if next != none and next.location().page() == here().page() { return }
  let seen = query(selector(heading.where(level: 1)).before(here()))
  if seen.len() == 0 { return }
  set text(8.5pt, fill: luma(120))
  grid(columns: (1fr, auto), align(left)[$booktitle$], align(right)[#seen.last().body])
  v(-7pt)
  line(length: 100%, stroke: 0.4pt + luma(215))
}

// ---------- Trang bìa ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #image("/og.png", width: 100%)
  #v(1.2cm)
  #block(width: 80%)[#text(11.5pt, fill: luma(60))[$subtitle$]]
  #v(2cm)
  #text(10pt, fill: luma(90))[
    Tạo lúc $builddate$ (giờ Việt Nam) · Commit $commit$ \
    Nội dung tiếp tục được cập nhật. Xem bản trực tuyến: $site$ \
    Tra cứu, EPUB và PDF mới nhất: $repo$
  ]
]

// ---------- Thư mục ----------
#pagebreak()
#outline(title: [Mục lục], depth: 1, indent: 1em)

// ---------- nội dung chính ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(120))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$
