"use client";

import { useEffect, useState } from "react";

interface HelpCard {
  label: string;
  description: string;
  exampleText: string;
  ctaLabel: string;
  ctaHref: string;
}

const helpCards: HelpCard[] = [
  {
    label: "Documentação da API",
    description: "Referência completa das APIs REST com exemplos em Python e R. Autenticação, endpoints, paginação e rate limits.",
    exampleText: "GET /api/v1/resultados?ano=2022&uf=SP",
    ctaLabel: "Acessar Docs",
    ctaHref: "/docs",
  },
  {
    label: "Contato Comercial",
    description: "Soluções sob medida para partidos, consultorias políticas e órgãos públicos. Dados customizados e modelos exclusivos.",
    exampleText: "",
    ctaLabel: "Falar com Especialista",
    ctaHref: "/contato",
  },
  {
    label: "Casos de Uso",
    description: "Veja como nossos dados e modelos são aplicados em cenários reais de campanha, pesquisa e análise institucional.",
    exampleText: "Predição de segundo turno em capitais",
    ctaLabel: "Ver Casos",
    ctaHref: "/casos",
  },
  {
    label: "Apoie o Projeto",
    description: "Pesquisa independente sobre democracia e dados eleitorais. Apoie via GitHub Sponsors ou Buy Me a Coffee.",
    exampleText: "",
    ctaLabel: "Apoiar",
    ctaHref: "https://github.com/sponsors/wolram",
  },
];

function TypewriterText({ text }: { text: string }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!text.length) return;

    if (prefersReducedMotion) {
      setVisibleCount(text.length);
      return;
    }

    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [text, prefersReducedMotion]);

  if (!text.length) return null;

  return (
    <span aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ opacity: i < visibleCount ? 1 : 0 }} className="transition-opacity duration-75" aria-hidden="true">
          {char}
        </span>
      ))}
      {!prefersReducedMotion && (
        <span className="inline-block w-[1ch]" style={{ animation: "vibes-blink 1s step-end infinite" }} aria-hidden="true">|</span>
      )}
    </span>
  );
}

function HelpCardItem({ card }: { card: HelpCard }) {
  const isExternal = card.ctaHref.startsWith("http");

  return (
    <div className="col-span-full md:col-span-12 flex flex-col gap-4 pt-6 section-border">
      <div className="section-label">
        <span className="section-label-slash">/</span>
        {card.label}
      </div>

      <p className="text-body">{card.description}</p>

      {card.exampleText && (
        <div className="text-mono-sm">
          Exemplo: <TypewriterText text={card.exampleText} />
        </div>
      )}

      <a
        href={card.ctaHref}
        className="cta-link"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {card.ctaLabel}
      </a>
    </div>
  );
}

export function GetHelpSection() {
  return (
    <section className="section-full section-border" style={{ rowGap: "56px" }}>
      <h2 className="text-section-heading col-span-full pt-14">
        Acesse<sup className="text-[0.4em] align-super ml-0.5">(4)</sup>
      </h2>
      {helpCards.map((card) => (
        <HelpCardItem key={card.label} card={card} />
      ))}
    </section>
  );
}
