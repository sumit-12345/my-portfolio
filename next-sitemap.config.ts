import type { IConfig } from "next-sitemap";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.vercel.app";

const config: IConfig = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.8,
};

export default config;
