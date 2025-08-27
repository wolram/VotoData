import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://votodata.com.br";

  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/apis", priority: 0.9 },
    { path: "/dados", priority: 0.9 },
    { path: "/modelos", priority: 0.9 },
    { path: "/pesquisa", priority: 0.8 },
    { path: "/pesquisa/prediction-markets-brazil", priority: 0.7 },
    { path: "/casos", priority: 0.7 },
    { path: "/docs", priority: 0.7 },
    { path: "/glossario", priority: 0.6 },
    { path: "/noticias", priority: 0.6 },
    { path: "/contato", priority: 0.5 },
    { path: "/blog/prediction-markets-eleicoes-2026", priority: 0.7 },
    { path: "/blog/mirofish-predicao-eleitoral", priority: 0.7 },
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.priority >= 0.9 ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
