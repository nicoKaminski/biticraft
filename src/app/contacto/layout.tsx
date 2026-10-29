import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a BitiCraft y contanos tu idea para crear papelería personalizada para tu evento.",
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
