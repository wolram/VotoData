import { PlusIcon } from "@/components/icons";

const PLUS_POSITIONS = [
  { top: "12%", left: "68%" },
  { top: "8%", left: "78%" },
  { top: "22%", left: "85%" },
  { top: "35%", left: "72%" },
  { top: "18%", left: "92%" },
  { top: "45%", left: "88%" },
  { top: "55%", left: "75%" },
  { top: "62%", left: "90%" },
  { top: "30%", left: "95%" },
  { top: "48%", left: "65%" },
  { top: "70%", left: "82%" },
  { top: "75%", left: "68%" },
  { top: "40%", left: "60%" },
  { top: "15%", left: "62%" },
  { top: "58%", left: "95%" },
  { top: "82%", left: "78%" },
] as const;

function StarburstDecoration() {
  const lines = 24;
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[var(--font-color)] opacity-[0.06]"
      aria-hidden="true"
    >
      {Array.from({ length: lines }, (_, i) => {
        const angle = (i * 360) / lines;
        const rad = (angle * Math.PI) / 180;
        const innerR = 10;
        const outerR = i % 2 === 0 ? 95 : 60;
        return (
          <line
            key={i}
            x1={100 + innerR * Math.cos(rad)}
            y1={100 + innerR * Math.sin(rad)}
            x2={100 + outerR * Math.cos(rad)}
            y2={100 + outerR * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth={i % 2 === 0 ? 1.5 : 0.75}
          />
        );
      })}
      <circle cx="100" cy="100" r="3" fill="currentColor" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="section-full relative overflow-visible"
      style={{ paddingTop: "var(--sticky-offset)", minHeight: 424 }}
    >
      {/* Decorative plus signs */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {PLUS_POSITIONS.map((pos, i) => (
          <PlusIcon
            key={i}
            className="absolute text-[var(--font-color)] opacity-15"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>

      {/* Hero heading */}
      <span className="text-hero col-[1/15] self-start" role="presentation">
        Inteligência
        <br className="block md:hidden" />
        {" Eleitoral "}
        em{" "}
        <span className="italic">Escala</span>
      </span>

      {/* SEO h1 */}
      <h1 className="sr-only">VotoData — Plataforma de Inteligência Eleitoral</h1>

      {/* Subtitle */}
      <p
        className="col-[1/15] self-start mt-6"
        style={{
          fontSize: "clamp(18px, 2.64vw, 38px)",
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
        }}
      >
        APIs, modelos preditivos e dados abertos para transformar a análise
        eleitoral no Brasil. Do voto à decisão.
      </p>

      {/* Starburst decoration */}
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] hidden md:block" aria-hidden="true">
        <StarburstDecoration />
      </div>
    </section>
  );
}
