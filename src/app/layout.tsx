import type { Metadata, Viewport } from "next";
import { Caveat, Figtree, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { CursorDot } from "@/components/chrome/CursorDot";
import { Footer } from "@/components/chrome/Footer";
import { PageTransition } from "@/components/chrome/PageTransition";
import { Preloader } from "@/components/chrome/Preloader";
import { TopBar } from "@/components/chrome/TopBar";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | The Curious Engineer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} portfolio`,
  authors: [{ name: site.name, url: site.linkedin }],
  keywords: [
    "Jahnavi Sigatapu",
    "React Native developer",
    "full stack developer",
    "AI engineer",
    "LLM applications",
    "SmartHire",
    "Expo",
    "Node.js",
  ],
  openGraph: {
    type: "website",
    siteName: `${site.name} portfolio`,
    title: `${site.name} | The Curious Engineer`,
    description: site.description,
    images: [{ url: "/images/hero-sketch.jpg", width: 1024, height: 768, alt: "A pencil sketch of an engineer thinking at her desk." }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | The Curious Engineer`,
    description: site.description,
    images: ["/images/hero-sketch.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${figtree.variable} ${plexMono.variable} ${caveat.variable} antialiased`}
    >
      <body className="font-sans">
        <Preloader />
        <CursorDot />
        <a href="#main" className="skip">
          Skip to content
        </a>
        <TopBar />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
