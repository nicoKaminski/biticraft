import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function GaleriaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
