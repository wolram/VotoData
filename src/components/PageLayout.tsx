import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  label?: string;
  maxWidth?: string;
}

export function PageLayout({ children, label, maxWidth = "720px" }: PageLayoutProps) {
  return (
    <main className="page-grid">
      <Nav />
      <article className="col-span-full pt-[80px] pb-20" style={{ maxWidth }}>
        {label && (
          <div className="section-label mb-6">
            <span className="section-label-slash">/</span>
            {label}
          </div>
        )}
        {children}
      </article>
      <Footer />
    </main>
  );
}
