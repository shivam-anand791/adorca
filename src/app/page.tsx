import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Endorsements from "@/components/Endorsements";
import Services from "@/components/Services";
import BoostTraffic from "@/components/BoostTraffic";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area: Styled as a canvas holding floating card sections */}
      <main className="pageCanvas" style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Trusted by client logos trust bar */}
        <ClientLogos />

        {/* Brand Endorsements Tilted Cards Row */}
        <Endorsements />

        {/* Exclusive Services Grid Section */}
        <Services />

        {/* Boost Traffic Feature Section */}
        <BoostTraffic />

        {/* Why Choose Us & Stats Block */}
        <WhyChooseUs />

        {/* Case Studies / Client Results Section */}
        <CaseStudies />

        {/* Testimonials Carousel Section */}
        <Testimonials />

        {/* News & Blogs Section */}
        <Blog />

        {/* SEO Consultation & Contact Section */}
        <ConsultationForm />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
