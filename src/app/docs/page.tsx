import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Documentação da API — VotoData",
};

export default function DocsPage() {
  return (
    <main className="page-grid">
      <Nav />
      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Documentação
        </div>
        <h1 className="text-section-heading">Documentação da API</h1>
        <p className="text-body mt-6">
          Referência completa com exemplos em Python e R. Autenticação,
          endpoints, paginação e rate limits.
        </p>
        <Link href="/contato" className="cta-link mt-8 inline-block">
          Em breve — cadastre-se para ser notificado
        </Link>
      </article>
      <Footer />
    </main>
  );
}
