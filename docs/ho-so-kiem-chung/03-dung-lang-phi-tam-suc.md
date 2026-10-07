# Hồ sơ kiểm chứng: Đừng lãng phí tâm sức — 3

> Bản dịch máy dự thảo của hồ sơ lịch sử, chưa được rà soát song ngữ. Không dùng các câu trích dẫn ở đây làm căn cứ pháp lý hoặc y khoa; đối chiếu văn bản gốc tại URL nguồn. Xem [ghi chú bản dịch](README.md).

Lời giải thích: Trang của hầu hết các nhà xuất bản（APA psycnet、Elsevier、SAGE、PNAS、Springer、PubMed）Tự động WebFetch Trở lại 403 / Mã xác minh / Chỉ là cookie Vì vậy, cách kiểm tra là: <https://doi.org/>... Phân tích xác nhận DOI Có và coi trọng mục tiêu định hướng: xác nhận các nhà xuất bản và tạp chí) và sử dụng Europe PMC REST API / Crossref API / OpenAlex API / PMC Trang đầy đủ / Nhà văn hoặc đại học chính thức PDF Được rồi. tiêu đề Người viết, năm và bản tóm tắt. Mỗi danh sách thực sự mở URL Địa điểm gốc của số tham khảo。

## mục 1

- <https://doi.org/10.1037/xhp0000100> → 302 đến doi.apa.org，DOI Sự tồn tại；psycnet Trang 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/xhp0000100&format=json&resultType=core> → Được xác nhận：Stothart C, Mitchum A, Yehnert C (2015) The attentional cost of receiving a cell phone notification. J Exp Psychol Hum Percept Perform
  - Nguồn gốc："cellular phone notifications alone significantly disrupted performance on an attention-demanding task, even when participants did not directly interact with a mobile device during the task. The magnitude of observed distraction effects was comparable in magnitude to those seen when users actively used a mobile phone, either for voice calls or text messaging."
- <https://doi.org/10.1086/691462> → 302 đến journals.uchicago.edu，DOI tồn tại; Trang của nhà xuất bản 403
- <https://api.crossref.org/works/10.1086/691462> → Được xác nhận：Ward AF, Duke K, Gneezy A, Bos MW (2017) Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity. J Assoc Consum Res 2(2):140-154
- <https://api.openalex.org/works/doi:10.1086/691462> → Nguồn gốc："Results from two experiments indicate that even when people are successful at maintaining sustained attention—as when avoiding the temptation to check their phones—the mere presence of these devices reduces available cognitive capacity. Moreover, these costs are highest for those in smartphone dependence."
  - 「Trên bàn/Cổ túi/Trong phòng khác, hai chỉ số "thứ ba điều kiện" và "tưởng nhớ làm việc, trí thông minh lỏng lẻo" được lấy từ ký ức của tôi về bài báo, và chỉ viết một bản tóm tắt. two experiments và available cognitive capacity，Những chi tiết này**Không được xác nhận theo chữ trong bản gốc**（nội dung chính Không thể mở được) mục Tắt nó. mục Chỉ giữ các biểu diễn được hỗ trợ bằng bản gốc

## mục 2

- <https://doi.org/10.1038/s41598-017-03171-4> → 302 đến nature.com，DOI Sự tồn tại；nature Trang cần quyền nhảy
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1038/s41598-017-03171-4&format=json&resultType=core> → Được xác nhận：Phillips AJK, Clerx WM, O'Brien CS, Sano A, Barger LK, Picard RW, Lockley SW, Klerman EB, Czeisler CA (2017) Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing. Sci Rep
  - Nguồn gốc："We studied 61 undergraduates for 30 days ... DLMO occurred later (00:08 ± 1:54 vs. 21:32 ± 1:48; p < 0.003); the daily sleep propensity rhythm peaked later (06:33 ± 0:19 vs. 04:45 ± 0:11; p < 0.005) ... A positive correlation (r = 0.37; p < 0.004) between academic performance and SRI was observed ... Irregular vs. Regular group differences in circadian timing were likely primarily due to their different patterns of light exposure."
  - 「Khoảng 2.5 Khoảng 1 giờ. 1.8 Giờ là giá trị gần gũi mà tôi tính từ thời điểm trên.

## mục 3

