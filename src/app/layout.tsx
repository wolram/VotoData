import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "VotoData — Inteligência Eleitoral em Escala",
  description:
    "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil. Dados do TSE processados para ciência política, partidos e consultorias.",
  openGraph: {
    title: "VotoData — Inteligência Eleitoral em Escala",
    description:
      "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil. Dados do TSE processados para ciência política, partidos e consultorias.",
    images: ["/seo/dev_social.jpeg"],
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
      lang="en"
      className={`${sohneVar.variable} ${sohneMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
