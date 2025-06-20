import { PlusIcon, StripeLogoIcon } from "@/components/icons";
import { NewsletterForm } from "@/components/NewsletterForm";

function DecorativeStrip() {
  return (
    <div className="col-span-full decorative-strip" aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => (
        <PlusIcon key={i} className="shrink-0 text-[var(--font-color)]" />
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="section-full section-border mt-8">
      <DecorativeStrip />

      {/* Content columns */}
      <div className="col-span-full grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-10 py-12 px-4">
        {/* Documentação */}
        <div>
          <div className="section-label">
            <span className="section-label-slash">/</span>Documentação
          </div>
          <p className="text-body mt-4 text-sm leading-relaxed">
            Referência completa das APIs, guias de integração e exemplos de uso.
          </p>
          <a href="/docs" className="cta-link mt-4 inline-block">
            Acessar Docs
          </a>
        </div>

        {/* Social */}
        <div>
          <div className="section-label">
            <span className="section-label-slash">/</span>Social
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            <a href="https://github.com/wolram" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">Twitter/X</a>
            <a href="https://linkedin.com/" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Fontes de Dados */}
        <div>
          <div className="section-label">
            <span className="section-label-slash">/</span>Fontes de Dados
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            <a href="https://dadosabertos.tse.jus.br" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">TSE Dados Abertos</a>
            <a href="https://www.brasil.io/dataset/eleicoes-brasil/candidatos/" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">Brasil.io</a>
            <a href="https://github.com/Cepesp-Fgv/cepesp-r" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">CEPESPData (FGV)</a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="col-span-full px-4 py-8 section-border">
        <div className="section-label mb-4">
          <span className="section-label-slash">/</span>Newsletter
        </div>
        <p className="text-body text-sm mb-4">Receba atualizações sobre novos datasets, modelos e artigos.</p>
        <NewsletterForm />
      </div>

      <DecorativeStrip />

      {/* Logo + copyright + legal */}
      <div className="col-span-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 px-4">
        <div className="flex items-center gap-3">
          <StripeLogoIcon className="text-[var(--font-color)]" />
          <span className="text-mono-sm">&copy; 2025 VotoData</span>
          <span className="text-mono-sm opacity-40">|</span>
          <span className="text-mono-sm opacity-60">Dados do TSE processados de forma independente</span>
        </div>
        <nav className="flex items-center gap-6" aria-label="Links legais">
          <a href="/privacidade" className="text-mono-sm hover:underline">Privacidade</a>
          <a href="/termos" className="text-mono-sm hover:underline">Termos</a>
          <a href="https://www.tse.jus.br" className="text-mono-sm hover:underline" target="_blank" rel="noopener noreferrer">TSE.jus.br</a>
        </nav>
      </div>

      <DecorativeStrip />
    </footer>
  );
}
