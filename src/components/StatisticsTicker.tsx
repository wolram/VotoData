"use client";

const STATISTICS = [
  { label: "Registros processados:", value: "500M+" },
  { label: "Eleições cobertas:", value: "1998–2024" },
  { label: "Seções eleitorais:", value: "470.000+" },
  { label: "Municípios:", value: "5.570" },
  { label: "Modelos em produção:", value: "12" },
] as const;

export function StatisticsTicker() {
  const repeatedItems = [...STATISTICS, ...STATISTICS, ...STATISTICS];

  return (
    <section
      className="section-full section-border"
      style={{ gap: "4px" }}
      aria-label="Estatísticas da plataforma"
    >
      <div className="section-label col-span-full">
        <span className="section-label-slash">/</span>
        Números
      </div>
      <div className="col-span-full overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-ticker">
          {repeatedItems.map((item, index) => (
            <span
              key={index}
              className="text-mono-sm inline-flex items-center gap-2 px-6 whitespace-nowrap"
            >
              {item.label}{" "}
              <strong className="font-sans font-light">{item.value}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
