import type { Metadata } from "next";
import { SeccionHero } from "@/components/sections/SeccionHero";
import { SeccionServicios } from "@/components/sections/SeccionServicios";
import { SeccionSobreMi } from "@/components/sections/SeccionSobreMi";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://biticraft.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://biticraft.com/#organization",
      name: "BitiCraft",
      url: "https://biticraft.com/",
      logo: "https://biticraft.com/logo.webp",
      description:
        "BitiCraft crea papelería creativa y productos personalizados para eventos en Mar del Plata, Argentina.",
      email: "biticraft.contacto@gmail.com",
      sameAs: ["https://www.instagram.com/biticraft/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://biticraft.com/#website",
      url: "https://biticraft.com/",
      name: "BitiCraft",
      alternateName: "biticraft.com",
      inLanguage: "es-AR",
      publisher: {
        "@id": "https://biticraft.com/#organization",
      },
    },
  ],
};

export default function PaginaInicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SeccionHero />
      <SeccionSobreMi />
      <SeccionServicios />
    </>
  );
}
