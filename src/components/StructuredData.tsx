import { company } from "@/data/company";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: company.name,
    description: "Empresa especializada em climatização, manutenção preventiva e corretiva, instalação, higienização e PMOC.",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "BR"
    },
    areaServed: company.regions,
    sameAs: [company.instagramUrl],
    image: company.logo,
    logo: company.logo,
    telephone: company.phone,
    email: company.email
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
