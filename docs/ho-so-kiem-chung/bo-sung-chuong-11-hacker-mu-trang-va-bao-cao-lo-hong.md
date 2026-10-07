# Hồ sơ kiểm chứng: Chương 11 hacker mũ trắng và báo cáo lỗ hổng — 2026-09-19

> Bản dịch máy dự thảo của hồ sơ lịch sử, chưa được rà soát song ngữ. Không dùng các câu trích dẫn ở đây làm căn cứ pháp lý hoặc y khoa; đối chiếu văn bản gốc tại URL nguồn. Xem [ghi chú bản dịch](README.md).

Nhiệm vụ Nguồn Người dùng lưu ý: 11 Một ví dụ về việc không có một chiếc mũ trắng là: 2016 Các trang web thử nghiệm đã phát hiện ra lỗ hổng, lấy một số dữ liệu của người dùng để chứng minh, gửi đến nền tảng lỗ hổng bên thứ ba, nhà sản xuất xác nhận trước khi cảm ơn, sau đó báo cáo, người bị bắt giữ và bị trục xuất sau nhiều tháng bị giam giữ và cuối cùng không bị kết án.。

Bài viết được bao gồm: 11 Chương 3 4 Bài viết viết crawler (nhiệm điểm là tránh lấy dữ liệu bảo vệ và bán dữ liệu) 8 Bài viết viết viết về thiết bị kiểm soát bất hợp pháp của người khác (nơi rơi là khai thác và kiểm soát camera, điện thoại di động). Cả hai đều dẫn đến Bộ luật Hình sự Điều 285 Điều 2 và giải thích〔2011〕19 Điều 1, nhưng không bao gồm hành vi "không được phép thực hiện các thử nghiệm an ninh", cũng không có bất kỳ văn bản nào viết về "từ thiện chí, bất lợi, báo cáo hậu quả" về vị trí bị kết án và cách thức xử lý hợp pháp sau khi phát hiện ra lỗ hổng. Một cuốn sách trước đây không đề cập đến các quy định quản lý lỗ hổng bảo mật sản phẩm mạng》。

Điểm hạ cánh: 11 Sự gia tăng 2 Bài viết mới 9、10 Đạo luật: 9 Tới thứ 2 15 Bài tiếp theo: 11 Tới thứ 2 17 Điều này đã được thực hiện bởi các nhà nghiên cứu.（book/09 Thứ nhất 32 Điểm thứ hai 11 Chương 3 9 Đạo luật」→「Thứ nhất 11 Chương 3 11 Đạo luật」，book/26 Thứ nhất 103 Điểm thứ hai 11 Chương 3 14 Đạo luật」→「Thứ nhất 11 Chương 3 16 Đạo luật: Điều này đã được sửa đổi 8 Đạo luật mục nguồn Một dấu hiệu chưa được xác minh được để lại (xem dưới đây)）。

Công cụ lấy nguồn：WebSearch + WebFetch。Đài báo pháp luật tối cao `gongbao.court.gov.cn` Hai lần trở lại 502，Lời giải thích〔2011〕19 Chương trình này được chuyển đổi sang Sở An ninh Công cộng thành phố Shenzhen. mục Trước đây đã được chuyển tải qua các liên kết tương tự) với Cục An ninh Công cộng tỉnh Quảng Đông, hai con số này phù hợp.。

## Thứ nhất 9 Không được phép kiểm tra an ninh）

| URL | Đánh giá lại | Nguyên tắc: |
|---|---|---|
| <https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/fl/11033925/index.html>（Bộ luật Hình sự Kết hợp văn bản, được chuyển tải bởi Cục quản lý giao thông an ninh công cộng thành phố Bắc Kinh, phần này đã được sử dụng trước đây） | Đúng vậy | Điều 285 (1) về các hệ thống thông tin máy tính xâm nhập các lĩnh vực quốc gia, xây dựng quốc phòng và công nghệ khoa học tiên tiến; Điều 2 nhằm mục đích xâm nhập vào các hệ thống hoặc sử dụng các phương tiện kỹ thuật khác ngoài quy định của khoản trước. 3 Trẻ tuổi, đặc biệt nghiêm trọng 3 đến 7 Năm |
| <https://ga.sz.gov.cn/ZWGK/ZCFG/ZCJD/content/post_1304363.html>（Lời giải thích〔2011〕19 Sở an ninh công cộng thành phố Shenzhen） | Đúng vậy | Điều 1: Tình huống nghiêm trọng: Thông tin nhận dạng dịch vụ tài chính 10 Các nhóm; Thông tin nhận dạng khác 500 Các nhóm; Kiểm soát bất hợp pháp hệ thống thông tin máy tính 20 Thậm chí, Thu nhập bất hợp pháp 5000 Tăng tiền hoặc gây thiệt hại kinh tế 1 Hơn 1 triệu đô la. "Điều xảy ra là rất nghiêm trọng" là tiêu chuẩn trên. 5 Hơn gấp đôi |
| <https://www.spp.gov.cn/spp/jczdal/201710/t20171017_202593.shtml>（Các trường hợp hướng dẫn thứ 9 của Tòa án Tối cao） | Đúng vậy | Các trường hợp 36 Cụ thể, trong trường hợp này, có nhiều trường hợp khác. Mục tiêu: "Việc sử dụng tài khoản, mật khẩu để đăng nhập vào hệ thống thông tin máy tính ngoài phạm vi ủy quyền là một hành vi xâm nhập hệ thống thông tin máy tính". Vụ án: Kim cung cấp tài khoản và mật khẩu mà ông có trong công việc、Token Đơn hiệu, hệ thống phát triển quản lý nội bộ của công ty đã đăng ký và tải về dữ liệu điện tử không có phạm vi làm việc, được bán trên Internet, thu nhập bất hợp pháp. 37000 Nguyên nhân: Đồ Đào Nha 4 Hình phạt hàng năm 4 1 triệu đô-la. 3 Năm 9 Hình phạt hàng tháng 4 Nguyên nhân, Đông Dương 4 Hình phạt hàng năm 4 Mán đô la |

