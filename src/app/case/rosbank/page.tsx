import Landing from "@/app/components/landing";
import { Header } from "@/app/components/Header";
import Stage from "@/app/components/Stage";
import style from "@/app/style/CasePage.module.css";
import Design from "@/app/components/Design";
import Conversion from "@/app/components/Conversion";
import TryTerminal from "@/app/components/TryTerminal";
import Footer from "@/app/components/Footer";
import CaseLink from "@/app/components/CaseLink";
export const metadata = {
  title: "Кейс: Росбанк — UX терминала самообслуживания | HuntTeam",
  description:
    "Как мы исследовали поведение клиентов Росбанка и разработали новый минималистичный интерфейс терминала, который помогает быстрее выбрать нужный раздел.",
  keywords: [
    "Росбанк",
    "UX-дизайн",
    "терминал самообслуживания",
    "кейсы HuntTeam",
    "исследование пользователей",
    "интерфейс банка",
    "редизайн терминала",
  ],
  openGraph: {
    title: "Кейс: Росбанк — UX терминала самообслуживания | HuntTeam",
    description:
      "Дизайнер HuntTeam лично работал с клиентами банка, чтобы переосмыслить интерфейс терминала. Результат — удобство, минимализм и понятность.",
    url: "https://huntteam.ru/case/rosbank",
    siteName: "HuntTeam",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "https://huntteam.ru/images/cases/rosbank-cover.jpg", // замените на актуальный путь
        width: 1200,
        height: 630,
        alt: "Интерфейс терминала Росбанка от HuntTeam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейс: UX терминала Росбанка от HuntTeam",
    description:
      "Как мы переосмыслили навигацию и визуал терминала банка. Уникальный подход на основе реального опыта.",
    images: ["https://huntteam.ru/images/cases/rosbank-cover.jpg"],
  },
};

export default function CasePage() {
  return (
    <>
      <Header />
      <div className={style.content}>
        <Landing />
        <article className={style.work}>
          <h2 className={style.text}>
            Для того чтобы максимально прочувствовать боль клиента и найти
            оптимальное решение интерфейса, дизайнер проработал менеджером в
            банке 3 недели - помогал клиентам выбирать правильный раздел
            обслуживания
          </h2>
        </article>
        <article className={style.trouble}>
          <div className={style.block}>
            <h2 className={style.troubleTitle}>Выявленные проблемы</h2>
          </div>
          <ul className={style.listTrouble}>
            <div className={style.flex50}>
              <div className={style.flex50}>
                <div className={style.top_bottom}>
                  <ol>
                    <p className={style.textTrouble}>
                      Не было возможности просмотра цен на валюты, это нужно
                      было делать на экране в другом конце зала, который
                      приходилось обновлять вручную каждые 30 минут
                    </p>
                  </ol>
                  <ol>
                    <p className={style.textTrouble}>
                      В 90% случаях приходилось помогать людям выбрать категорию
                    </p>
                  </ol>
                </div>
                <div className={`${style.img_container} ${style.center}`}>
                  <img src="/casePicture/trouble.png" alt="" />
                </div>
              </div>
              <div className={style.top_bottom}>
                <ol>
                  <p className={style.textTrouble}>
                    Нет описание и примеров функций каждого раздела, часто
                    подростки идут оплачивать обучение через раздел “Физ. лица”,
                    а необходимо через раздел “Деньги”
                  </p>
                </ol>
                <ol>
                  <p className={style.textTrouble}>
                    Когда люди приходят, они видят много текста перед собой и
                    фоновую иллюстрацию, которая забирает лишнее внимание
                  </p>
                </ol>
              </div>
            </div>
          </ul>
        </article>
        <Stage />
        <Design />
        <TryTerminal />
        <Conversion />
      </div>
      <CaseLink />
      <Footer />
    </>
  );
}
