import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com"),
  title: {
    default: "Adorca360 | Global Growth, Digital & Affiliate Marketing Agency",
    template: "%s | Adorca360",
  },
  description: "Adorca360 is a leading global digital and affiliate marketing agency. We deliver organic SEO, programmatic advertising, lead generation, social media growth, and premium web design across 50+ international markets.",
  keywords: ["digital marketing agency", "affiliate marketing", "organic SEO services", "global growth marketing", "social media marketing", "programmatic advertising", "lead generation", "ASO optimization"],
  authors: [{ name: "Adorca360 Team", url: "https://adorca360.com" }],
  creator: "Adorca360",
  publisher: "Adorca360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adorca360.com",
    siteName: "Adorca360",
    title: "Adorca360 | Global Growth, Digital & Affiliate Marketing Agency",
    description: "Expand your global digital footprint. Direct response, performance-focused SEO, affiliate marketing, programmatic advertising, and conversion-optimized websites.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adorca360 - Global Growth & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adorca360 | Global Growth, Digital & Affiliate Marketing Agency",
    description: "Expand your global digital footprint. Direct response, performance-focused SEO, affiliate marketing, programmatic advertising, and conversion-optimized websites.",
    images: ["/og-image.png"],
    creator: "@adorca360",
  },
  alternates: {
    canonical: "https://adorca360.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }} suppressHydrationWarning>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
