import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMNEEV Vision School | CBSE School in Etawah | Admissions 2026–27",
  description:
    "AMNEEV Vision School is a premier CBSE-affiliated senior secondary school in Etawah, Uttar Pradesh (Affiliation No. 2131535). Offering holistic education from Nursery to Class XII with Atal Tinkering Lab, 18,141 sq. m. campus, NCC, and sports excellence.",
  keywords: [
    "AMNEEV Vision School",
    "School in Etawah",
    "CBSE School in Etawah",
    "Best school in Etawah",
    "Atal Tinkering Lab Etawah",
    "Admissions 2026-27",
    "Senior secondary CBSE school Uttar Pradesh",
    "Pankaj Sharma Principal AMNEEV",
  ],
  authors: [{ name: "AMNEEV Vision School" }],
  openGraph: {
    title: "AMNEEV Vision School — Shaping Minds. Building Futures.",
    description:
      "CBSE-affiliated senior secondary school in Etawah offering holistic education from Nursery to Class XII. Admissions Open 2026–27.",
    url: "https://amneevvision.edu.in",
    siteName: "AMNEEV Vision School",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for School / Educational Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: siteContent.school.name,
    description: siteContent.school.motto,
    url: "https://amneevvision.edu.in",
    telephone: siteContent.school.phone,
    email: siteContent.school.email,
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sai City, Udaypura, Farrukhabad Road, NH-92",
      addressLocality: "Etawah",
      addressRegion: "Uttar Pradesh",
      postalCode: "206001",
      addressCountry: "IN",
    },
    alumni: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CBSE Senior Secondary Certificate",
    },
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-charcoal-900 font-sans selection:bg-forest-100 selection:text-forest-950">
        {/*
          THESIS: A flagship editorial website for AMNEEV Vision School, blending the narrative spaciousness of world-class international school portals with authentic modern Indian educational substance, refusing generic template cards and AI glassmorphism.
          OWN-WORLD: Palette of deep forest charcoal (#0c1b17), warm ivory paper ground (#FDFBF7), soft stone (#F7F5EE), and muted brass accent (#cfa64d) with Cormorant Garamond serif display and crisp Plus Jakarta Sans body.
          STORY: Visitors discover a 15-year CBSE legacy in Etawah where ambition meets belonging, from Kreedo early years through Atal Tinkering Lab innovation, NCC leadership, and senior board excellence.
          FIRST VIEWPORT: Full-bleed cinematic campus video hero, prominent editorial typography, subtle badge, dual conversion CTA, and clean sticky navigation.
          FORM: Editorial school brand showcase, seed key b351be6b.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
