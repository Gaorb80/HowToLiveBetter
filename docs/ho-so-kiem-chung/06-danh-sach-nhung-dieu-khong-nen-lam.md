# Hồ sơ kiểm chứng: Danh sách những điều không nên làm — 6

> Bản dịch máy dự thảo của hồ sơ lịch sử, chưa được rà soát song ngữ. Không dùng các câu trích dẫn ở đây làm căn cứ pháp lý hoặc y khoa; đối chiếu văn bản gốc tại URL nguồn. Xem [ghi chú bản dịch](README.md).

Cách xác minh：doi.org Tất cả đều trở về. 302 Chuyển；JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature Trang của nhà xuất bản WebFetch Trở lại 403，PubMed Trang chỉ quay lại cookie Lời khuyên. Vì vậy, kết luận nội dung chính Thỏa thuận thống nhất Europe PMC Chính thức REST Giao diện（`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json`>，Trở lại PubMed Bài viết cùng nguồn và abstractText）xác minh; Sử dụng cá nhân NCBI E-utilities efetch。"Thực sự mở ra" URL」Đó là khi kiểm tra. WebFetch Địa chỉ của nội dung đã được trả lại thành công. Tất cả DOI Tất cả đều Europe PMC Bài viết trả lời có chứa: tiêu đề/Nhà văn/1 năm tương ứng。

## mục 1 Vitamin phức hợp

- Nguồn A：Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - Thực sự mở：Europe PMC REST（DOI Thảo luận: tiêu đề Tích hợp「Multivitamins in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial」，2012，JAMA。Được xác nhận。
  - Quảng cáo về nguồn số:）：「14,641 male US physicians」「median follow-up 11.2 years」「major cardiovascular events … HR, 1.01; 95% CI, 0.91-1.10; P = .91」「total mortality … HR, 0.94; 95% CI, 0.88-1.02; P = .13」
- Nguồn B：USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - Thực sự mở：<https://jamanetwork.com/journals/jama/fullarticle/2793446>（doi.org Những người tham gia vào chiến dịch này đều có thể tham gia vào các hoạt động của mình. tiêu đề Tích hợp「Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement」，2022，JAMA 327(23)。Được xác nhận。
  - Quảng cáo về nguồn số：「Multivitamin trials reviewed: 9 RCTs involving 51,550 participants showed no association between multivitamin supplementation and all-cause mortality」；Đánh giá phim đa dạng I；β Cà rốt/Vitamin E Đánh giá D（「recommends against the use of beta carotene or vitamin E supplements for the prevention of cardiovascular disease or cancer」）；β Cà rốt「Increased lung cancer risk (RR 1.18) in smokers/asbestos-exposed workers」（Không được trích dẫn trực tiếp 1.18 Những con số này）。
- Ghi chú Phản ngược：Gaziano JM et al. 2012 JAMA, DOI 10.1001/jama.2012.14641
  - Thực sự mở：<https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641>（Lần này PubMed Một trong những điều đáng chú ý nhất là: tiêu đề Tích hợp「Multivitamins in the prevention of cancer in men: the Physicians' Health Study II randomized controlled trial」。Được xác nhận。
  - Quảng cáo về nguồn số：「hazard ratio [HR], 0.92; 95% CI, 0.86-0.998; P=.04」「HR, 0.88; 95% CI, 0.77-1.01; P=.07」

## mục 2 Dầu cá

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - Thực sự mở：Europe PMC REST（DOI Thảo luận: tiêu đề Tích hợp「Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer」，2019，NEJM。Được xác nhận。
  - Quảng cáo về nguồn số：「25,871 participants」「1 g/day」「median follow-up of 5.3 years」「major cardiovascular events … hazard ratio, 0.92; 95% CI, 0.80 to 1.06; P=0.24」「Death from any cause … hazard ratio was 1.02 (95% CI, 0.90 to 1.15)」
- ASCEND Study Collaborative Group 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus」，2018，NEJM。Được xác nhận。
  - Quảng cáo về nguồn số：「15,480 patients with diabetes without atherosclerotic cardiovascular disease」「1-gram capsules daily」「Mean 7.4 years」「rate ratio, 0.97; 95% CI, 0.87 to 1.08; P=0.55」「All-cause mortality: rate ratio, 0.95; 95% CI, 0.86 to 1.05」