Định nghĩa A：Các trường hợp về tội phạm và án phạt trong việc giải thích pháp lý Bộ luật Hình sự Trong bản gốc có thể xác minh theo từng chữ, trường hợp là trường hợp hướng dẫn cao nhất. mức độ lợi ích "Lớn" và "Tự do". tiêu chí đánh giá Định dạng theo "Tránh án hình sự"。

Các trường hợp thay đổi：**Các trường hợp của thế kỷ này không được ghi lại nội dung chính**。Vụ án cuối cùng đã không được đưa vào phán quyết, không có thông báo hoặc văn bản nào có thể xác nhận theo từng chữ, và tất cả thông tin trong năm đó đều đến từ các báo cáo truyền thông, theo quy tắc lưu trữ chỉ trích nguyên bản. tài liệu tham khảo Không được trích dẫn, cách xử lý và các văn bản chính thức, không được phép bản sao lại 9 Chương "Công vụ sạc điện miễn phí cho doanh nghiệp xe hơi" 11 Chương 3 11 Điều "Cụ thể trường hợp lật tường" phù hợp. mục Do đó, chỉ cần viết theo các quy định của luật pháp và các tiêu chuẩn hình phạt và Ghi chú Bài viết này viết rằng: "Khi viết đoạn này, các trường hợp thử nghiệm thiện chí không được tìm thấy trên các trang web của Cục Thẩm phán tối cao, có thể xác minh theo từng từ.」。

Các trường hợp nhập khẩu 36 Đường biên giới đã được xây dựng. Ghi chú Nó nói rằng vụ việc này là một vụ bán dữ liệu có lợi nhuận, chỉ đưa ra chủ đề của nó là "trên quyền là xâm nhập", và không sử dụng hình phạt để so sánh với thử nghiệm thiện chí.。

「Các lý do và hậu quả của việc đưa ra báo cáo không có lý do tội" là một tuyên bố về các yếu tố tạo thành điều khoản của luật pháp (không có nghĩa là điều kiện điều khoản 285 (2)), kết luận không có trường hợp, không được đánh dấu như một tuyên bố chính thức。

## Thứ nhất 10 Điều 4 - Các hạn chế về thông báo và phát hành lỗ hổng）

| URL | Đánh giá lại | Nguyên tắc: |
|---|---|---|
| <https://www.gov.cn/gongbao/content/2021/content_5641351.htm>（Quốc vụ viện Báo cáo, Bộ Công nghiệp Thông tin An ninh mạng〔2021〕66 Số 1） | Đúng vậy | Điều 2 phạm vi áp dụng bao gồm "những tổ chức hoặc cá nhân tham gia vào các hoạt động phát hiện, thu thập và phát hành các lỗ hổng an ninh sản phẩm mạng"; Điều IV không được sử dụng lỗ hổng để thực hiện các hoạt động gây tổn hại đến an ninh mạng và không được bất hợp pháp thu thập và bán thông tin về lỗ hổng; Điều 9 (5): Không được công bố trước khi biện pháp sửa chữa được thực hiện, không được công bố chi tiết về lỗ hổng trong hệ thống, không được phóng đại chủ ý với gian lận độc hại, không được công bố hoặc cung cấp các công cụ lập trình dành riêng cho việc khai thác lỗ hổng, không được công bố đồng thời các biện pháp sửa chữa hoặc phòng ngừa, và không được quy định cung cấp thông tin về lỗ hổng không được công bố cho các tổ chức bên ngoài hoặc cá nhân bên ngoài nhà cung cấp sản phẩm; Điều 10 Khuyến khích các nền tảng chia sẻ thông tin về các mối đe dọa và lỗ hổng an ninh mạng của Bộ Công nghiệp, các nền tảng lỗ hổng của Trung tâm thông tin an ninh mạng và thông tin quốc gia, các nền tảng lỗ hổng tại Trung tâm phối hợp xử lý công nghệ khẩn cấp của mạng lưới máy tính quốc gia, Trung Quốc Thông báo về các lỗ hổng của Trung tâm Đánh giá An ninh Thông tin; Điều 14 Các vụ thu thập bất hợp pháp được công bố bởi Bộ Thông tin Công nghiệp, Bộ Công an Các hình phạt theo quy định này được xử lý theo trách nhiệm, bao gồm các trường hợp được quy định trong Luật an ninh mạng。2021 Năm 9 Mặt trăng 1 Ngày hành động |
| <https://wap.miit.gov.cn/jgsj/waj/wjfb/art/2021/art_96c2d3de7a6f400ea1d8522b7893db7a.html>（Bộ Công nghệ, kiểm tra chéo 2, 4, 11-14） | Đúng vậy | phù hợp với thông báo này |
| <https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm>（Luật an ninh mạng 2025 Năm sửa đổi） | Đúng vậy | Điều 28: Thực hiện các hoạt động như chứng nhận an ninh mạng, kiểm tra, đánh giá rủi ro, công bố thông tin an ninh mạng như lỗ hổng hệ thống, virus máy tính, tấn công mạng, xâm nhập mạng cho xã hội, phải tuân thủ các quy định liên quan của quốc gia. Điều 65: Chỉ thị sửa đổi, cảnh báo, có thể xử lý 1 Hơn 1 nghìn đô la 10 Hình phạt dưới 10.000 USD; Không được sửa chữa hoặc tình huống nghiêm trọng 10 Hơn 1 nghìn đô la 100 Hình phạt dưới 1 triệu USD và có thể ra lệnh đình chỉ hoạt động liên quan, ngừng sửa chữa, đóng cửa các trang web hoặc ứng dụng, hủy bỏ giấy phép hoạt động liên quan hoặc hủy bỏ giấy phép hoạt động, đối với người quản lý trực tiếp chịu trách nhiệm và những người khác chịu trách nhiệm trực tiếp. 1 Hơn 1 nghìn đô la 10 Hình phạt dưới 10.000 USD |

