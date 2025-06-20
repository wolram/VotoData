import type { Metadata } from "next";
import { getGlossaryByCategory } from "@/data/glossary";
import { CategoryBadge } from "@/components/CategoryBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glossário Técnico — VotoData",
  description:
    "Glossário de termos técnicos usados na plataforma VotoData de dados eleitorais.",
};

const CATEGORY_ORDER = [
  "Eleitoral",
  "Data",
  "Predição",
  "Models",
  "AI",
  "Eng ML",
  "Social",
  "API",
];

export default function GlossarioPage() {
  const grouped = getGlossaryByCategory();

  const sortedCategories = CATEGORY_ORDER.filter(
    (cat) => grouped[cat] !== undefined
  );
  // Append any categories not in the predefined order
  for (const cat of Object.keys(grouped)) {
    if (!sortedCategories.includes(cat)) {
      sortedCategories.push(cat);
    }
  }

  return (
    <div className="page-grid">
      <article className="mx-auto w-full max-w-[900px] px-4 py-16">
        <h1 className="text-section-heading mb-12">Glossário</h1>

        {sortedCategories.map((category) => {
          const entries = grouped[category];
          if (!entries || entries.length === 0) return null;

          return (
            <section key={category} className="mb-12">
              <h2 className="section-label mb-6">
                <span className="section-label-slash">/</span> {category}
              </h2>

              <div className="space-y-6">
                {entries.map((entry) => (
                  <div
                    key={entry.slug}
                    className="section-border pb-6"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-mono font-bold text-base">
                        {entry.term}
                      </h3>
                      <CategoryBadge category={entry.category} size="sm" />
                    </div>

                    <p className="text-body text-sm leading-relaxed mb-2">
                      {entry.shortDef}
                    </p>

                    {entry.deepLink && (
                      <Link
                        href={entry.deepLink}
                        className="cta-link text-sm"
                      >
                        Ver mais &rarr;
                      </Link>
                    )}

                    {entry.references && entry.references.length > 0 && (
                      <p className="text-mono-sm text-[11px] opacity-50 mt-1">
                        Ref: {entry.references.map((r) => r.label).join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
}