- Ngược lại：Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - Thực sự mở：<https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text>（Europe PMC  mục Không abstractText，Chuyển đổi NCBI efetch）。tiêu đề Tích hợp「Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia」，REDUCE-IT Investigators，NEJM 2019（PMID 30415628）。Được xác nhận。
  - Quảng cáo về nguồn số：「hazard ratio was 0.75 (95% CI, 0.68–0.83; P<0.001)」「17.2% of the icosapent ethyl group versus 22.0% of the placebo group」「2 g of icosapent ethyl twice daily (total daily dose, 4 g)」「established cardiovascular disease or diabetes … statin therapy, fasting triglycerides of 135–499 mg/dL」「8,179 patients」

## mục 3 Vitamin D

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease」，2019，NEJM。Được xác nhận。
  - Quảng cáo về nguồn số：「2000 IU daily」「25,871」「Median 5.3 years」「Invasive cancer: hazard ratio, 0.96; 95% CI, 0.88 to 1.06; P=0.47」「Major cardiovascular events: hazard ratio, 0.97; 95% CI, 0.85 to 1.12; P=0.69」「Death from any cause: hazard ratio was 0.99 (95% CI, 0.87 to 1.12)」
- Neale RE et al. 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - Thực sự mở：Europe PMC REST（Theo: DOI Query trở lại trống và thay đổi TITLE:"D-Health Trial" AND AUTH:Neale Câu hỏi và trả lời DOI Các lĩnh vực: 10.1016/S2213-8587(21)00345-4，Với những gì đã viết DOI Sự đồng thuận. tiêu đề Tích hợp「The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality」，2022。Được xác nhận。
  - Quảng cáo về nguồn số：「21 315 participants, including 10 662 to the vitamin D group and 10 653 to the placebo group」「60 000 IU per month for 5 years」「1100 deaths were recorded (placebo 538 [5·1%]; vitamin D 562 [5·3%])」「HR … 1.04 [95% CI 0·93 to 1·18]; p=0·47」「median follow-up 5·7 years」「Australians 60 years or older who were recruited across the country via the Commonwealth electoral roll」（Lần thứ hai lấy xác nhận theo chữ; nội dung chính Theo đó,「60 "trên tuổi", không viết giới hạn cụ thể）。

## mục 4 Các chất bổ sung chống oxy hóa

- Bjelakovic G et al. 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases」，2012，Cochrane Database Syst Rev。Được xác nhận。
  - Quảng cáo về nguồn số：「78 trials, 296,707 participants」「RR 1.02, 95% CI 0.98 to 1.05 (random-effects)」「Low risk of bias trials (56 trials, 244,056 participants): RR 1.04, 95% CI 1.01 to 1.07」「Beta-carotene: RR 1.05, 95% CI 1.01 to 1.09」「Vitamin E: RR 1.03, 95% CI 1.00 to 1.05」
- ATBC Study Group 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers」，1994，NEJM。Được xác nhận。
  - Quảng cáo về nguồn số：「29,133 male smokers」「20 mg per day」「change in incidence, 18 percent; 95 percent confidence interval, 3 to 36 percent」「8 percent higher (95 percent confidence interval, 1 to 16 percent)」
- Omenn GS et al. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease」，1996，NEJM。Được xác nhận。
  - Quảng cáo về nguồn số：「18,314 smokers, former smokers, and asbestos-exposed workers」「relative risk of lung cancer of 1.28 (95 percent confidence interval, 1.04 to 1.57; P=0.02)」「relative risk of death from any cause was 1.17 (95 percent confidence interval, 1.03 to 1.33)」
- Ghi chú Trong USPSTF D Tỷ lệ: mục 1 Nguồn B，Được xác nhận。

## mục 5 Amino/Chất xyloacid

- Clegg DO et al. 2006 NEJM, DOI 10.1056/NEJMoa052771
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis」，2006，NEJM。Được xác nhận。
  - Quảng cáo về nguồn số：「1,583 patients」「placebo (60.1%)」「Glucosamine: 3.9 percentage points higher (P=0.30)」「Chondroitin sulfate: 5.3 percentage points higher (P=0.17)」「Combined treatment: 6.5 percentage points higher (P=0.09)」「Celecoxib: 10.0 percentage points higher (P=0.008)」「moderate-to-severe pain at baseline … 79.2 percent vs. 54.3 percent, P=0.002」；Lần thứ hai lấy xác nhận từ từ「… or placebo for 24 weeks」và「Exploratory analyses suggest that the combination of glucosamine and chondroitin sulfate may be effective in the subgroup of patients with moderate-to-severe knee pain」。

