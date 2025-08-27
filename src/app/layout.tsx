import type { Metadata } from "next";
import localFont from "next/font/local";
import { OrganizationJsonLd } from "./jsonld";
import "./globals.css";

const sohneVar = localFont({
  src: [
    {
      path: "../../public/fonts/Sohne.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sohne-BuchKursiv.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-sohne",
  display: "block",
});

const sohneMono = localFont({
  src: [
    {
      path: "../../public/fonts/SohneMono-Buch.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneMono-Extraleicht.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-sohne-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://votodata.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VotoData — Inteligência Eleitoral em Escala",
    template: "%s — VotoData",
  },
  description:
    "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil. Dados do TSE processados para ciência política, partidos e consultorias.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "VotoData",
    title: "VotoData — Inteligência Eleitoral em Escala",
    description:
      "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil. Dados do TSE processados para ciência política, partidos e consultorias.",
    images: [{ url: "/seo/dev_social.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VotoData — Inteligência Eleitoral em Escala",
    description:
      "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil. Dados do TSE processados para ciência política, partidos e consultorias.",
    images: ["/seo/dev_social.jpeg"],
  },
  icons: {
    icon: "/seo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sohneVar.variable} ${sohneMono.variable}`}
    >
      <body>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
