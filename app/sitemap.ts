import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "https://podologiarubenbaquero.com",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: "https://podologiarubenbaquero.com/#servicios",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "https://podologiarubenbaquero.com/#sobre-mi",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
];

export default sitemap;
