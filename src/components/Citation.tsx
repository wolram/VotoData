"use client";

import { REFERENCES } from "@/data/references";

interface CitationProps {
  id: string;
  index?: number;
}

export function Citation({ id, index }: CitationProps) {
  const ref = REFERENCES[id];
  if (!ref) return null;

  const displayNumber = index ?? 1;
  const tooltip = `${ref.authors} (${ref.year}). ${ref.title}. ${ref.publication}`;

  return (
    <sup>
      <a
        href={`#ref-${id}`}
        title={tooltip}
        className="font-mono text-[10px] text-[var(--button-color,currentColor)] hover:underline no-underline"
      >
        [{displayNumber}]
      </a>
    </sup>
  );
}
