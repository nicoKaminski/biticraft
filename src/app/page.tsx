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
      logo: "https://biticraft.com/logo.png",
      description:
        "Diseños a medida para eventos, bodas y celebraciones. Creamos cada detalle para que tu idea tenga una identidad única.",
      email: "biticraft.contacto@gmail.com",
      sameAs: ["https://www.instagram.com/biticraft/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://biticraft.com/#website",
      url: "https://biticraft.com/",
      name: "BitiCraft",
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
