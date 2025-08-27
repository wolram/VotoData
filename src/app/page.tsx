import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPostsSection } from "@/components/FeaturedPostsSection";
import { StatisticsTicker } from "@/components/StatisticsTicker";
import { FeedSection } from "@/components/FeedSection";
import { GetHelpSection } from "@/components/GetHelpSection";
import { RouterSection } from "@/components/RouterSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VotoData — Inteligência Eleitoral em Escala",
  description:
    "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil. Dados do TSE processados para ciência política, partidos e consultorias.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="page-grid">
      <Nav />
      <HeroSection />
      <FeaturedPostsSection />
      <StatisticsTicker />
      <FeedSection />
      <GetHelpSection />
      <RouterSection />
      <Footer />
    </main>
  );
}
