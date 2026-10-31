import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de papelería personalizada",
  description:
    "Conocé los servicios de BitiCraft: productos personalizados, papelería digital y papelería funcional para eventos y celebraciones.",
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
