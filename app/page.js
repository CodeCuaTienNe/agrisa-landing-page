import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/Download";
import Documents from "@/components/Documents";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DownloadSection />
      <Documents />
      <Terms />
      <Footer />
    </main>
  );
}
