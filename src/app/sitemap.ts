import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mobile-mirror-web.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-24T12:00:00Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
