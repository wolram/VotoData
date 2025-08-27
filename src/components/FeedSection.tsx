"use client";

import { useState, useCallback, useMemo } from "react";
import {
  FolderIcon,
  ChevronDownIcon,
  CheckboxIcon,
  AccordionPlusIcon,
} from "@/components/icons";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface FeedItem {
  date: string;
  name: string;
  type: "API Update" | "Dataset" | "Artigo" | "Modelo";
}

const FEED_ITEMS: FeedItem[] = [
  { date: "2025.07.05", name: "MiroFish + Dados do TSE: Simulação de Cenários Eleitorais com Inteligência de Enxame", type: "Artigo" },
  { date: "2025.07.01", name: "Prediction Markets e as Eleições Brasileiras de 2026", type: "Artigo" },
  { date: "2025.07.01", name: "Synthetic Prediction Markets for Brazilian Elections: A ML Approach (Working Paper)", type: "Artigo" },
  { date: "2025.12.15", name: "API v2.1 — Endpoint de resultados por seção eleitoral", type: "API Update" },
  { date: "2025.12.10", name: "Dataset: Perfil do eleitorado 2024 por município", type: "Dataset" },
  { date: "2025.12.01", name: "Predicting voter abstention in Brazilian municipalities using XGBoost", type: "Artigo" },
  { date: "2025.11.28", name: "Modelo: Projeção de segundo turno — eleições municipais 2024", type: "Modelo" },
  { date: "2025.11.20", name: "API v2.0 — Financiamento de campanha com filtros por FEFC", type: "API Update" },
  { date: "2025.11.15", name: "Dataset: Prestação de contas 2024 — receitas e despesas", type: "Dataset" },
  { date: "2025.11.01", name: "Electoral geography and vote transfer patterns in Brazilian state capitals", type: "Artigo" },
  { date: "2025.10.25", name: "Modelo: Segmentação de eleitorado por variáveis sociodemográficas", type: "Modelo" },
  { date: "2025.10.18", name: "Dataset: Candidaturas 1998–2024 — série histórica padronizada", type: "Dataset" },
  { date: "2025.10.10", name: "API v1.9 — Patrimônio declarado com evolução longitudinal", type: "API Update" },
  { date: "2025.10.01", name: "Gender quotas and effective representation: evidence from Brazilian local elections", type: "Artigo" },
  { date: "2025.09.20", name: "Modelo: Análise de transferência de votos entre turnos", type: "Modelo" },
  { date: "2025.09.12", name: "Dataset: Geografia eleitoral — seções e zonas com coordenadas", type: "Dataset" },
  { date: "2025.09.01", name: "The wealth-election nexus: candidate assets and electoral success in Brazil", type: "Artigo" },
  { date: "2025.08.25", name: "API v1.8 — Perfil do eleitorado com filtros demográficos", type: "API Update" },
  { date: "2025.08.15", name: "Modelo: Predição de quociente eleitoral por partido e UF", type: "Modelo" },
  { date: "2025.08.01", name: "Computational approaches to Brazilian electoral data: a methodological review", type: "Artigo" },
  { date: "2025.07.20", name: "Dataset: Votação nominal por seção — eleições gerais 2022", type: "Dataset" },
  { date: "2025.07.10", name: "API v1.7 — Coligações e federações partidárias históricas", type: "API Update" },
  { date: "2025.07.01", name: "Modelo: Classificador de redutos eleitorais por município", type: "Modelo" },
];

interface TopicEntry {
  label: string;
  count: number;
}

const TOPICS: TopicEntry[] = [
  { label: "Candidaturas", count: 3 },
  { label: "Resultados", count: 5 },
  { label: "Financiamento", count: 3 },
  { label: "Predição", count: 4 },
  { label: "Estratégia", count: 2 },
  { label: "Demografia", count: 3 },
  { label: "Geografia Eleitoral", count: 2 },
];

