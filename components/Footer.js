"use client";

import Assets from "@/assets";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Tính năng", href: "#features" },
      { label: "Tải app", href: "#download" },
      { label: "Gói bảo hiểm", href: "#documents" },
      { label: "Bảng giá", href: "#" },
    ],
    support: [
      { label: "Trung tâm hỗ trợ", href: "#" },
      { label: "Hướng dẫn sử dụng", href: "#documents" },
      { label: "Câu hỏi thường gặp", href: "#" },
      { label: "Liên hệ", href: "#contact" },
    ],
    legal: [
      { label: "Điều khoản sử dụng", href: "#terms" },
      { label: "Chính sách bảo mật", href: "#" },
      { label: "Quy chế hoạt động", href: "#" },
      { label: "Giải quyết khiếu nại", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Assets.Agrisa.src}
                alt="Agrisa Logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-white">Agrisa</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Nền tảng kết nối nông dân với bảo hiểm nông nghiệp, được hỗ trợ
              bởi công nghệ vệ tinh tiên tiến.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-1 text-primary-300"
                />
                <span className="text-sm text-white/80">
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-300" />
                <a
                  href="tel:1900xxxx"
                  className="text-sm text-white/80 hover:text-white"
                >
                  1900 xxxx (Đang cập nhật)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-300" />
                <a
                  href="mailto:support@agrisa.vn"
                  className="text-sm text-white/80 hover:text-white"
                >
                  support@agrisa.vn
                </a>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Pháp lý</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} Agrisa Insurance. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-yellow-100/20 hover:bg-yellow-100/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-yellow-100" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-yellow-100/20 hover:bg-yellow-100/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-yellow-100" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-yellow-100/20 hover:bg-yellow-100/30 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-yellow-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
