import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Results | Adorca360",
  description: "Explore how Adorca360 delivers measurable organic traffic growth, lower CPA, and top app store rankings across global markets.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pageCanvas" style={{ flex: 1, paddingTop: "40px" }}>
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
