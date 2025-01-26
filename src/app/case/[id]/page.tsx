import { Header } from "@/app/components/Header";
import Stage from "@/app/components/Stage";
import style from "@/app/style/CasePage.module.css";
export default function CasePage() {
  return (
    <>
      <Header />
      <div className={style.content}>
        <article className={style.land}>
          <h1 className={style.titleCase}>Терминал выдачи талонов</h1>
          <div className={style.svg}>{svg_rosbank()}</div>
        </article>
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
      </div>
    </>
  );
}

function svg_rosbank() {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="35" width="51" height="4" fill="white" />
      <rect x="0.5" y="0.5" width="74" height="74" stroke="white" />
    </svg>
  );
}
