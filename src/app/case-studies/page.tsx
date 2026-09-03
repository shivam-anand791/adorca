import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedWork from "@/components/FeaturedWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Verified Client Results",
  description:
    "Explore how Adorca 360 delivers measurable organic traffic growth, lower CPA, and top app store category rankings across global markets.",
  alternates: {
    canonical: "https://adorca360.com/case-studies",
  },
  openGraph: {
    title: "Case Studies & Verified Client Results | Adorca 360",
    description:
      "Explore how Adorca 360 delivers measurable organic traffic growth, lower CPA, and top app store category rankings across global markets.",
    url: "https://adorca360.com/case-studies",
    siteName: "Adorca 360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Verified Client Results | Adorca 360",
    description:
      "Explore how Adorca 360 delivers measurable organic traffic growth, lower CPA, and top app store category rankings across global markets.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pageCanvas" style={{ flex: 1, paddingTop: "calc(var(--nav-height) + 16px)", paddingBottom: "var(--section-padding-y)" }}>
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}
