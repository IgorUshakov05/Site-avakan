import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./style/globals.css";


// Загружаем все вариации шрифта
const UnboundedBlack = localFont({
  src: "./fonts/Unbounded/static/Unbounded-Black.ttf",
  variable: "--Unbounded-Black",
});
const UnboundedBold = localFont({
  src: "./fonts/Unbounded/static/Unbounded-Bold.ttf",
  variable: "--Unbounded-Bold",
});
const UnboundedExtraBold = localFont({
  src: "./fonts/Unbounded/static/Unbounded-ExtraBold.ttf",
  variable: "--Unbounded-ExtraBold",
});
const UnboundedExtraLight = localFont({
  src: "./fonts/Unbounded/static/Unbounded-ExtraLight.ttf",
  variable: "--Unbounded-ExtraLight",
});
const UnboundedLight = localFont({
  src: "./fonts/Unbounded/static/Unbounded-Light.ttf",
  variable: "--Unbounded-Light",
});
const UnboundedMedium = localFont({
  src: "./fonts/Unbounded/static/Unbounded-Medium.ttf",
  variable: "--Unbounded-Medium",
});
const UnboundedRegular = localFont({
  src: "./fonts/Unbounded/static/Unbounded-Regular.ttf",
  variable: "--Unbounded-Regular",
});
const UnboundedSemiBold = localFont({
  src: "./fonts/Unbounded/static/Unbounded-SemiBold.ttf",
  variable: "--Unbounded-SemiBold",
});

export const metadata: Metadata = {
  title: "HuntTeam — Веб-студия из Абакана",
  description:
    "HuntTeam — веб-студия из Абакана, специализирующаяся на разработке высококачественных веб-приложений, сайтов и digital-решений. Мы создаем уникальные решения под ключ с фокусом на frontend, backend и UX/UI дизайн.",
  openGraph: {
    title: "HuntTeam — Веб-студия из Абакана",
    description:
      "HuntTeam — веб-студия из Абакана, создающая качественные веб-приложения и digital-решения для бизнеса. Мы работаем с фронтендом, бэкендом и дизайном.",
    url: "https://huntteam.ru",
    siteName: "HuntTeam",
    images: [
      {
        url: "https://huntteam.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HuntTeam — Веб-студия из Абакана",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HuntTeam",
    url: "https://huntteam.ru",
    logo: "https://huntteam.ru/favicon-32x32.png",
    sameAs: ["https://t.me/HuntTeam_ru"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Абакан",
      addressRegion: "Республика Хакасия",
      postalCode: "655000",
      addressCountry: "RU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-987-558-44-81",
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: ["Russian", "English"],
    },
  };

  return (
    <html lang="ru" className={`${UnboundedBlack.variable} /* + остальное */`}>
      <head>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
