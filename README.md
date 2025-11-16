# Agrisa Insurance Landing Page

Landing page for the Agrisa Insurance product - Smart agricultural insurance.

## Overview

The landing page is built with Next.js 13, using App Router, Ant Design, Tailwind CSS, and Framer Motion to create impressive scroll reveal effects.

### Key Features

- **Hero Section**: Main banner with statistics and CTA buttons
- **Features**: Introduction to 8 prominent features with icons and descriptions
- **Download**: App download section with Google Play, App Store, APK/IPA links
- **Documents**: User guides and product information
- **Terms**: Insurance terms and conditions
- **Footer**: Contact information and useful links

### Technologies Used

- **Framework**: Next.js 13.5.11 (App Router)
- **UI Library**: Ant Design 5.27.1
- **Icons**: Lucide React
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Language**: JavaScript (no TypeScript used)

## Installation and Running

### Requirements

- Node.js 16+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open browser at [http://localhost:3001](http://localhost:3001)

> **Note**: Default port is 3001 to avoid conflict with the main app

### Build Production

```bash
npm run build
npm start
```

## Project Structure

```
agrisa-landing-page/
├── app/
│   ├── layout.js          # Root layout with Ant Design provider
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles with fonts
├── components/
│   ├── Header.js          # Fixed navigation header
│   ├── Hero.js            # Hero section with animations
│   ├── Features.js        # Features grid with 8 features
│   ├── Download.js        # App download section
│   ├── Documents.js       # Documents & guides section
│   ├── Terms.js           # Terms & conditions
│   ├── Footer.js          # Footer with contact info
│   └── ScrollReveal.js    # Reusable scroll reveal component
├── providers/
│   └── antd-config-provider.js  # Ant Design theme config
├── tailwind.config.js     # Tailwind with custom colors
├── package.json
└── README.md
```

## Design and Colors

### Color Palette (Pastel, Classic)

**Primary (Green):**

- `#18573f` - Primary 500 (Main brand color)
- `#e8f5f0` - Primary 100 (Light background)
- `#62b98c` - Primary 400 (Accents)

**Secondary (Cream):**

- `#fefcf5` - Secondary 100 (Main background)
- `#fdf7e1` - Secondary 200 (Alternate background)
- `#f7e8ab` - Secondary 500 (Accent)

### Typography

- **Headings**: Fraunces (Serif) - Classic, elegant
- **Body**: Bricolage Grotesque (Sans-serif) - Modern, readable

### Icons

- **Lucide React**: Modern, consistent icons
- **Ant Design Icons**: Icons for UI components
- **NO emoji**

## Customization

### Change Colors

Edit the `tailwind.config.js` file:

```javascript
colors: {
  primary: {
    500: "#18573f",  // Main color
    // ...
  },
  secondary: {
    100: "#fefcf5",  // Background
    // ...
  },
}
```

### Add/Edit Sections

Each section is a separate component in `components/`.
Add a new section to `app/page.js`:

```javascript
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <NewSection />
    </main>
  );
}
```

### Update Information

**Contact Information** - Edit `components/Footer.js`

**Features** - Edit the `features` array in `components/Features.js`

**Documents** - Edit the `documents` array in `components/Documents.js`

**Terms** - Edit the `termsCategories` array in `components/Terms.js`

## Add Images

### Logo and Images

1. Create the `public/images/` folder
2. Add images to the folder
3. Import and use in components:

```javascript
import Image from "next/image";

<Image
  src="/images/app-screenshot.png"
  alt="Agrisa App"
  width={400}
  height={800}
/>;
```

### Images to Update

- **Hero Section**: Mobile app screenshot (components/Hero.js:65)
- **Logo**: Agrisa logo (components/Header.js, components/Footer.js)

## Update Links

### Download Links

Edit `components/Download.js`:

```javascript
<Button
  type="primary"
  size="large"
  block
  icon={<Download size={16} />}
  href="https://play.google.com/store/apps/..." // Add real link
  disabled={false} // Remove disabled
>
  Download from Google Play
</Button>
```

### Document Links

Edit `components/Documents.js`:

```javascript
<Button
  type="primary"
  icon={<Download size={16} />}
  href="/documents/huong-dan-su-dung.pdf" // Add file link
  disabled={false} // Remove disabled
>
  Download
</Button>
```

## Optimization

### SEO

Update metadata in `app/layout.js`:

```javascript
export const metadata = {
  title: "Agrisa Insurance - Smart agricultural insurance",
  description: "Detailed description...",
  keywords: ["agricultural insurance", "agrisa", ...],
  openGraph: {
    title: "...",
    description: "...",
    images: ["/og-image.png"],
  },
};
```

### Performance

- Optimize images: Use Next.js Image component
- Lazy loading: Components auto lazy load with Next.js 13
- Code splitting: Auto with App Router

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Static Build

```bash
npm run build
# Output in .next/ folder
```

## Notes

- **Static mockup**: Currently all content is static
- **Dynamic features**: Will implement later (upload file, form submission, etc.)
- **Responsive**: Optimized for mobile, tablet, desktop
- **Accessibility**: Use semantic HTML and ARIA labels
- **Browser support**: Chrome, Firefox, Safari, Edge (modern versions)

## Contact

- Email: support@agrisa.vn
- Address: Lot E2a-7, D1 Road, Long Thanh My, Thu Duc City, HCM

---

**Version**: 1.0.0
**Last Updated**: 2025-11-08