Định nghĩa A：Các điều khoản của quy định có thể được thực hiện theo từng quy định, và số tiền phạt có số cụ thể. mức độ lợi ích "Trung tâm" là tự do. tiêu chí đánh giá Nhấp vào "Hãy tránh" xử phạt hành chính "Điều này là trách nhiệm hành pháp của việc công bố hành vi, và tội phạm là một trong những điều trên.。

Bài viết được viết mục nguồn Đạo luật quản lý lỗ hổng an ninh sản phẩm mạng Điều 14 Điều 62 của Đạo luật An ninh mạng được trích dẫn là: 2016 Các điều khoản của văn bản năm, quy định của bản thân không được sửa đổi theo pháp luật, hiện hành phù hợp với Điều 65。

## Dòng sửa đổi: 1 8 Đạo luật mục nguồn Đánh dấu chưa được xác minh

Nguyên nhân 8 Đạo luật mục nguồn Viết "Thỏa thuận cấm làm việc suốt đời" 2016 Văn bản hàng năm: Điều 63, đoạn 2, được sửa đổi trách nhiệm pháp lý Điều khoản có điều chỉnh, lần này không được xác minh từng điều khoản". Kết quả kiểm tra từng giai đoạn：

| Nội dung | 2016 Văn bản hàng năm | 2025 Năm sửa đổi |
|---|---|---|
| cấm xâm nhập bất hợp pháp vào mạng của người khác, làm gián đoạn hoạt động của mạng, ăn cắp dữ liệu mạng | Điều 27 | Điều 29 |
| Các hình phạt trên là:、5 Giữ giam và bị giam giữ 5 Thậm chí 50 10 triệu đồng; Chuyện nặng hơn 5 đến 15 Ngày bị giam giữ 10 Thậm chí 100 Mán đô la） | Điều 63 (1) | Điều 66 (1) |
| Hình phạt hành vi trước đó của đơn vị | — | Điều 66 (2) |
| Hình phạt trọn đời bị quản lý an ninh 5 Những người bị trừng phạt hình sự bị cấm làm việc trong các vị trí quan trọng trong quản lý an ninh mạng và hoạt động mạng trong suốt một năm） | Điều 63 (2) | **Điều 66 (3)** |
| Việc xác nhận an ninh mạng và phát hành thông tin lỗ hổng phải tuân thủ các quy định của quốc gia | Điều 26 | Điều 28 |
| Luật phạt trên | Điều 62 | Điều 65 |

mục nguồn Điều này được chuyển đổi thành "Đạo luật 2966".；2016 Văn bản hàng năm là 27/63, và lệnh cấm làm việc trọn đời là điều 66 (3) được sửa đổi" và loại bỏ "không xác minh từng đoạn trong điều này".」。

Lưu ý: Không được tìm thấy trong đoạn trích sửa đổi Điều 65 2016 Trong bài viết của năm nay, một câu nói là "sự tịch thu bất hợp pháp". nội dung chính Như đã được sửa đổi trong bản gốc, không sử dụng biểu hiện cũ. Phần còn lại của cuốn sách về luật an ninh mạng（book/26 Thứ nhất 67 Đơn vị tên thực 11 Chương 3 16 Lưu trữ ghi chép、docs/lam-nen-tang-can-nhung-giay-phep-gi.md）Trước đây đã được xử lý theo số sửa đổi của Điều này và không được sửa đổi lần này。