## mục 6 Vitamin C

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Vitamin C for preventing and treating the common cold」，2013。Được xác nhận。
  - Quảng cáo về nguồn số：「pooled RR was 0.97 (95% confidence interval (CI) 0.94 to 1.00)」「29 trial comparisons with 11,306 participants」「In adults, colds shortened by 8% (3% to 12%); in children by 14% (7% to 21%)」「No consistent effect of vitamin C was seen on the duration or severity of colds in the therapeutic trials」。Ghi chú Số lượng người bị căng thẳng thể chất cực đoan trong số đó bắt nguồn từ câu xác nhận từ từ lần thứ hai：「Five trials involving a total of 598 marathon runners, skiers and soldiers on subarctic exercises yielded a pooled RR of 0.48 (95% CI 0.35 to 0.64)」。

## mục 7 Toàn bộ PET-CT / Các dấu hiệu ung thư

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926
  - Thực sự mở：<https://pubmed.ncbi.nlm.nih.gov/29450531/>（Một lần nữa, ông đã trở lại thành công. tiêu đề Tích hợp「Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement」，2018，JAMA，DOI 10.1001/jama.2017.21926。Được xác nhận. (Tôi bắt đầu nhớ) DOI 10.1001/jama.2018.0938 Đúng rồi, đã được dùng rồi. WebSearch Tìm đúng DOI và xác minh。）
  - Thực sự mở：<https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>。Được xác nhận。
  - Các trang chính thức từng chữ trích dẫn nguồn số）：「No difference was found in ovarian cancer mortality … with 0.34% in the screening group and 0.29% in the usual care group (relative risk, 1.18 [95% CI, 0.82 to 1.71])」「Surgery to investigate positive screening test results among women who ultimately did not have ovarian cancer occurred in 0.2% of participants in the UK Pilot CA-125 group, 0.97% … 3.25% of participants in the UKCTOCS ultrasound group, and 3.17% of participants in the PLCO CA-125 plus ultrasound group」「Up to 15% of these women had major surgical complications」
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Whole-body CT screening: spectrum of findings and recommendations in 1192 patients」，2005，Radiology。Được xác nhận。
  - Quảng cáo về nguồn số：「1030 (86%) of 1192 subjects had at least one abnormal finding」「Four hundred forty-five (37%) patients received at least one recommendation for additional evaluation」「most findings were benign by description and required no further evaluation」

## mục 8 Nhẫn thông minh

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial」，2016，JAMA。Được xác nhận。
  - Quảng cáo về nguồn số：「estimated mean weight loss, 3.5 kg [95% CI, 2.6-4.5] in the enhanced intervention group and 5.9 kg [95% CI, 5.0-6.8] in the standard intervention group; difference, 2.4 kg [95% CI, 1.0-3.7]; P = .002」「471 randomized participants」

## mục 9 Thực phẩm hữu cơ

- Smith-Spangler C et al. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Are organic foods safer or healthier than conventional alternatives?: a systematic review」，2012，Annals of Internal Medicine。Được xác nhận。
  - Quảng cáo về nguồn số：「17 studies in humans and 223 studies of nutrient and contaminant levels in foods met inclusion criteria」「The published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods」「risk difference, 30%」（Các loại thuốc trừ sâu）「Only 3 human studies examined clinical outcomes, finding no significant differences … for allergic outcomes or symptomatic infection」。Tóm lại「antibiotic-resistant … risk difference, 33%」，Câu này không được trích dẫn. "Phân tích không phải là quá mức" là từ ngữ của tôi, trích dẫn sự khác biệt về rủi ro trong phân tích dư thừa, không đề cập đến tỷ lệ quá mức.。

## mục 10 Sản phẩm sức khỏe

- Trang thông tin của Cơ quan giám sát thị trường quốc gia
  - Thực sự mở：<https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>。Trang tiêu đề "Chính quyền quản lý thị trường tổ chức một cuộc họp báo về việc quản lý danh sách nguyên liệu và chức năng của các loại thực phẩm chăm sóc sức khoẻ cho bắp bắp.」，2019 Năm 8 Mặt trăng 20 Ngày phát hành，samr.gov.cn Trang web chính thức. Được xác nhận。
  - Quảng cáo được trích dẫn là: "Nhiều thực phẩm y tế không phải là thuốc, không thể thay thế thuốc chữa bệnh". 20%」「bổ sung các chất dinh dưỡng trong thực phẩm, duy trì cải thiện sức khỏe cơ thể hoặc giảm nguy cơ mắc bệnh」
  - Không xác nhận: Trang gốc thông báo <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> liên tục 4 Tiếp theo. WebFetch Tương đương「Socket is closed」，gov.cn Chuyển trang 404，Vì vậy, Nguồn Chỉ viết thành công khi mở samr.gov.cn Trang phát hành。

