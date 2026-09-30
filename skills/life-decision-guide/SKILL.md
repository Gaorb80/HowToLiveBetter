---
name: life-decision-guide
description: Dùng nội dung cuốn sách "Cẩm nang cuộc sống tối ưu chi phí hiệu quả" (HowToLiveBetter) để trả lời các quyết định thực tế trong cuộc sống: Có nên làm không, có đáng không, chọn phương án nào, khi xảy ra sự cố cần làm gì trước tiên, có thể nhận được khoản trợ cấp nào, làm vậy có phạm pháp không. Tra cứu mục tương ứng trong sách trước khi trả lời, sắp xếp theo chi phí (tiền/thời gian/ý chí), mức độ lợi ích và cấp bằng chứng A/B/C, ghi rõ xuất xứ Mục mấy Chương mấy. Từ khóa kích hoạt: có nên, có đáng không, tính sao cho lời, chọn thế nào, giúp tôi quyết định, làm thế có vi phạm pháp luật không, nhận được gì, làm gì trước tiên, hiệu quả chi phí.
---

# Quyết định cuộc đời: Tra cứu theo "Cẩm nang cuộc sống tối ưu chi phí hiệu quả" trước khi trả lời

## Mục đích của skill này

Khi có người hỏi về một việc cụ thể trong cuộc sống nên giải quyết ra sao, trước tiên hãy tra cứu các điều mục liên quan trong *Cẩm nang cuộc sống tối ưu chi phí hiệu quả* (HowToLiveBetter), sau đó sắp xếp câu trả lời theo phương pháp tính toán chi phí - lợi ích trong sách.

**Chưa tra cứu được trong sách thì tuyệt đối không tùy tiện trả lời.** Mỗi con số, mỗi điều luật, mỗi kết luận trong câu trả lời đều phải chỉ rõ xuất xứ từ mục nào trong sách; nếu trong sách không có, hãy nói thẳng là sách chưa đề cập, có thể đưa ra nhận định theo lẽ thường nhưng phải chú thích rõ đó là lẽ thường chứ không phải nội dung của sách. Tuyệt đối không tự bịa số liệu, mã DOI hay số điều luật theo trí nhớ mơ hồ.

Cuốn sách chia những giá trị thu về thành 4 nhóm độc lập: **Tuổi thọ, Thời gian & Tâm sức, Tiền bạc, Tự do cá nhân**. **Bốn nhóm này tính toán độc lập, không quy đổi lẫn lộn** — "Tỷ lệ tử vong giảm 12%" và "Mỗi năm tiết kiệm 500 nghìn" không nằm trên cùng một thước đo.

## Bước 0: Kiểm tra xem có cần xử lý khẩn cấp ngay lập tức không

- **Tình trạng y tế cấp cứu đang diễn ra** (người ngã gục ngừng thở, xuất huyết lớn, hỏa hoạn, đuối nước, điện giật, ngộ độc, triệu chứng đột quỵ hoặc nhồi máu cơ tim): Nêu ngay việc gọi 115 / 114 và động tác sơ cứu đầu tiên tại hiện trường theo Chương 13, không bàn về hiệu quả chi phí lúc này.
- **Có ý định tự sát, bế tắc cuộc sống**: Cung cấp ngay đường dây nóng hỗ trợ tâm lý khẩn cấp, sau đó diễn giải theo các mục trong Chương 1 và Chương 29, không thuyết giáo, không phán xét động cơ.
- **Thủ tục pháp lý đang diễn ra** (đã bị triệu tập, tạm giữ, khởi kiện): Chỉ dẫn tới các mục tương ứng trong Chương 8, đồng thời nêu rõ sách chỉ cung cấp kiến thức nền tảng phổ quát, trường hợp cụ thể bắt buộc phải tìm luật sư tư vấn.
- Các trường hợp còn lại thực hiện theo các bước dưới đây.

## Bước 1: Tiếp cận nội dung sách

**Trên máy cục bộ**: Thư mục hiện tại hoặc thư mục cha có `README.md` và `book/01-不要早死.md`, đó là chế độ cục bộ, đọc trực tiếp.

**Từ xa**: Nếu chưa có, tải về bản sao chép nông (shallow clone) nhanh chóng:

```bash
git clone --depth 1 https://github.com/Gaorb80/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

## Bước 2: Định vị chương sách tương ứng

Chọn từ 1 đến 3 chương phù hợp: Đọc bảng "Những câu hỏi cuốn sách muốn trả lời" trong `README.md`, đối chiếu với vấn đề người dùng hỏi để chọn chương phù hợp.

Các file chương nằm trong thư mục `book/`.
Các bài viết dài chi tiết nằm trong thư mục `docs/`.

## Bước 3: Trích xuất các mục cụ thể

Tìm kiếm theo từ khóa trong các file chương.
**Đọc trọn vẹn toàn bộ mục được trích xuất**, đặc biệt là phần "Ghi chú" — đối tượng áp dụng, tranh cãi khoa học, ngoại lệ đều nằm ở đó.

Mỗi mục có cấu trúc:
```markdown
### Y. [Tiêu đề hành động]
<!-- 成本标签: 钱=... 时间=... 毅力=... 收益=... 口径=... -->
- Chi phí: ...
- Giải thích dễ hiểu: ...
- Lợi ích: ...
- Mức độ bằng chứng: A/B/C
- Nguồn: ...
- Ghi chú: ...
```

## Bước 4: Sắp xếp thứ tự ưu tiên

1. Sắp xếp theo tỷ lệ hiệu quả chi phí (Rất cao > Cao > Bình thường).
2. Cùng mức tỷ lệ thì ưu tiên theo cấp bằng chứng khoa học: A > B > C.
3. Không so sánh chéo giữa các tiêu chí khác nhau (Tuổi thọ, Tiền bạc, Thời gian, Tự do).

## Bước 5: Cấu trúc câu trả lời

1. **Kết luận ngắn gọn trong một câu**: Việc này có đáng làm không, nên làm hay không, bước đầu tiên là gì.
2. **Những việc nên làm trước tiên** (từ 3 đến 7 mục, theo thứ tự ưu tiên). Mỗi mục nêu: Động tác cụ thể, cái giá phải trả, lợi ích thu về, cấp bằng chứng, trích dẫn dạng "Mục Y Chương X (Tên mục)".
3. **Những điều không nên làm / không cần thiết làm**: Các điểm sách chỉ rõ là không đáng hoặc có bằng chứng phản tác dụng.
4. **Những điểm sách chưa đề cập**: Nói rõ ràng, trung thực.
5. **Lưu ý theo dõi lại**: Khi nào cần đánh giá lại quyết định.

## Giới hạn

Cuốn sách cung cấp kiến thức thực tế phổ quát dựa trên bằng chứng khoa học, không thay thế chẩn đoán của bác sĩ, tư vấn của luật sư hay kế toán viên.
