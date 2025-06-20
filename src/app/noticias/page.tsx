import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TwitterFeed } from "@/components/TwitterFeed";

export const metadata: Metadata = {
  title: "Notícias — VotoData",
};

const monitoredAccounts = [
  { handle: "TSEjusbr", label: "@TSEjusbr" },
  { handle: "VotoData", label: "@VotoData" },
  { handle: "staborges", label: "@staborges" },
];

const hashtags = ["#eleições2026", "#TSE", "#UrnaEletrônica"];

export default function NoticiasPage() {
  return (
    <div className="page-grid">
      <Nav />

      <main className="section-full py-12">
        <h1 className="text-section-heading mb-8">Notícias</h1>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Left column — Twitter feed */}
          <div>
            <TwitterFeed username="TSEjusbr" height={700} />
          </div>

          {/* Right column — sidebar */}
          <aside className="flex flex-col gap-8">
            {/* Monitored accounts */}
            <div>
              <p className="section-label">
                <span className="section-label-slash">/</span> Contas
                Monitoradas
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {monitoredAccounts.map((account) => (
                  <li key={account.handle}>
                    <a
                      href={`https://twitter.com/${account.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-link"
                    >
                      {account.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hashtags */}
            <div>
              <p className="section-label">
                <span className="section-label-slash">/</span> Hashtags
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {hashtags.map((tag) => (
                  <li key={tag}>
                    <a
                      href={`https://twitter.com/hashtag/${tag.replace("#", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-link"
                    >
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulate scenario CTA */}
            <div className="section-border p-4">
              <p className="section-label">
                <span className="section-label-slash">/</span> Simular Cenário
              </p>
              <p className="text-body mt-2">
                Viu uma notícia interessante? Simule o impacto eleitoral.
              </p>
              <Link href="/contato" className="cta-link mt-3 inline-block">
                Solicitar simulação &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
