import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios personalizados para eventos",
  description:
    "Toppers, souvenirs, cartelería, papelería digital y mucho más, con diseños a medida para acompañar cada celebración.",
  openGraph: {
    type: "website",
    url: "https://biticraft.com/servicios",
    siteName: "BitiCraft",
    locale: "es_AR",
    title: "Servicios personalizados para eventos | BitiCraft",
    description:
      "Toppers, souvenirs, cartelería, papelería digital y mucho más, con diseños a medida para acompañar cada celebración.",
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
    title: "Servicios personalizados para eventos | BitiCraft",
    description:
      "Toppers, souvenirs, cartelería, papelería digital y mucho más, con diseños a medida para acompañar cada celebración.",
    images: ["/social-preview.webp"],
  },
  alternates: {
    canonical: "/servicios",
  },
};

export default function ServiciosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
