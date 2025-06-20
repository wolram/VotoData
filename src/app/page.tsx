import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPostsSection } from "@/components/FeaturedPostsSection";
import { StatisticsTicker } from "@/components/StatisticsTicker";
import { FeedSection } from "@/components/FeedSection";
import { GetHelpSection } from "@/components/GetHelpSection";
import { RouterSection } from "@/components/RouterSection";
import { Footer } from "@/components/Footer";

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
