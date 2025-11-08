"use client";

import { Card, Button } from "antd";
import { FileText, Download, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Documents() {
  const documents = [
    {
      title: "Hướng dẫn sử dụng nền tảng",
      description: "Tài liệu hướng dẫn chi tiết cách sử dụng nền tảng Agrisa cho nông dân và đối tác",
      size: "2.5 MB",
      format: "PDF",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Quy trình bồi thường tự động",
      description: "Hướng dẫn quy trình bồi thường tự động dựa trên dữ liệu vệ tinh và cảm biến",
      size: "1.8 MB",
      format: "PDF",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Công nghệ vệ tinh",
      description: "Giới thiệu về công nghệ giám sát vệ tinh và đánh giá rủi ro tự động",
      size: "3.2 MB",
      format: "PDF",
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Câu hỏi thường gặp",
      description: "Giải đáp các thắc mắc về nền tảng kết nối bảo hiểm nông nghiệp",
      size: "1.5 MB",
      format: "PDF",
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Điều khoản sử dụng",
      description: "Điều khoản và điều kiện sử dụng nền tảng Agrisa",
      size: "4.1 MB",
      format: "PDF",
      icon: FileText,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Chính sách bảo mật",
      description: "Cam kết bảo mật dữ liệu người dùng và thông tin nông trại",
      size: "0.9 MB",
      format: "PDF",
      icon: FileText,
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <section id="documents" className="py-20 bg-secondary-100">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tài liệu & Hướng dẫn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tải xuống các tài liệu hướng dẫn và thông tin chi tiết về nền tảng Agrisa
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                className="h-full hover:shadow-lg transition-all duration-300 border-0 hover:-translate-y-1"
                bordered={false}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${doc.color} flex items-center justify-center flex-shrink-0`}>
                      <doc.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{doc.format}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {doc.description}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      type="primary"
                      icon={<Download size={16} />}
                      disabled
                      className="flex-1"
                    >
                      Tải xuống
                    </Button>
                    <Button
                      icon={<ExternalLink size={16} />}
                      disabled
                    >
                      Xem
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              File sẽ được cập nhật sớm. Vui lòng quay lại sau.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
