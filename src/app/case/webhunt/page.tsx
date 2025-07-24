import { Header } from "@/app/components/Header";
import style from "@/app/style/WebHunt.module.css";
import Footer from "@/app/components/Footer";
import LandingWebHunt from "@/app/components/LandingWebHunt";
import { useEffect } from "react";
import WebHuntFor from "@/app/components/WebHuntFor";
import TroubleWebHUnt from "@/app/components/Trouble";
import Issue from "@/app/components/Issue";
import FontAndDesign from "@/app/components/FontAndStyle";
import UI from "@/app/components/UI";
import Skills from "@/app/components/Skills";
import WeBest from "@/app/components/WeBest";
import CommingSoon from "@/app/components/CommingSoon";
import Social from "@/app/components/Social";
import WhereWatch from "@/app/components/WhereWatch";
export const metadata = {
  title: "Кейс: WebHunt — Платформа для веб-специалистов | HuntTeam",
  description:
    "Как мы спроектировали WebHunt — платформу для поиска работы и проектов без комиссий, ограничений и платного рейтинга. Удобный интерфейс и честные условия.",
  keywords: [
    "WebHunt",
    "поиск работы разработчика",
    "платформа для фрилансеров",
    "поиск заказов без комиссии",
    "UX кейс",
    "HuntTeam",
    "веб-разработка",
    "разработка платформы",
  ],
  openGraph: {
    title: "Кейс: WebHunt — Платформа для веб-специалистов | HuntTeam",
    description:
      "Мы создали WebHunt — удобную и честную платформу для поиска заказов и вакансий в сфере веб-разработки. Читайте о решении проблем типичных бирж.",
    url: "https://huntteam.ru/case/webhunt",
    siteName: "HuntTeam",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "https://huntteam.ru/images/cases/webhunt-cover.jpg", // замените на актуальный путь
        width: 1200,
        height: 630,
        alt: "Интерфейс платформы WebHunt от HuntTeam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebHunt — новая платформа без комиссий для разработчиков",
    description:
      "Платформа WebHunt помогает специалистам и компаниям находить друг друга без посредников. Дизайн, UX и честный подход — кейс от HuntTeam.",
    images: ["https://huntteam.ru/images/cases/webhunt-cover.jpg"],
  },
};

import Team from "@/app/components/Team";
export default function CasePage() {
  return (
    <>
      <Header theme="white" />
      <div className={style.content}>
        <LandingWebHunt />
        <WebHuntFor />
        <TroubleWebHUnt />
        <Issue />
        <FontAndDesign />
        <UI />
        <Skills />
        <WeBest />
        {/* <Team /> */}
        <CommingSoon />
        <Social />
        <WhereWatch />
        <div
          style={{ width: "100%", height: "100px", backgroundColor: "white" }}
        />
      </div>
      <Footer />
    </>
  );
}
