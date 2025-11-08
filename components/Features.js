"use client";

import { Card } from "antd";
import {
  Shield,
  Smartphone,
  FileText,
  Clock,
  TrendingUp,
  Users,
  Satellite,
  Network,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const features = [
    {
      icon: Satellite,
      title: "Giám sát vệ tinh",
      description: "Công nghệ vệ tinh tiên tiến giám sát mùa màng và đánh giá rủi ro tự động theo thời gian thực",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Network,
      title: "Kết nối đối tác",
      description: "Kết nối nông dân với mạng lưới các công ty bảo hiểm uy tín được cấp phép tại Việt Nam",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Đánh giá rủi ro thông minh",
      description: "Hệ thống tự động đánh giá rủi ro dựa trên dữ liệu vệ tinh, thời tiết và điều kiện đất đai",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Xử lý tự động",
      description: "Giải quyết bồi thường tự động khi phát hiện thiệt hại qua dữ liệu vệ tinh và cảm biến môi trường",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Minh bạch hoàn toàn",
      description: "Quy trình minh bạch từ đăng ký, định giá đến chi trả bồi thường với công nghệ blockchain",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Smartphone,
      title: "Ứng dụng thân thiện",
      description: "Ứng dụng mobile dễ sử dụng cho nông dân với tích hợp giấy chứng nhận quyền sử dụng đất",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: FileText,
      title: "Xác thực điện tử",
      description: "Xác minh danh tính tự động qua eKYC, đăng ký nhanh chóng chỉ với CMND/CCCD",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Users,
      title: "Hệ sinh thái kết nối",
      description: "Nền tảng kết nối nông dân, công ty bảo hiểm và đối tác công nghệ trong một hệ sinh thái",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nền tảng công nghệ tiên tiến kết nối nông dân với bảo hiểm nông nghiệp thông qua công nghệ vệ tinh
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                className="h-full hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1"
                bordered={false}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
