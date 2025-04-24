import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Základní údaje
  title: "Pivovar Moucha – craftové ležáky",
  description:
    "Vaříme tradiční ležáky, svrchně kvašená piva a unikátní speciály v srdci Prahy. Sudy plníme na počkání a provozujeme pivovarskou prodejnu.",
  keywords: [
    "pivovar",
    "ležáky",
    "svrchně kvašená piva",
    "speciály",
    "Praha",
    "pivovarská prodejna",
    "sudy na počkání",
    "craft beer",
    "tankové pivo",
    "pivovar Moucha",
    "Braník",
    "Bráník",
    "chmel",
    "sud ležák 30l",
    "Zelené pivo",
    "neipa",
    "kyseláč",
    "apa",
    "ipa",
  ],
  applicationName: "Pivovar Moucha",
  metadataBase: new URL("https://vaspivovar.cz"),
  authors: [{ name: "Pivovar Praha", url: "https://vaspivovar.cz" }],
  publisher: "Pivovar Praha s.r.o.",

  // Ikony a manifest pro PWA
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],

  // Alternativní verze a canonical
  alternates: {
    canonical: "/",
    languages: {
      cs: "/",
      en: "/en",
    },
  },

  // Robots instrukce
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Ověření vlastnictví pro Google/Yandex
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YANDEX_VERIFICATION_CODE",
  },

  // Open Graph
  openGraph: {
    title: "Pivovar Praha – ležáky, svrchně kvašená piva & speciály",
    description:
      "Sudy plníme na počkání, nabízíme široký výběr piv přímo z tanku v naší prodejně v Praze.",
    url: "https://vaspivovar.cz",
    siteName: "Pivovar Praha",
    images: [
      {
        url: "https://vaspivovar.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sklenice piva před pivovarem v Praze",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Pivovar Praha – ležáky, svrchně kvašená piva & speciály",
    description:
      "Přijďte pro sudy na počkání a ochutnejte naše speciály v pivovarské prodejně v Praze.",
    creator: "@vaspivovar",
    images: ["https://vaspivovar.cz/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
