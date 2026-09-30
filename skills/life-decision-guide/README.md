# Kỹ năng ra quyết định cuộc đời (life-decision-guide)

Cho phép trợ lý AI dựa trên cuốn sách *Cẩm nang cuộc sống tối ưu chi phí hiệu quả* (HowToLiveBetter) để trả lời các câu hỏi thực tế: Có nên làm không, có đáng không, chọn phương án nào, khi xảy ra sự cố cần làm gì trước tiên, có thể nhận được khoản trợ cấp nào, làm vậy có phạm pháp không.

Skill này chỉ làm một việc cốt lõi: **Tra cứu các mục liên quan trực tiếp từ nội dung sách, sau đó sắp xếp theo bài toán chi phí - lợi ích trong sách để trả lời**, mỗi mục đều chú thích rõ xuất xứ từ Mục mấy Chương mấy. Chưa tra cứu được thì nói chưa tìm thấy, tuyệt đối không tự bịa số liệu.

Toàn bộ quy tắc nằm trong [SKILL.md](SKILL.md).

## Cài đặt cho Claude Code

Khi mở Claude Code trong kho lưu trữ này, bạn không cần cài đặt gì thêm — thư mục `.claude/skills/life-decision-guide/` đã được cấu hình sẵn.

Nếu muốn dùng ở bất kỳ thư mục nào trên máy, hãy sao chép vào thư mục skill cá nhân:

```bash
mkdir -p ~/.claude/skills/life-decision-guide && curl -fsSL -o ~/.claude/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/Gaorb80/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Sau đó, khi bạn hỏi các câu như "Mỗi ngày đi làm mất 2 tiếng có đáng không", "Bạn nhờ đứng ra bảo lãnh vay tiền, có nên ký không", skill sẽ tự động được kích hoạt; hoặc bạn có thể yêu cầu rõ ràng "Dùng life-decision-guide để trả lời".

## Cài đặt cho Codex / Antigravity

Trong kho lưu trữ này, file `AGENTS.md` ở thư mục gốc đã cấu hình sẵn chỉ dẫn.

Nếu muốn dùng toàn cục:

```bash
mkdir -p ~/.agents/skills/life-decision-guide && curl -fsSL -o ~/.agents/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/Gaorb80/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Sau đó bạn có thể gọi `$life-decision-guide` hoặc hỏi trực tiếp.

## Nguồn dữ liệu sách

Nếu có kho lưu trữ cục bộ, skill sẽ đọc trực tiếp từ thư mục `book/`; nếu không có, skill có thể tải nhanh bản shallow clone:

```bash
git clone --depth 1 https://github.com/Gaorb80/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```
