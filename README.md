# Agrisa Insurance Landing Page

Landing page cho sản phẩm Agrisa Insurance - Bảo hiểm nông nghiệp thông minh.

## Tổng quan

Landing page được xây dựng với Next.js 13, sử dụng App Router, Ant Design, Tailwind CSS và Framer Motion để tạo hiệu ứng scroll reveal ấn tượng.

### Tính năng chính

- **Hero Section**: Banner chính với thống kê và CTA buttons
- **Features**: Giới thiệu 8 tính năng nổi bật với icons và mô tả
- **Download**: Section tải app với links Google Play, App Store, APK/IPA
- **Documents**: Tài liệu hướng dẫn và thông tin sản phẩm
- **Terms**: Điều khoản và điều kiện bảo hiểm
- **Footer**: Thông tin liên hệ và links hữu ích

### Công nghệ sử dụng

- **Framework**: Next.js 13.5.11 (App Router)
- **UI Library**: Ant Design 5.27.1
- **Icons**: Lucide React
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Language**: JavaScript (không dùng TypeScript)

## Cài đặt và Chạy

### Yêu cầu

- Node.js 16+
- npm hoặc yarn

### Cài đặt dependencies

\`\`\`bash
npm install
\`\`\`

### Chạy Development Server

\`\`\`bash
npm run dev
\`\`\`

Mở trình duyệt tại [http://localhost:3001](http://localhost:3001)

> **Lưu ý**: Port mặc định là 3001 để tránh conflict với app chính

### Build Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Cấu trúc Project

\`\`\`
agrisa-landing-page/
├── app/
│   ├── layout.js          # Root layout với Ant Design provider
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles với fonts
├── components/
│   ├── Header.js          # Fixed navigation header
│   ├── Hero.js            # Hero section với animations
│   ├── Features.js        # Features grid với 8 tính năng
│   ├── Download.js        # App download section
│   ├── Documents.js       # Documents & guides section
│   ├── Terms.js           # Terms & conditions
│   ├── Footer.js          # Footer với contact info
│   └── ScrollReveal.js    # Reusable scroll reveal component
├── providers/
│   └── antd-config-provider.js  # Ant Design theme config
├── tailwind.config.js     # Tailwind với custom colors
├── package.json
└── README.md
\`\`\`

## Thiết kế và Màu sắc

### Color Palette (Pastel, Cổ điển)

**Primary (Green):**
- \`#18573f\` - Primary 500 (Main brand color)
- \`#e8f5f0\` - Primary 100 (Light background)
- \`#62b98c\` - Primary 400 (Accents)

**Secondary (Cream):**
- \`#fefcf5\` - Secondary 100 (Main background)
- \`#fdf7e1\` - Secondary 200 (Alternate background)
- \`#f7e8ab\` - Secondary 500 (Accent)

### Typography

- **Headings**: Fraunces (Serif) - Cổ điển, sang trọng
- **Body**: Bricolage Grotesque (Sans-serif) - Hiện đại, dễ đọc

### Icons

- **Lucide React**: Icons hiện đại, nhất quán
- **Ant Design Icons**: Icons cho UI components
- **KHÔNG dùng emoji**

## Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa file \`tailwind.config.js\`:

\`\`\`javascript
colors: {
  primary: {
    500: "#18573f",  // Màu chính
    // ...
  },
  secondary: {
    100: "#fefcf5",  // Background
    // ...
  },
}
\`\`\`

### Thêm/Sửa sections

Mỗi section là một component riêng biệt trong \`components/\`.
Thêm section mới vào \`app/page.js\`:

\`\`\`javascript
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <NewSection />
    </main>
  );
}
\`\`\`

### Cập nhật thông tin

**Thông tin liên hệ** - Chỉnh sửa \`components/Footer.js\`

**Tính năng** - Chỉnh sửa array \`features\` trong \`components/Features.js\`

**Tài liệu** - Chỉnh sửa array \`documents\` trong \`components/Documents.js\`

**Điều khoản** - Chỉnh sửa array \`termsCategories\` trong \`components/Terms.js\`

## Thêm hình ảnh

### Logo và Images

1. Tạo folder \`public/images/\`
2. Thêm hình ảnh vào folder
3. Import và sử dụng trong components:

\`\`\`javascript
import Image from "next/image";

<Image
  src="/images/app-screenshot.png"
  alt="Agrisa App"
  width={400}
  height={800}
/>
\`\`\`

### Hình ảnh cần cập nhật

- **Hero Section**: Screenshot app mobile (components/Hero.js:65)
- **Logo**: Logo Agrisa (components/Header.js, components/Footer.js)

## Cập nhật Links

### Download Links

Chỉnh sửa \`components/Download.js\`:

\`\`\`javascript
<Button
  type="primary"
  size="large"
  block
  icon={<Download size={16} />}
  href="https://play.google.com/store/apps/..." // Thêm link thật
  disabled={false} // Bỏ disabled
>
  Tải từ Google Play
</Button>
\`\`\`

### Document Links

Chỉnh sửa \`components/Documents.js\`:

\`\`\`javascript
<Button
  type="primary"
  icon={<Download size={16} />}
  href="/documents/huong-dan-su-dung.pdf" // Thêm link file
  disabled={false} // Bỏ disabled
>
  Tải xuống
</Button>
\`\`\`

## Tối ưu hóa

### SEO

Cập nhật metadata trong \`app/layout.js\`:

\`\`\`javascript
export const metadata = {
  title: "Agrisa Insurance - Bảo hiểm nông nghiệp thông minh",
  description: "Mô tả chi tiết...",
  keywords: ["bảo hiểm nông nghiệp", "agrisa", ...],
  openGraph: {
    title: "...",
    description: "...",
    images: ["/og-image.png"],
  },
};
\`\`\`

### Performance

- Tối ưu hình ảnh: Sử dụng Next.js Image component
- Lazy loading: Components tự động lazy load với Next.js 13
- Code splitting: Tự động với App Router

## Deployment

### Vercel (Khuyên dùng)

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Build tĩnh

\`\`\`bash
npm run build
# Output trong folder .next/
\`\`\`

## Ghi chú

- **Static mockup**: Hiện tại tất cả nội dung là static
- **Dynamic features**: Sẽ implement sau (upload file, form submission, etc.)
- **Responsive**: Đã tối ưu cho mobile, tablet, desktop
- **Accessibility**: Sử dụng semantic HTML và ARIA labels
- **Browser support**: Chrome, Firefox, Safari, Edge (modern versions)

## Liên hệ

- Email: support@agrisa.vn
- Địa chỉ: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, HCM

---

**Version**: 1.0.0
**Last Updated**: 2025-11-08
