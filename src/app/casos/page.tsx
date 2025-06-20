import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Casos de Uso — VotoData",
};

export default function CasosPage() {
  return (
    <main className="page-grid">
      <Nav />
      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Casos de Uso
        </div>
        <h1 className="text-section-heading">Casos de Uso</h1>
        <p className="text-body mt-6">
          Veja como nossos dados e modelos são aplicados em cenários reais de
          campanha, pesquisa e análise institucional.
        </p>
        <Link href="/contato" className="cta-link mt-8 inline-block">
          Solicitar caso personalizado
        </Link>
      </article>
      <Footer />
    </main>
  );
}
