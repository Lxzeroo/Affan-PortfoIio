import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://affan-imthiyaz.netlify.app",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}