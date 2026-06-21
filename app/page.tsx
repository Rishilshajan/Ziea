import { Metadata } from "next";
import { Header } from "@/components/Hero/Header";
import { HeroSection } from "@/components/Hero/HeroSection";
import { HandcraftedPieces } from "@/components/Hero/HandcraftedPieces";
import { EditorialReveal } from "@/components/Hero/EditorialReveal";
import { Newsletter } from "@/components/Hero/Newsletter";
import { Footer } from "@/components/Hero/Footer";
import { MobileNav } from "@/components/Hero/MobileNav";

export const metadata: Metadata = {
  title: "ZIEA | The Art of Gentle Living",
  description: "Experience the modern curator's digital atelier. Handcrafted silhouettes, sustainable textiles, and deeply felt storytelling.",
  keywords: ["fashion", "sustainable", "handcrafted", "atelier", "gentle living"],
  openGraph: {
    title: "ZIEA | The Art of Gentle Living",
    description: "Experience the modern curator's digital atelier.",
    url: "https://ziea.in",
    siteName: "ZIEA",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Render sections in editorial order */}
        <HeroSection />
        <HandcraftedPieces />
        <EditorialReveal />
        <Newsletter />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
