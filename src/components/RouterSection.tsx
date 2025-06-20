import { PixelArrowRightIcon } from "@/components/icons";

interface SubLink {
  label: string;
  href: string;
}

interface TopicCard {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  subLinks: SubLink[];
}

const topicCards: TopicCard[] = [
  {
    title: "Modelos Preditivos",
    description: "Algoritmos de machine learning treinados com dados eleitorais históricos para projetar cenários eleitorais com alta acurácia.",
    ctaLabel: "Explorar Modelos",
    ctaHref: "/modelos",
    subLinks: [
      { label: "Predição de Abstenção", href: "/modelos/abstencao" },
      { label: "Projeção de Segundo Turno", href: "/modelos/segundo-turno" },
      { label: "Análise de Transferência de Votos", href: "/modelos/transferencia" },
    ],
  },
  {
    title: "Simulação Multi-Agente (MiroFish)",
    description: "Motor de swarm intelligence que cria mundos digitais paralelos com milhares de agentes-eleitores. Simule campanhas, injete eventos e observe o comportamento emergente.",
    ctaLabel: "Ver Como Funciona",
    ctaHref: "/blog/mirofish-predicao-eleitoral",
    subLinks: [
      { label: "Simulação de Cenários Eleitorais", href: "/estrategia/simulador" },
      { label: "War Room Digital — Interaja com Agentes", href: "/blog/mirofish-predicao-eleitoral" },
      { label: "MiroFish no GitHub (48.3k stars)", href: "https://github.com/666ghj/MiroFish" },
    ],
  },
  {
    title: "Estratégia de Campanha",
    description: "Segmentação de eleitorado, alocação de recursos e análise de concorrentes baseada em dados granulares até a seção eleitoral.",
    ctaLabel: "Solicitar Análise",
    ctaHref: "/contato",
    subLinks: [
      { label: "Segmentação por Seção Eleitoral", href: "/estrategia/segmentacao" },
      { label: "Mapa de Redutos Eleitorais", href: "/estrategia/redutos" },
      { label: "Prediction Markets Sintéticos", href: "/blog/prediction-markets-eleicoes-2026" },
    ],
  },
  {
    title: "Pesquisa Acadêmica",
    description: "Metodologias validadas em centros de referência como Stanford e Harvard. Dados abertos para a comunidade científica.",
    ctaLabel: "Acessar Pesquisas",
    ctaHref: "/pesquisa",
    subLinks: [
      { label: "Papers Publicados", href: "/pesquisa/papers" },
      { label: "Datasets Abertos", href: "/dados" },
      { label: "Metodologia e Reprodutibilidade", href: "/pesquisa/metodologia" },
    ],
  },
];

function DecorativeArt() {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" className="w-full max-w-[280px] opacity-60" aria-hidden="true">
      <circle cx="140" cy="140" r="130" stroke="var(--font-color)" strokeWidth="0.5" strokeDasharray="2 6" />
      <circle cx="140" cy="140" r="90" stroke="var(--font-color)" strokeWidth="0.5" strokeDasharray="2 6" />
      <circle cx="140" cy="140" r="50" stroke="var(--font-color)" strokeWidth="0.5" strokeDasharray="2 6" />
      <circle cx="140" cy="140" r="3" fill="var(--font-color)" />
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        return (
          <line key={i} x1={140 + 125 * Math.cos(angle)} y1={140 + 125 * Math.sin(angle)} x2={140 + 135 * Math.cos(angle)} y2={140 + 135 * Math.sin(angle)} stroke="var(--font-color)" strokeWidth="0.5" />
        );
      })}
    </svg>
  );
}

function TopicCardComponent({ card }: { card: TopicCard }) {
  const isExternal = card.ctaHref.startsWith("http");

  return (
    <div className="section-border pb-7 pt-7 first:pt-0 first:border-t-0">
      <h3 className="font-sans text-xl font-normal leading-tight mb-2">
        {card.title}
      </h3>
      <p className="text-body max-w-[480px]">{card.description}</p>
      <a
        href={card.ctaHref}
        className="cta-link inline-block mt-3 mb-3"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {card.ctaLabel}
      </a>
      <ul className="flex flex-col">
        {card.subLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="sub-link">
              {link.label}
              <PixelArrowRightIcon className="shrink-0" width={7} height={7} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RouterSection() {
  return (
    <section className="section-full section-border" style={{ rowGap: "56px", paddingTop: "56px" }}>
      <h2 className="text-section-heading col-span-full">
        Produtos<sup className="text-[0.35em] align-super ml-1 font-normal">(4)</sup>
      </h2>

      <div className="col-span-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-14">
        {/* Info area */}
        <div className="hidden lg:block">
          <div className="section-label">
            <span className="section-label-slash">/</span>Info
          </div>
          <div className="mt-8 flex items-center justify-center">
            <DecorativeArt />
          </div>
        </div>

        {/* Topics area */}
        <div>
          <div className="section-label">
            <span className="section-label-slash">/</span>Soluções
          </div>
          <div className="flex flex-col mt-4">
            {topicCards.map((card) => (
              <TopicCardComponent key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
