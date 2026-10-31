import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biticraft.com"),
  title: {
    default: "BitiCraft | Papelería personalizada para eventos",
    template: "%s | BitiCraft",
  },
  description:
    "Papelería personalizada para eventos, con diseños a medida para hacer única cada celebración.",
  openGraph: {
    type: "website",
    url: "https://biticraft.com/",
    siteName: "BitiCraft",
    locale: "es_AR",
    title: "BitiCraft | Papelería personalizada para eventos",
    description:
      "Papelería personalizada para eventos, con diseños a medida para hacer única cada celebración.",
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
    title: "BitiCraft | Papelería personalizada para eventos",
    description:
      "Papelería personalizada para eventos, con diseños a medida para hacer única cada celebración.",
    images: ["/social-preview.webp"],
  },
};

export default function PlantillaPrincipal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.variable}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
