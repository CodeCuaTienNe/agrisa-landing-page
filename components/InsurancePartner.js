"use client";

import { Button, Card } from "antd";
import {
  BarChart,
  Building,
  CheckCircle,
  ClipboardCheck,
  FileCheck,
  FileText,
  Globe,
  Lock,
  Mail,
  Phone,
  Shield,
  UserCheck,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function InsurancePartner() {
  const partnerSteps = [
    {
      title: "Liên hệ với Admin",
      description: "Công ty bảo hiểm liên hệ với đội ngũ quản trị Agrisa",
      icon: Mail,
    },
    {
      title: "Thẩm định hồ sơ",
      description: "Admin thẩm định hồ sơ pháp lý và năng lực của đối tác",
      icon: FileCheck,
    },
    {
      title: "Cấp tài khoản",
      description: "Sau khi phê duyệt, admin cấp tài khoản đối tác bảo hiểm",
      icon: UserCheck,
    },
    {
      title: "Sử dụng Portal",
      description: "Đăng nhập và quản lý nghiệp vụ qua Insurance Portal",
      icon: Globe,
    },
  ];

  const portalFeatures = [
    {
      icon: BarChart,
      title: "Quản lý hợp đồng",
      description:
        "Theo dõi, phê duyệt và quản lý toàn bộ hợp đồng bảo hiểm nông nghiệp",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: ClipboardCheck,
      title: "Xử lý bồi thường",
      description: "Thẩm định và xử lý các yêu cầu bồi thường từ nông dân",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FileText,
      title: "Báo cáo thống kê",
      description:
        "Xem báo cáo chi tiết về doanh thu, tỷ lệ bồi thường và hiệu quả kinh doanh",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Shield,
      title: "Đánh giá rủi ro",
      description:
        "Truy cập dữ liệu vệ tinh và hệ thống đánh giá rủi ro tự động",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const requirements = [
    {
      icon: Building,
      title: "Giấy phép kinh doanh",
      description:
        "Giấy phép kinh doanh bảo hiểm hợp lệ do cơ quan có thẩm quyền cấp",
    },
    {
      icon: FileCheck,
      title: "Hồ sơ pháp lý",
      description:
        "Các giấy tờ pháp lý đầy đủ theo quy định của pháp luật Việt Nam",
    },
    {
      icon: CheckCircle,
      title: "Năng lực tài chính",
      description:
        "Đảm bảo năng lực tài chính để chi trả bồi thường cho nông dân",
    },
    {
      icon: Lock,
      title: "Cam kết bảo mật",
      description:
        "Tuân thủ các quy định về bảo mật thông tin và dữ liệu khách hàng",
    },
  ];

  return (
    <section id="insurance-partner" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dành cho đối tác bảo hiểm
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tham gia hệ sinh thái Agrisa để mở rộng thị trường bảo hiểm nông
              nghiệp với công nghệ tiên tiến và quy trình tự động hóa
            </p>
          </div>
        </ScrollReveal>

        {/* Quy trình trở thành đối tác */}
        <ScrollReveal>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quy trình trở thành đối tác
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-2 border-green-100">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                        <step.icon size={32} />
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        Bước {index + 1}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Yêu cầu đối tác */}
        <ScrollReveal>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Yêu cầu đối tác
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                        <req.icon size={28} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {req.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{req.description}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tính năng Insurance Portal */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Insurance Portal - Nền tảng quản lý chuyên nghiệp
            </h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              Nền tảng quản lý toàn bộ nghiệp vụ bảo hiểm nông nghiệp
            </p>

            {/* Portal Access Button */}
            <div className="flex justify-center mb-10">
              <a
                href="https://agrisa-insurance-portal.phrimp.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-500 hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-4 px-4 py-2">
                    <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                      <Globe size={28} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 mb-1">
                        Đăng nhập hệ thống
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        Insurance Portal
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portalFeatures.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0">
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}
                      >
                        <feature.icon size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0">
            <div className="text-center text-white py-8">
              <h3 className="text-3xl font-bold mb-4">
                Sẵn sàng trở thành đối tác?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Liên hệ với chúng tôi để bắt đầu hợp tác và mở rộng thị trường
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  type="primary"
                  size="large"
                  icon={<Mail size={20} />}
                  className="bg-white text-green-600 hover:bg-gray-100 border-0 font-semibold h-12 px-8"
                  href="mailto:agrisa.admin@gmail.com"
                >
                  Email: agrisa.admin@gmail.com
                </Button>
                <Button
                  size="large"
                  icon={<Phone size={20} />}
                  className="bg-green-800 text-white hover:bg-green-900 border-0 font-semibold h-12 px-8"
                  href="tel:1900xxxx"
                >
                  Hotline: 1900 xxxx
                </Button>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
