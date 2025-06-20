import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="page-grid">
      <Nav />
      <div className="col-span-full flex flex-col items-center justify-center min-h-[60vh] pt-[80px] pb-20 text-center">
        <h1 className="text-section-heading">404</h1>
        <p className="text-body mt-6">
          Seção eleitoral não encontrada.
        </p>
        <p className="text-body mt-2 opacity-60">
          O endereço que você procura não existe ou foi movido.
        </p>
        <Link href="/" className="cta-link mt-8">
          Voltar ao início
        </Link>
      </div>
      <Footer />
    </main>
  );
}
