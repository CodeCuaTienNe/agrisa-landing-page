import Documents from "@/components/Documents";
import DownloadSection from "@/components/Download";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsurancePartner from "@/components/InsurancePartner";
import Terms from "@/components/Terms";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DownloadSection />
      <InsurancePartner />
      <Documents />
      <Terms />
      <Footer />
    </main>
  );
}
