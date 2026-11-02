import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://biticraft.com/" },
    { url: "https://biticraft.com/servicios" },
    { url: "https://biticraft.com/contacto" },
  ];
}