- <https://doi.org/10.1093/sleep/26.2.117> → 302 đến academic.oup.com，Sau đó <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/26.2.117> Khởi mở thành công
  - Được xác nhận：Van Dongen HPA, Maislin G, Mullington JM, Dinges DF (2003) The Cumulative Cost of Additional Wakefulness: Dose-Response Effects on Neurobehavioral Functions and Sleep Physiology From Chronic Sleep Restriction and Total Sleep Deprivation. Sleep 26(2):117-126
  - Nguồn gốc（OUP Trang + Europe PMC Cả hai đều đồng ý）："A total of n = 48 healthy adults (ages 21-38)"；"Chronic restriction of sleep periods to 4 h or 6 h per night over 14 consecutive days resulted in significant cumulative, dose-dependent deficits in cognitive performance on all tasks"；"chronic restriction of sleep to 6 h or less per night produced cognitive performance deficits equivalent to up to 2 nights of total sleep deprivation"；"Subjective sleepiness ratings showed an acute response to sleep restriction but only small further increases on subsequent days, and did not significantly differentiate the 6 h and 4 h conditions."
- <https://doi.org/10.1037/a0018883> → 302 đến doi.apa.org，DOI Sự tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0018883&format=json&resultType=core> → Được xác nhận：Lim J, Dinges DF (2010) A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. Psychol Bull
  - Nguồn gốc："short-term (<48 hr) total sleep deprivation"；"70 articles containing 147 cognitive tests"；"lapses in simple attention: g = -0.776, 95% CI [-0.96, -0.60], p < .001"；"reasoning accuracy: g = -0.125, 95% CI [-0.27, 0.02]"

## mục 4

- <https://doi.org/10.5664/jcsm.3170> → 302，DOI Sự tồn tại；jcsm.aasm.org Chứng chỉ sai、springer Giấy phép
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.5664/jcsm.3170&format=json&resultType=core> → Được xác nhận：Drake C, Roehrs T, Shambroom J, Roth T (2013) Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med；PMID 24235903，PMCID PMC3805807
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/> → Bài viết mở rộng thành công
  - nội dung chính Nguồn gốc："For TST, reductions in duration relative to placebo were significant at each of the caffeine administration time points, reducing TST between 1.1 to 1.2 hours."；"Caffeine administered 6 h prior to bedtime reduced total sleep time by 41 min, which approached significance (p = 0.08)."（nhật ký）；"only the objective measure detected differences when caffeine was taken 6 hours prior to bedtime"
- <https://doi.org/10.1016/j.smrv.2023.101764> → 302 đến linkinghub.elsevier.com，DOI Sự tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1016/j.smrv.2023.101764&format=json&resultType=core> → Được xác nhận：Gardiner C, Weakley J, Burke LM, Roach GD, Sargent C, Maniar N, Townshend A, Halson SL (2023) The effect of caffeine on subsequent sleep: A systematic review and meta-analysis. Sleep Med Rev
  - Nguồn gốc："Caffeine consumption reduced total sleep time by 45 min and sleep efficiency by 7%"；"coffee (107 mg per 250 mL) should be consumed at least 8.8 h prior to bedtime"

## mục 5

- <https://doi.org/10.1016/j.chb.2014.11.005> → 302 đến linkinghub.elsevier.com，DOI Sự tồn tại；sciencedirect 403
- <https://api.crossref.org/works/10.1016/j.chb.2014.11.005> → Được xác nhận：Kushlev K, Dunn EW (2015) Checking email less frequently reduces stress. Comput Hum Behav 43:220-228
- <https://dunn.psych.ubc.ca/wp-content/uploads/2010/11/kushlev-dunn-email-and-stress-in-press1.pdf>（Tác phẩm được đăng tải trên trang web chính thức của Author Lab PDF，địa phương pdftotext Thu thập）
  - Nguồn gốc："During one week, 124 adults were randomly assigned to limit checking their email to three times a day; during the other week, participants could check their email an unlimited number of times per day."
  - nội dung chính Nguồn gốc："participants felt less daily stress in the limited as compared to the unlimited email condition, F(1, 121) = 4.18, p = .04, Cohen's d = .37"；"the average number of times people reported checking their email on a normal day at work was 15.48 at baseline (SD = 8.69)"；"there were no significant differences between conditions in how many emails people received (Mlimited = 16.64 vs. Munlimited = 16.04 ...) or responded to"

## mục 6

