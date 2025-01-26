import { Header } from "@/app/components/Header";
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
