import type { GlossaryEntry } from "@/data/glossary";
import { CategoryBadge } from "./CategoryBadge";

interface GlossaryPopoverProps {
  entry: GlossaryEntry;
  onClose: () => void;
}

export function GlossaryPopover({ entry, onClose }: GlossaryPopoverProps) {
  return (
    <>
      {/* Invisible backdrop to catch outside clicks */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="absolute left-0 top-full z-50 mt-2 max-w-[360px] animate-[glossary-popover-in_150ms_ease-out_forwards]"
        style={{
          background: "var(--window-frame-bg, #fff)",
          border: "1px solid var(--border-color-light, #e5e5e5)",
          borderRadius: "4px",
          padding: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <span className="font-mono font-bold text-sm">{entry.term}</span>
          <CategoryBadge category={entry.category} size="sm" />
        </div>

        <p className="text-body text-sm leading-relaxed mb-3">
          {entry.shortDef}
        </p>

        {entry.deepLink && (
          <a
            href={entry.deepLink}
            className="cta-link text-sm inline-block mb-2"
          >
            Aprofundar &rarr;
          </a>
        )}

        {entry.references && entry.references.length > 0 && (
          <div className="mt-2 pt-2 border-t border-[var(--border-color-light,#e5e5e5)]">
            <span className="font-mono text-[10px] uppercase tracking-wider opacity-50">
              Referências
            </span>
            <ul className="mt-1 space-y-0.5">
              {entry.references.map((ref) => (
                <li key={ref.label} className="text-[11px] text-body opacity-70">
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
