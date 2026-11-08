// One place that decides the site's public address.
// Order: an explicit NEXT_PUBLIC_SITE_URL (e.g. a custom domain), then the production URL Vercel provides, then localhost.
const explicit = process.env.NEXT_PUBLIC_SITE_URL;
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = explicit ?? (vercel ? `https://${vercel}` : "http://localhost:4317");
