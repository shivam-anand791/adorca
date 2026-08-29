import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Endorsements from "@/components/Endorsements";
import Services from "@/components/Services";
import BoostTraffic from "@/components/BoostTraffic";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blog from "@/components/Blog";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Hero Section */}
        <Hero />

        {/* Brand Endorsements Infinite Marquee Ticker */}
        <Endorsements />

        {/* Exclusive Services Section (Dark Blue Backdrop) */}
        <Services />

        {/* Boost Traffic Feature Section (Light Background) */}
        <BoostTraffic />

        {/* Why Choose Us & Stats Block (Fold 1: Light Value Cards, Fold 2: Dark Blue Progress Circles) */}
        <WhyChooseUs />

        {/* News & Blogs Section (Light Background Grid) */}
        <Blog />

        {/* SEO Consultation & Contact Section (Form Left, Info Right) */}
        <ConsultationForm />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
