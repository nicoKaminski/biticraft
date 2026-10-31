import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contactá a BitiCraft | Contanos tu idea",
  },
  description:
    "¿Estás preparando una celebración? Contanos qué tenés en mente y diseñemos juntos los detalles personalizados para tu evento.",
  openGraph: {
    type: "website",
    url: "https://biticraft.com/contacto",
    siteName: "BitiCraft",
    locale: "es_AR",
    title: "Contactá a BitiCraft | Contanos tu idea",
    description:
      "¿Estás preparando una celebración? Contanos qué tenés en mente y diseñemos juntos los detalles personalizados para tu evento.",
    images: [
      {
        url: "/social-preview.webp",
        width: 2172,
        height: 724,
        alt: "Identidad visual de BitiCraft junto a una vista del sitio web y papelería para eventos.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactá a BitiCraft | Contanos tu idea",
    description:
      "¿Estás preparando una celebración? Contanos qué tenés en mente y diseñemos juntos los detalles personalizados para tu evento.",
    images: ["/social-preview.webp"],
  },
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