- <https://doi.org/10.1037/a0030986> → 302 đến doi.apa.org，DOI Sự tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0030986&format=json&resultType=core> → Được xác nhận：Altmann EM, Trafton JG, Hambrick DZ (2014) Momentary interruptions can derail the train of thought. J Exp Psychol Gen
  - Nguồn gốc："Interruptions averaging 4.4 s long tripled the rate of sequence errors on post-interruption trials relative to baseline trials. Interruptions averaging 2.8 s long--about the time to perform a step in the interrupted task--doubled the rate of sequence errors."
- <https://www.ics.uci.edu/~gmark/CHI2005.pdf>（Nhà văn UCI Trang chủ chính thức PDF，địa phương pdftotext Thu thập）
  - Nguồn gốc："detailed observation of 24 information workers"；"57% of their working spheres are interrupted"；nội dung chính："11 min. 4 sec."（Trung tâm trước khi chuyển đổi/Thời gian trung bình của các chủ đề làm việc bên ngoài）；"When people did resume work on the same day, it took an average length of time of 25 min. 26 sec (sd=54 min. 48 sec.) ... before resuming work, our informants worked in an average of 2.26 (sd=2.79) working spheres."
  - DOI Đảm nhận: Tôi đã ghi nhớ 10.1145/1054972.1054989 Thông qua OpenAlex Thống kê là một điều khác.（Marshall & Bly），Đã thay đổi。<https://api.crossref.org/works/10.1145/1054972.1055017> Với <https://api.openalex.org/works/doi:10.1145/1054972.1055017> Đáp lại: Mark, Gonzalez, Harris (2005) No task left behind? Examining the nature of fragmented work. CHI 2005 pp.321-330
- <https://www.ics.uci.edu/~gmark/chi08-mark.pdf>（Tác giả chính thức PDF，Thu thập địa phương）
  - Nguồn gốc："people completed interrupted tasks in less time with no difference in quality ... but this comes at a price: experiencing more stress, higher frustration, time pressure and effort."；nội dung chính："Forty-eight subjects participated."
  - <https://api.crossref.org/works/10.1145/1357054.1357072> → Được xác nhận：Mark G, Gudith D, Klocke U (2008) The cost of interrupted work: more speed and stress. CHI 2008 pp.107-110
  - Ghi chú "Hầu như một nửa cắt đứt là khởi động của mình" từ những ký ức của tôi về bài báo này, không được xác nhận từ từ trong văn bản rút ra, đã được đưa ra từ những câu hỏi khác. mục Ghi chú Tháo khỏi

## mục 7

- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Task%20switching%22%20AND%20AUTH:Monsell%20AND%20PUB_YEAR:2003&format=json&resultType=core> → Được xác nhận：Monsell S (2003) Task switching. Trends Cogn Sci；DOI 10.1016/s1364-6613(03)00028-7；PMID 12639695
  - Nguồn gốc："Subjects' responses are substantially slower and, usually, more error-prone immediately after a task switch."
  - Lưu ý: dùng trực tiếp DOI Đánh giá Europe PMC Trở lại 0 Câu hỏi về mã hóa dấu phẩy) tiêu đề+Các tác giả tìm thấy
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1073/pnas.0903620106&format=json&resultType=core> → Được xác nhận：Ophir E, Nass C, Wagner AD (2009) Cognitive control in media multitaskers. PNAS
  - Nguồn gốc："heavy media multitaskers are more susceptible to interference from irrelevant environmental stimuli and from irrelevant representations in memory ... heavy media multitaskers performed worse on a test of task-switching ability"
  - Lưu ý: DOI Không có doi.org Đánh đèn trực tiếp. Europe PMC Đăng ký xác nhận
- Xem thêm <https://api.crossref.org/works/10.1037/0096-1523.27.4.763> Được xác nhận Rubinstein, Meyer & Evans (2001) Có, nhưng không có bản tóm tắt, cuối cùng không có mục Quảng cáo

## mục 8

