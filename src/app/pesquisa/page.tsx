import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pesquisa Acadêmica — VotoData",
};

export default function PesquisaPage() {
  return (
    <main className="page-grid">
      <Nav />
      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Pesquisa
        </div>
        <h1 className="text-section-heading">Pesquisa Acadêmica</h1>
        <p className="text-body mt-6">
          Papers, metodologias e dados abertos para a comunidade científica.
          Validados em centros de referência como Stanford e Harvard.
        </p>
        <Link
          href="/pesquisa/prediction-markets-brazil"
          className="cta-link mt-8 inline-block"
        >
          Acessar pesquisas
        </Link>

        <div className="mt-12 border-t border-[var(--border-color-light)] pt-8">
          <div className="section-label mb-4">
            <span className="section-label-slash">/</span>
            Publicações
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/pesquisa/prediction-markets-brazil"
                className="cta-link"
              >
                Synthetic Prediction Markets for Brazilian Elections
              </Link>
            </li>
            <li>
              <Link
                href="/blog/prediction-markets-eleicoes-2026"
                className="cta-link"
              >
                Mercados de Predição e as Eleições de 2026
              </Link>
            </li>
            <li>
              <Link
                href="/blog/mirofish-predicao-eleitoral"
                className="cta-link"
              >
                MiroFish: Predição Eleitoral com Dados do TSE
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <Footer />
    </main>
  );
}