const TYPE_FILTERS: TopicEntry[] = [
  { label: "API Update", count: 5 },
  { label: "Dataset", count: 5 },
  { label: "Artigo", count: 8 },
  { label: "Modelo", count: 5 },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FilterGroup({
  title,
  items,
  selected,
  onToggle,
}: {
  title: string;
  items: TopicEntry[];
  selected: Set<string>;
  onToggle: (label: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-1.5 py-2 min-h-[44px] text-mono-sm cursor-pointer"
        aria-expanded={open}
      >
        <FolderIcon />
        <ChevronDownIcon
          className={`transition-transform duration-200 ${open ? "" : "-rotate-90"}`}
        />
        <span>{title}</span>
      </button>
      {open && (
        <ul className="pl-0">
          {items.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => onToggle(item.label)}
                className="flex w-full items-center gap-1.5 py-2 min-h-[44px] text-mono-sm cursor-pointer"
                role="checkbox"
                aria-checked={selected.has(item.label)}
              >
                <CheckboxIcon checked={selected.has(item.label)} />
                <span>
                  {item.label} ({item.count})
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FeedRow({
  item,
  expanded,
  onToggle,
}: {
  item: FeedItem;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="border-b border-[var(--border-color-light)]">
      <button
        type="button"
        onClick={onToggle}
        className="grid w-full grid-cols-[100px_1fr_110px_auto] items-center gap-6 py-4 min-h-[48px] text-mono-sm text-left cursor-pointer hover:bg-[var(--button-color)] transition-colors duration-150"
        aria-expanded={expanded}
      >
        <span>{item.date}</span>
        <span>{item.name}</span>
        <span>{item.type}</span>
        <AccordionPlusIcon expanded={expanded} />
      </button>
      {expanded && (
        <div className="pb-4 pl-[80px] pr-4 font-mono text-xs font-light text-[#1e1e1e99]">
          Details for &ldquo;{item.name}&rdquo; coming soon.
        </div>
      )}
    </li>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export function FeedSection() {
  // Filter state
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());

  // Accordion state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleType = useCallback((label: string) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  const toggleTopic = useCallback((label: string) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedTypes(new Set());
    setSelectedTopics(new Set());
  }, []);

  const hasFilters = selectedTypes.size > 0 || selectedTopics.size > 0;

  const visibleItems = useMemo(() => {
    if (!hasFilters) return FEED_ITEMS;
    return FEED_ITEMS.filter((item) => {
      if (selectedTypes.size > 0 && !selectedTypes.has(item.type)) return false;
      // Topic filtering would require a topic mapping per item.
      // For this clone, we show all items when only topic filters are active.
      return true;
    });
  }, [hasFilters, selectedTypes]);

  return (
    <section
      className="section-full section-border pt-10 pb-16"
      style={{ gap: 56 }}
    >
      {/* Section heading */}
      <h2 className="text-section-heading mb-14">
        Feed
        <sup className="text-[0.35em] align-super ml-1">(23)</sup>
      </h2>

      {/* Content area: sidebar + list */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(180px,240px)_1fr]">
        {/* Left sidebar — filters */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="section-label">
              <span className="section-label-slash">/</span> Filtros
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="cta-link opacity-60"
              >
                Limpar
              </button>
            )}
          </div>

          <FilterGroup
            title="Tipo"
            items={TYPE_FILTERS}
            selected={selectedTypes}
            onToggle={toggleType}
          />

          <FilterGroup
            title="Tópico"
            items={TOPICS}
            selected={selectedTopics}
            onToggle={toggleTopic}
          />
        </div>

        {/* Right content — table */}
        <div>
          {/* Table header */}
          <div className="grid grid-cols-[100px_1fr_110px_auto] gap-6 border-b border-[var(--border-color-light)] pb-3 text-mono-sm uppercase">
            <span>/ Data</span>
            <span>/ Nome</span>
            <span>/ Tipo</span>
            <span />
          </div>

          {/* List */}
          <ul className="list-none p-0 m-0">
            {visibleItems.map((item, i) => (
              <FeedRow
                key={`${item.date}-${item.name}`}
                item={item}
                expanded={expandedIndex === i}
                onToggle={() =>
                  setExpandedIndex((prev) => (prev === i ? null : i))
                }
              />
            ))}
          </ul>

          {/* Bottom links */}
          <div className="mt-6 flex flex-wrap gap-6">
            <a href="/apis" className="cta-link">Todas as APIs</a>
            <a href="/dados" className="cta-link">Todos os Datasets</a>
            <a href="/pesquisa" className="cta-link">Todos os Artigos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
