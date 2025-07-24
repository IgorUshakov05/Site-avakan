import style from "@/app/style/WhereWatch.module.css";

export default function WhereWatch() {
  return (
    <article className={style.content}>
      <div className={style.container}>
        <img src="/social/big/be.svg" alt="" className={style.imgAbs} />
        <img src="/social/big/dp.svg" alt="" className={style.imgAbs} />
        <img src="/social/big/vc.svg" alt="" className={style.imgAbs} />
        <div className={style.topElem}>
          <h1 className={style.h1}>Где смотреть?</h1>
        </div>
        <div className={style.info}>
          <div className={style.card}>
            <h2 className={style.desctiption}>
              Хотите узнать, как мы создавали WebHunt? Переходите по ссылкам,
              чтобы погрузиться в процесс разработки проекта
            </h2>
            <p className={style.text}>
              Behance & Dprofile – визуальная часть кейса: финальный дизайн,
              UI/UX-решения, работа с анимацией и внимание к деталям.
            </p>
            <p className={style.text}>
              VC – детальный разбор кейса WebHunt: идея, этапы работы, проблемы,
              с которыми столкнулись, и как мы их решили. Здесь раскрыт весь
              процесс создания – от первых концепций до готового продукта.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
