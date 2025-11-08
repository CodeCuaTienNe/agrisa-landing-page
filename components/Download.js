"use client";

import { Button, Card } from "antd";
import { Download, FileDown, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
              <Smartphone size={16} />
              <span className="text-sm font-medium">Dành cho nông dân</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ứng dụng Agrisa cho nông dân
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Kết nối với các công ty bảo hiểm, giám sát mùa màng bằng vệ tinh,
              và nhận bồi thường tự động
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Google Play */}
          <ScrollReveal delay={0.1}>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Download size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Google Play
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Dành cho thiết bị Android
                </p>
                <div className="space-y-2">
                  <Button
                    type="primary"
                    size="large"
                    block
                    icon={<Download size={16} />}
                    disabled
                  >
                    Đang cập nhật
                  </Button>
                  <Button
                    size="large"
                    block
                    icon={<Download size={16} />}
                    disabled
                  >
                    Thông báo khi có
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Link sẽ được cập nhật sớm
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* App Store */}
          <ScrollReveal delay={0.2}>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Download size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  App Store
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Dành cho thiết bị iOS
                </p>
                <div className="space-y-2">
                  <Button
                    type="primary"
                    size="large"
                    block
                    icon={<Download size={16} />}
                    disabled
                  >
                    Đang cập nhật
                  </Button>
                  <Button
                    size="large"
                    block
                    icon={<Download size={16} />}
                    disabled
                  >
                    Thông báo khi có
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Link sẽ được cập nhật sớm
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* APK/IPA Direct Download */}
          <ScrollReveal delay={0.3}>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <FileDown size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tải file trực tiếp
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  APK (Android) / IPA (iOS)
                </p>
                <div className="space-y-2">
                  <Button
                    size="large"
                    block
                    icon={<FileDown size={16} />}
                    disabled
                  >
                    Tải APK
                  </Button>
                  <Button
                    size="large"
                    block
                    icon={<FileDown size={16} />}
                    disabled
                  >
                    Tải IPA
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  File sẽ được cập nhật sớm
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm">
              Yêu cầu: Android 8.0+ hoặc iOS 13.0+ | Dung lượng: ~50MB
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
