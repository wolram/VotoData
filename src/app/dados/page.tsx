import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datasets — VotoData",
};

export default function DadosPage() {
  return (
    <main className="page-grid">
      <Nav />
      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Dados
        </div>
        <h1 className="text-section-heading">Datasets</h1>
        <p className="text-body mt-6">
          Bases de dados eleitorais processadas e padronizadas. Disponíveis para
          download em CSV, Parquet e via API.
        </p>
        <Link href="/contato" className="cta-link mt-8 inline-block">
          Ver datasets disponíveis
        </Link>
      </article>
      <Footer />
    </main>
  );
}
