// One place that decides the site's public address.
// Order: an explicit NEXT_PUBLIC_SITE_URL (set this when a custom domain is added), then the portfolio's
// permanent address for production builds, then the preview URL Vercel gives other builds, then localhost.
const PRODUCTION_URL = "https://jahnavi-sigatapu.vercel.app";

const explicit = process.env.NEXT_PUBLIC_SITE_URL;
const preview = process.env.VERCEL_URL;

export const siteUrl =
  explicit ??
  (process.env.VERCEL_ENV === "production" ? PRODUCTION_URL : preview ? `https://${preview}` : "http://localhost:4317");
