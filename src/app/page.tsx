import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import GrowthSystem from "@/components/GrowthSystem";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Approach from "@/components/Approach";
import GrowthOpportunityTool from "@/components/GrowthOpportunityTool";
import AboutSection from "@/components/AboutSection";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation Header with 3-Pillar Mega Menu */}
      <Navbar />

      {/* Main Content Canvas with Floating & Dark Cinematic Sections */}
      <main className="pageCanvas" style={{ flex: 1 }}>
        {/* Section 01: Hero with Growth Intelligence Orbit Dashboard */}
        <Hero />

        {/* Section 02: Verified Proof Strip & Direct Partner Networks */}
        <ProofStrip />

        {/* Section 03: Dark Cinematic Growth System Interactive Pipeline */}
        <GrowthSystem />

        {/* Section 04: 3-Pillar Service Explorer (Acquire, Amplify, Convert) */}
        <Services />

        {/* Section 05: Verified Case Studies & Editorial Results Storytelling */}
        <FeaturedWork />

        {/* Section 06: 4-Step Execution Methodology (From Strategy To Scale) */}
        <Approach />

        {/* Section 07: Interactive Growth Opportunity Diagnostic Tool */}
        <GrowthOpportunityTool />

        {/* Section 08: Operating Principles & Narrative (Built For Ambitious Growth) */}
        <AboutSection />

        {/* Section 09: Strategic Intelligence & Editorial Articles */}
        <Blog />

        {/* Section 10: Frequently Asked Questions Accordion */}
        <FAQ />

        {/* Section 11: Final Cinematic Call to Action */}
        <FinalCTA />
      </main>

      {/* Verified Footer */}
      <Footer />
    </>
  );
}
