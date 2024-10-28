import type { Metadata } from "next";
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
  title: "Site-Abakan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${UnboundedBlack.variable} ${UnboundedBold.variable} ${UnboundedExtraBold.variable} ${UnboundedExtraLight.variable} ${UnboundedLight.variable} ${UnboundedMedium.variable} ${UnboundedRegular.variable} ${UnboundedSemiBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

