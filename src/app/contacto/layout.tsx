import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contactá a BitiCraft | Contanos tu idea",
  },
  description:
    "Consultá a BitiCraft sobre papelería creativa y productos personalizados para eventos en Mar del Plata. Contanos tu idea desde el formulario.",
  openGraph: {
    type: "website",
    url: "https://biticraft.com/contacto",
    siteName: "BitiCraft",
    locale: "es_AR",
    title: "Contactá a BitiCraft | Contanos tu idea",
    description:
      "Consultá a BitiCraft sobre papelería creativa y productos personalizados para eventos en Mar del Plata. Contanos tu idea desde el formulario.",
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
      "Consultá a BitiCraft sobre papelería creativa y productos personalizados para eventos en Mar del Plata. Contanos tu idea desde el formulario.",
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
