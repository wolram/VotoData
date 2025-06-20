import { REFERENCES } from "@/data/references";

interface ReferenceListProps {
  ids: string[];
}

export function ReferenceList({ ids }: ReferenceListProps) {
  const validRefs = ids
    .map((id) => REFERENCES[id])
    .filter((ref) => ref !== undefined);

  if (validRefs.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-[var(--border-color-light,#e5e5e5)]">
      <h2 className="section-label mb-6">
        <span className="section-label-slash">/</span> Referências
      </h2>
      <ol className="list-none space-y-4">
        {validRefs.map((ref, i) => {
          const link = ref.doi
            ? `https://doi.org/${ref.doi}`
            : ref.url ?? null;

          return (
            <li
              key={ref.id}
              id={`ref-${ref.id}`}
              className="text-body text-sm leading-relaxed"
            >
              <span className="font-mono text-xs opacity-50 mr-2">
                [{i + 1}]
              </span>
              {ref.authors} ({ref.year}).{" "}
              <em>{ref.title}</em>.{" "}
              {ref.publication}.
              {link && (
                <>
                  {" "}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-link text-sm"
                  >
                    {ref.doi ? `doi:${ref.doi}` : "Link"}
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