- <https://doi.org/10.1073/pnas.1418490112> → 302 đến pnas.org，DOI Sự tồn tại；pnas.org 403
- Europe PMC Tìm kiếm xác nhận：Chang AM, Aeschbach D, Duffy JF, Czeisler CA (2015) Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS；PMCID PMC4313820
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC4313820/> → Bài viết mở rộng thành công
  - nội dung chính Nguồn gốc："took longer to fall asleep ... 25.65 ± 18.78 min vs. 15.75 ± 13.09 min"；"suppressed evening levels of melatonin by 55.12 ± 20.12%"；"Dim light melatonin onset was >1.5 h later on the day following the LE-eBook condition (22:31 ± 0:42) than in the print-book condition (21:01 ± 0:49)"；"feeling sleepier the morning after reading an LE-eBook ... it took them hours longer to fully wake up"
  - Ghi chú Trong đó, "thực độ sáng cao nhất, đọc hàng giờ liên tục" là những ký ức của tôi về việc thiết lập thí nghiệm, không được xác minh từ từ, và đã được đưa ra từ một năm trước. mục Ghi chú Tháo khỏi

## mục 9

- <https://doi.org/10.1093/sleep/29.6.831> → 302，Sau đó <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/29.6.831> Khởi mở thành công
  - Được xác nhận：Brooks A, Lack L (2006) A Brief Afternoon Nap Following Nocturnal Sleep Restriction: Which Nap Duration is Most Recuperative? Sleep 29(6):831-840
  - Nguồn gốc："The 5-minute nap produced few benefits in comparison with the no-nap control."；"The 10-minute nap produced immediate improvements in all outcome measures (including sleep latency, subjective sleepiness, fatigue, vigor, and cognitive performance), with some of these benefits maintained for as long as 155 minutes."；20 phút: cải thiện sau khi ngủ 35 Những phút xuất hiện và tiếp tục 125 Một phút；"The 30-minute nap produced a period of impaired alertness and performance immediately after napping, indicative of sleep inertia, followed by improvements lasting up to 155 minutes after the nap."

## mục 10

- <https://doi.org/10.1016/j.jenvp.2011.07.002> → 302 đến linkinghub.elsevier.com，DOI Sự tồn tại；sciencedirect 403；PubMed Không có bài viết này MEDLINE Tạp chí）
- <https://api.crossref.org/works/10.1016/j.jenvp.2011.07.002> → Được xác nhận：Jahncke H, Hygge S, Halin N, Green AM, Dimberg K (2011) Open-plan office noise: Cognitive performance and restoration. J Environ Psychol 31(4):373-382
- <http://hig.diva-portal.org/smash/record.jsf?pid=diva2%3A434794&dswid=2269>（Tài liệu từ thư viện cơ quan chính thức của Đại học Yevler）→ Đánh thành công. tiêu đề/Nhà văn/Tạp chí/DOI Thỏa thuận
  - Nguồn gốc："The background sound level increased by 12 dB, from 39 to 51 dB LAeq."；"Decreased word memory performance, increased fatigue and motivational deficits when the background sound level increased."；"A break with a nature movie with corresponding sound increased energy ratings compared to just listening to river sounds or office noise."
  - N = 47、Mỗi lần làm việc 2 Thời gian: từ WebSearch Các bản tóm tắt đã được trả lại, không có diva Các trang đã được xem từ từ từ mục Tháo khỏi

## mục 11

- <https://doi.org/10.1111/ecoj.12166> → 302 đến academic.oup.com/ej/article/125/589/2052-2076/5078088，DOI Sự tồn tại；OUP Trang chỉ hiển thị hướng dẫn
- <https://api.crossref.org/works/10.1111/ecoj.12166> → Được xác nhận：Pencavel J (2015) The Productivity of Working Hours. The Economic Journal 125(589):2052-2076
- <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/ecoj.12166> → Nguồn gốc："below an hours threshold, output is proportional to hours; above a threshold, output rises at a decreasing rate as hours increase."
- <https://docs.iza.org/dp8129.pdf>（IZA DP No. 8129，Phiên bản văn bản làm việc của cùng một bài báo, trang web của cơ quan chính thức; địa phương pdftotext Thu thập）
  - nội dung chính Nguồn gốc："below 49 weekly hours, variations in output are proportional to variations in hours; for those observations corresponding to 49 or more hours, output rises with hours at a decreasing rate and a maximum of output occurs at about 63 hours. Output at 70 hours differs little from output at 56 hours"；Phần kết luận："The working week threshold for the munition workers considered in this paper was at 48 hours, but for other workers it may be more or less."
  - Lưu ý: nội dung chính Phân tích 49 Hoạt động giải trí: 48 giờ; mục Nhận 49。Việc kiểm tra kỹ thuật số được sử dụng là phiên bản văn bản làm việc, phiên bản chính thức của tạp chí không mở

