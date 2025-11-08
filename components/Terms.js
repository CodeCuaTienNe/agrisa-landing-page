"use client";

import { Card, Collapse } from "antd";
import { FileText, AlertCircle, Scale, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const { Panel } = Collapse;

export default function Terms() {
  const termsCategories = [
    {
      icon: FileText,
      title: "Điều khoản chung",
      color: "bg-blue-100 text-blue-600",
      items: [
        {
          title: "1. Phạm vi áp dụng",
          content:
            "Các điều khoản này áp dụng cho việc sử dụng nền tảng Agrisa để kết nối với các công ty bảo hiểm nông nghiệp. Người dùng có trách nhiệm đọc và hiểu rõ các điều khoản của nền tảng cũng như điều khoản của từng công ty bảo hiểm đối tác.",
        },
        {
          title: "2. Quyền và nghĩa vụ của bên mua bảo hiểm",
          content:
            "Bên mua bảo hiểm có quyền được bảo vệ theo các điều khoản đã thỏa thuận và nhận bồi thường khi xảy ra rủi ro. Đồng thời có nghĩa vụ cung cấp thông tin chính xác, thanh toán phí bảo hiểm đúng hạn và thông báo kịp thời khi có sự cố.",
        },
        {
          title: "3. Quyền và nghĩa vụ của công ty bảo hiểm",
          content:
            "Công ty bảo hiểm cam kết chi trả bồi thường đúng hạn theo hợp đồng, bảo mật thông tin khách hàng và hỗ trợ tư vấn 24/7. Đồng thời có quyền từ chối bồi thường nếu phát hiện gian lận hoặc vi phạm điều khoản.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Phạm vi bảo hiểm",
      color: "bg-green-100 text-green-600",
      items: [
        {
          title: "1. Rủi ro được bảo hiểm",
          content:
            "Bảo hiểm thiên tai (bão, lũ lụt, hạn hán, sâu bệnh), rủi ro thị trường (giá cả biến động), và các rủi ro khác theo thỏa thuận trong hợp đồng cụ thể.",
        },
        {
          title: "2. Rủi ro loại trừ",
          content:
            "Không bảo hiểm cho các trường hợp: chiến tranh, bạo động, hạt nhân, thiên tai bất khả kháng cấp độ thảm họa quốc gia, hành vi cố ý gây thiệt hại của bên mua bảo hiểm.",
        },
        {
          title: "3. Mức bồi thường",
          content:
            "Mức bồi thường tối đa không vượt quá giá trị bảo hiểm đã thỏa thuận trong hợp đồng. Chi tiết mức bồi thường được quy định cụ thể trong từng gói bảo hiểm.",
        },
      ],
    },
    {
      icon: AlertCircle,
      title: "Quy trình giải quyết",
      color: "bg-orange-100 text-orange-600",
      items: [
        {
          title: "1. Thông báo sự cố",
          content:
            "Bên mua bảo hiểm cần thông báo cho công ty trong vòng 24h kể từ khi phát hiện sự cố thông qua ứng dụng hoặc hotline. Gửi kèm hình ảnh, video và các chứng từ liên quan.",
        },
        {
          title: "2. Khảo sát và định giá",
          content:
            "Công ty sẽ cử chuyên viên khảo sát trong vòng 48h sau khi nhận thông báo. Quá trình định giá thiệt hại được thực hiện minh bạch và có sự tham gia của bên mua bảo hiểm.",
        },
        {
          title: "3. Chi trả bồi thường",
          content:
            "Sau khi hoàn tất thẩm định, bồi thường sẽ được chi trả trong vòng 5-7 ngày làm việc thông qua chuyển khoản ngân hàng hoặc ví điện tử.",
        },
      ],
    },
    {
      icon: Scale,
      title: "Giải quyết tranh chấp",
      color: "bg-purple-100 text-purple-600",
      items: [
        {
          title: "1. Thương lượng trực tiếp",
          content:
            "Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng trực tiếp giữa hai bên trong tinh thần thiện chí và hợp tác.",
        },
        {
          title: "2. Trọng tài",
          content:
            "Nếu không thương lượng được, tranh chấp sẽ được đưa ra trung tâm trọng tài kinh tế có thẩm quyền theo quy định của pháp luật Việt Nam.",
        },
        {
          title: "3. Luật áp dụng",
          content:
            "Hợp đồng bảo hiểm và mọi tranh chấp phát sinh được điều chỉnh bởi pháp luật Việt Nam. Tòa án có thẩm quyền tại nơi cư trú của bên mua bảo hiểm.",
        },
      ],
    },
  ];

  return (
    <section id="terms" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Điều khoản & Điều kiện
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thông tin về điều khoản sử dụng nền tảng và kết nối với các công ty bảo hiểm
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {termsCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                className="h-full hover:shadow-lg transition-all duration-300 border-0"
                bordered={false}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <Collapse
                  ghost
                  defaultActiveKey={["0"]}
                  expandIconPosition="end"
                >
                  {category.items.map((item, idx) => (
                    <Panel
                      header={
                        <span className="font-semibold text-gray-800">
                          {item.title}
                        </span>
                      }
                      key={idx}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </Panel>
                  ))}
                </Collapse>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto bg-primary-50 border-primary-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-primary-500 flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Lưu ý quan trọng
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Đây là bản tóm tắt các điều khoản về sử dụng nền tảng và kết nối bảo hiểm.
                    Điều khoản cụ thể của từng hợp đồng bảo hiểm sẽ do công ty bảo hiểm đối tác cung cấp.
                    Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ bộ phận hỗ trợ của chúng tôi.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
