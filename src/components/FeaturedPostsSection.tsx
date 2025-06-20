import Link from "next/link";
import { PixelArrowIcon } from "@/components/icons";

function StarburstArt() {
  return (
    <div className="art-frame">
      <svg viewBox="0 0 300 200" className="h-full w-full text-[var(--art-stroke)]" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {Array.from({ length: 36 }, (_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          return (
            <line key={i} x1="150" y1="100" x2={150 + Math.cos(angle) * 120} y2={100 + Math.sin(angle) * 80} stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          );
        })}
        <circle cx="150" cy="100" r="4" fill="currentColor" opacity="0.4" />
      </svg>
      <span className="art-frame-label">[ Fig. 1 ]</span>
    </div>
  );
}

function RingArt() {
  return (
    <div className="art-frame">
      <svg viewBox="0 0 300 200" className="h-full w-full text-[var(--art-stroke)]" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {[90, 70, 50, 30, 10].map((r, i) => (
          <circle key={r} cx="150" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.5" opacity={0.35 - i * 0.05} />
        ))}
      </svg>
      <span className="art-frame-label">[ Fig. 2 ]</span>
    </div>
  );
}

export function FeaturedPostsSection() {
  return (
    <section className="section-full section-border" style={{ rowGap: 32 }}>
      {/* API em Destaque */}
      <div className="col-span-full grid gap-4 md:col-span-12">
        <div className="section-label">
          <span className="section-label-slash">/</span>
          API em Destaque
        </div>
        <StarburstArt />
        <div>
          <Link href="/apis" className="group block">
            <div className="flex items-start gap-2">
              <span className="text-card-title">
                API de Resultados Eleitorais — granularidade até seção eleitoral
              </span>
              <PixelArrowIcon className="mt-1.5 shrink-0 text-[var(--font-color)]" width={11} height={11} />
            </div>
            <p className="text-card-body mt-3">
              Acesse dados de votação de 1998 até hoje. Mais de 150 milhões de
              registros processados, filtrados e padronizados via metodologia
              CEPESPData.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="tag-pill">API REST</span>
              <span className="tag-pill">Dados Históricos</span>
            </div>
          </Link>
          <Link href="/apis" className="cta-link mt-4 inline-block">
            Explorar APIs
          </Link>
        </div>
      </div>

      {/* Modelo em Destaque */}
      <div className="col-span-full grid gap-4 md:col-span-12">
        <div className="section-label">
          <span className="section-label-slash">/</span>
          Modelo em Destaque
        </div>
        <RingArt />
        <div>
          <Link href="/modelos" className="group block">
            <div className="flex items-start gap-2">
              <span className="text-card-title">
                Predição de abstenção municipal — modelo XGBoost com 94% de acurácia
              </span>
              <PixelArrowIcon className="mt-1.5 shrink-0 text-[var(--font-color)]" width={11} height={11} />
            </div>
            <p className="text-card-body mt-3">
              Modelo treinado com dados socioeconômicos do IBGE cruzados com
              perfil do eleitorado do TSE. Disponível via API ou download.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="tag-pill">Machine Learning</span>
              <span className="tag-pill">Predição</span>
            </div>
          </Link>
          <Link href="/modelos" className="cta-link mt-4 inline-block">
            Ver Modelos
          </Link>
        </div>
      </div>
    </section>
  );
}
