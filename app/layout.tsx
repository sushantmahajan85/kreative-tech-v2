import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kreative Tech | Website Design, App Development & Shopify Experts India",
  description:
    "Kreative Tech builds high-converting websites, Shopify stores, and mobile apps for Indian businesses. 50+ happy clients, 5+ years experience. WhatsApp for a free consultation.",
  keywords:
    "website design India, Shopify development India, app development India, landing page design, web development agency Delhi, affordable website design, MSME digital solutions",
  openGraph: {
    type: "website",
    title: "Kreative Tech | Website Design, App Development & Shopify Experts",
    description:
      "We build websites, Shopify stores & apps that win clients. Trusted by 50+ Indian businesses.",
    url: "https://kreativetech.in/",
    siteName: "Kreative Tech",
    images: [{ url: "https://kreativetech.in/images/og-image.jpg" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreative Tech | Website Design & App Development India",
    description: "We build websites, Shopify stores & apps that win clients.",
  },
  alternates: { canonical: "https://kreativetech.in/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}
      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif" }}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#E8561A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kreative Tech",
              description:
                "Website design, app development, Shopify stores and digital solutions for MSMEs and small businesses in India.",
              url: "https://kreativetech.in",
              telephone: "+919082706169",
              email: "connect@kreativetech.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              areaServed: "India",
              priceRange: "₹₹",
              openingHours: "Mo-Sa 09:00-20:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
              sameAs: [
                "https://www.linkedin.com/company/kreative-tech-official/?viewAsMember=true",
              ],
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif" }}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
