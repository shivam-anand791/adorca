import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adorca360 | Global Growth, Digital & Affiliate Marketing Agency",
  description: "Adorca360 is a leading global digital and affiliate marketing agency in Gurugram, India. We deliver organic SEO, programmatic advertising, lead generation, social media growth, and premium web design across 50+ international markets.",
  keywords: ["digital marketing agency", "affiliate marketing", "organic SEO services", "global growth marketing", "social media marketing", "web design Gurugram", "programmatic advertising", "lead generation"],
  authors: [{ name: "Adorca360 Team", url: "https://adorca360.com" }],
  creator: "Adorca360",
  publisher: "Adorca360",
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
    title: "Adorca360 | Global Growth, Digital & Affiliate Marketing Agency",
    description: "Expand your global digital footprint. Direct response, performance-focused SEO, affiliate marketing, social influence, and high-performance website design.",
    siteName: "Adorca360",
    images: [
      {
        url: "https://adorca360.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adorca360 - Digital & Affiliate Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adorca360 | Global Growth, Digital & Affiliate Marketing Agency",
    description: "Expand your global digital footprint. Direct response, performance-focused SEO, affiliate marketing, social influence, and high-performance website design.",
    images: ["https://adorca360.com/og-image.jpg"],
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