## mục 11 Probiotics

- Khalesi S et al. 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「A review of probiotic supplementation in healthy adults: helpful or hype?」，2019，European Journal of Clinical Nutrition。Được xác nhận。
  - Quảng cáo nguồn văn bản：「45」Nghiên cứu；「this review failed to support the ability of probiotics to cause persistent changes in gut microbiota, or improve lipid profile in healthy adults」；Thay đổi nhóm vi khuẩn「transient」；Chỉ số cải thiện nhỏ「stool consistency, bowel movement, and vaginal lactobacilli concentration」

## mục 12 Chất nước lạnh

- Buijze GA et al. 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - Thực sự mở：<https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>。tiêu đề Tích hợp「The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial」，2016。Được xác nhận。
  - Quảng cáo về nguồn số：「3,018 individuals」「30, 60, or 90 seconds」「29% reduction … (IRR: 0.71, P = 0.003)」「For illness days there was no significant group effect」「no clinically relevant differences in quality of life, work productivity, anxiety」
- Cain T et al. 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
  - Thực sự mở：<https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615>。tiêu đề Tích hợp「Effects of cold-water immersion on health and wellbeing: A systematic review and meta-analysis」，2025。Được xác nhận。
  - Quảng cáo nguồn văn bản：「Eleven randomized controlled trials encompassing 3,177 total participants」「significant increases in inflammation immediately…and 1 hour post CWI」「no meaningful immediate or delayed immune changes」「a significant reduction in stress…12 hours post-CWI」「current evidence base is constrained by few RCTs, small sample sizes」

## mục 13 Khử độc/Tăng cường

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - Thực sự mở：Europe PMC REST。tiêu đề Tích hợp「Detox diets for toxin elimination and weight management: a critical review of the evidence」，2015。Được xác nhận。
  - Quảng cáo nguồn văn bản：「Although the detox industry is booming, there is very little clinical evidence to support the use of these diets」「no randomised controlled trials have been conducted to assess the effectiveness of commercial detox diets in humans」
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - Thực sự mở：Europe PMC REST（DOI Thảo luận: tiêu đề Tích hợp「Systematic review of the association between dietary acid load, alkaline water and cancer」，2016，BMJ Open。Được xác nhận. (Tôi bắt đầu nhớ) DOI 10.1136/bmjopen-2016-010438 Đúng rồi.，doi.org Trở lại 404；WebSearch Với Europe PMC Tất cả đều đưa ra 2015-010438，Được sửa đổi。）
  - Quảng cáo nguồn văn bản：「8278 citations were identified, and 252 abstracts were reviewed; 1 study met the inclusion criteria」「no association between the diet acid load with bladder cancer (OR=1.15: 95% CI 0.86 to 1.55, p=0.36)」「Promotion of alkaline diet and alkaline water to the public for cancer prevention or treatment is not justified」

## mục 14 Mỗi ngày 8 Cốc nước

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - Thực sự mở：Europe PMC REST（journals.physiology.org Trở lại 403）。tiêu đề Tích hợp「"Drink at least eight glasses of water a day." Really? Is there scientific evidence for "8 x 8"?」，Heinz Valtin，2002。Được xác nhận。
  - Quảng cáo nguồn văn bản：「No scientific studies were found in support of 8 x 8. Rather, surveys of food and fluid intake on thousands of adults…strongly suggest that such large amounts are not needed」

## Những ứng cử viên chưa được đưa ra nhưng đã được xem xét

- Tiếng nói protein thạch: hiện có phân tích gộp Nhiều mẫu nhỏ và được nhà sản xuất tài trợ, hướng tích cực, không phù hợp với "bằng chứng cho thấy không hiệu quả". tiêu chí đánh giá Không được nhận。
- Máy lọc không khí/Máy lọc nước: không được kiểm tra, không tìm thấy bằng chứng kết thúc cứng, không nhận được。
- Bản thân thức dậy sớm: khó tách rời với quy tắc ngủ, không tìm thấy bằng chứng kiểm soát trực tiếp, không thu thập。
- Nhiều nhiệm vụ/Đồng hồ cà chua: Không có bằng chứng trực tiếp, không được nhận theo yêu cầu。