## mục 12

- <https://doi.org/10.1111/j.1745-6924.2008.00088.x> → 302 đến journals.sagepub.com，DOI Sự tồn tại；SAGE Trang 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1111/j.1745-6924.2008.00088.x&format=json&resultType=core> → Được xác nhận：Nolen-Hoeksema S, Wisco BE, Lyubomirsky S (2008) Rethinking Rumination. Perspect Psychol Sci
  - Nguồn gốc："rumination exacerbates depression, enhances negative thinking, impairs problem solving, interferes with instrumental behavior, and erodes social support"；Một cái khác "anxiety, binge eating, binge drinking, and self-harm"

## mục 13

- <https://api.crossref.org/works/10.1037/0022-3514.46.5.1097> → Được xác nhận：Rook KS (1984) The negative side of social interaction: Impact on psychological well-being. J Pers Soc Psychol 46(5):1097-1108
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22The%20negative%20side%20of%20social%20interaction%22%20AND%20AUTH:Rook&format=json&resultType=core> → PMID 6737206，DOI 10.1037//0022-3514.46.5.1097
  - Nguồn gốc："negative social outcomes were more consistently and more strongly related to well-being than were positive social outcomes"；Mô hình 120 Tên 60-89 Phụ nữ góa phụ
- ghi chú：<https://doi.org/10.1037/0022-3514.46.5.1097> Tôi không tự làm sáng một cách trực tiếp. APA Cổ xưa DOI Nhảy lên psycnet 403），Nhưng Crossref Với Europe PMC Cả hai thư viện độc lập đều được đăng ký DOI

## mục 14

- <https://api.crossref.org/works/10.1037/0022-3514.74.5.1252> → Được xác nhận：Baumeister RF, Bratslavsky E, Muraven M, Tice DM (1998) Ego depletion: Is the active self a limited resource? J Pers Soc Psychol 74:1252-1265
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Ego%20depletion%3A%20is%20the%20active%20self%20a%20limited%20resource%22&format=json&resultType=core> → PMID 9599441，Nguồn gốc："Choice, active response, self-regulation, and other volition may all draw on a common inner resource."
- <https://doi.org/10.1177/1745691616652873> → 302 đến SAGE，DOI Sự tồn tại；SAGE 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/1745691616652873&format=json&resultType=core> → Được xác nhận：Hagger MS, Chatzisarantis NLD, Alberts H, et al. (2016) A Multilab Preregistered Replication of the Ego-Depletion Effect. Perspect Psychol Sci
  - Nguồn gốc：23 Một phòng thí nghiệm、2141 Người dân；"the size of the ego-depletion effect was small with 95% confidence intervals (CIs) that encompassed zero (d = 0.04, 95% CI [-0.07, 0.15]"
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/0956797621989733&format=json&resultType=core> → Được xác nhận：Vohs KD, Schmeichel BJ, Lohmann S, et al. (2021) A Multisite Preregistered Paradigmatic Test of the Ego-Depletion Effect. Psychol Sci
  - Nguồn gốc："preregistered multilaboratory project (k = 36; N = 3,531) ... Confirmatory tests found a nonsignificant result (d = 0.06)"
  - Lưu ý: DOI Không có doi.org Đánh đèn trực tiếp. Europe PMC Đăng ký xác nhận

## Tổng hợp chưa xác nhận

- mục 1 Bản thảo đã viết: "Dưới bàn"./Cổ túi/Một phòng khác, "Tưởng nhớ làm việc và trí tuệ chất lỏng", không được kiểm chứng từ từ trong bản gốc có thể mở được, đã được đưa ra từ các trang web khác. mục Xóa, chỉ giữ các biểu hiện được hỗ trợ từ bản gốc
- mục 6 Ghi chú Bản thảo "khoảng một nửa bị gián đoạn là tự khởi động" mục 8 Ghi chú "Thời gian sáng nhất liên tục". mục 10 「N = 47、Làm việc 2 "Hours" cũng bị xóa vì không xác nhận từ từ
- Phiên bản hiện tại 14 Bài viết: Lợi ích "Tất cả các con số trong số này đều có nguồn gốc trên; Không có mục Đánh dấu TODO / Cần kiểm chứng
