"use client";

import Link from "next/link";

const navLinks: ReadonlyArray<{
  href: string;
  label: string;
  shortcut: string;
  external?: boolean;
}> = [
  { href: "/apis", label: "APIs", shortcut: "A" },
  { href: "/dados", label: "Dados", shortcut: "D" },
  { href: "/modelos", label: "Modelos", shortcut: "M" },
  { href: "/pesquisa", label: "Pesquisa", shortcut: "P" },
  { href: "/noticias", label: "Notícias", shortcut: "N" },
  { href: "https://github.com/wolram", label: "GitHub", shortcut: "G", external: true },
];

export function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[2] flex justify-between items-center gap-[3px] p-3 bg-transparent"
      style={{ maxWidth: 1728, margin: "0 auto" }}
      aria-label="Navegação principal"
    >
      <div className="flex items-center gap-[3px]">
        <Link href="/" className="nav-pill" aria-label="VotoData — Início">
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 14.0578L12.6296 11.302V0.942383L0 3.64711V14.0578Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        {navLinks.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              className="nav-pill hidden md:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="opacity-50">[{link.shortcut}]</span> {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="nav-pill hidden md:inline-flex"
            >
              <span className="opacity-50">[{link.shortcut}]</span> {link.label}
            </Link>
          ),
        )}
      </div>
      <Link href="/contato" className="nav-pill">
        Contato
      </Link>
    </nav>
  );
}
