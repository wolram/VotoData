export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VotoData",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://votodata.com.br",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://votodata.com.br"}/seo/dev_social.jpeg`,
    description:
      "Plataforma de APIs, modelos preditivos e dados eleitorais do Brasil.",
    sameAs: ["https://twitter.com/VotoData"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
