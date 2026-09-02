import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedWork from "@/components/FeaturedWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Verified Results | Adorca 360",
  description: "Explore how Adorca 360 delivers measurable organic traffic growth, lower CPA, and top app store category rankings across global markets.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pageCanvas" style={{ flex: 1, paddingTop: "40px" }}>
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}
