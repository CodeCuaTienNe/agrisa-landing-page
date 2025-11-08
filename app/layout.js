import "./globals.css";
import AntdConfigProvider from "@/providers/antd-config-provider";

export const metadata = {
  title: "Agrisa Insurance - Bảo hiểm nông nghiệp thông minh",
  description: "Giải pháp bảo hiểm nông nghiệp toàn diện, dễ dàng và minh bạch cho người nông dân Việt Nam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <AntdConfigProvider>{children}</AntdConfigProvider>
      </body>
    </html>
  );
}
