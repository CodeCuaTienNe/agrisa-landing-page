"use client";

import { Button } from "antd";
import { motion } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import Phone3D from "./Phone3D";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-100 via-secondary-200 to-primary-100 pt-20 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2318573f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Shield size={16} />
              <span className="text-sm font-medium">
                Nền tảng bảo hiểm nông nghiệp thông minh
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kết nối nông dân
              <br />
              <span className="text-primary-500">với bảo hiểm nông nghiệp</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nền tảng số kết nối nông dân với các công ty bảo hiểm uy tín, được
              hỗ trợ bởi công nghệ vệ tinh để giám sát và đánh giá rủi ro tự
              động.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                type="primary"
                size="large"
                className="h-12 px-8 text-base"
              >
                Dành cho nông dân
              </Button>
              <Button
                size="large"
                className="h-12 px-8 text-base"
                href="#features"
              >
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-500">10K+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Nông dân kết nối
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">50+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Đối tác bảo hiểm
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">24/7</div>
                <div className="text-sm text-gray-600 mt-1">
                  Giám sát vệ tinh
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Phone3D />

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -left-6 bg-white rounded-xl shadow-lg p-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Bảo hiểm</div>
                  <div className="font-bold text-primary-500">Đã kích hoạt</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-primary-500" />
      </motion.div>
    </section>
  );
}
