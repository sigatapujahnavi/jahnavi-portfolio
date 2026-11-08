import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl as base } from "@/lib/site-url";

const pages = ["", "/work", "/thinking", "/journal", "/journey", "/toolkit", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      priority: path === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: now,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
