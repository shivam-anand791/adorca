import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com"),
  title: {
    default: "Adorca 360 | Performance Growth Studio & Technical Search Marketing",
    template: "%s | Adorca 360",
  },
  description:
    "Adorca 360 combines technical SEO, programmatic media, content architecture, and international market intelligence to help ambitious brands acquire high-value customers across 50+ markets.",
  keywords: [
    "Adorca 360",
    "technical SEO agency",
    "international SEO studio",
    "programmatic advertising agency",
    "global search marketing",
    "multilingual hreflang architecture",
    "conversion rate optimization",
    "App Store Optimization ASO",
  ],
  authors: [{ name: "Adorca 360 Strategy Team", url: "https://adorca360.com" }],
  creator: "Adorca 360",
  publisher: "Adorca 360",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
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
    siteName: "Adorca 360",
    title: "Adorca 360 | Performance Growth Studio & Technical Search Marketing",
    description:
      "Expand your global digital footprint. Performance-focused SEO, programmatic distribution, and conversion-engineered systems across 50+ markets.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adorca 360 - Performance Growth Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adorca 360 | Performance Growth Studio & Technical Search Marketing",
    description:
      "Expand your global digital footprint. Performance-focused SEO, programmatic distribution, and conversion-engineered systems across 50+ markets.",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
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
