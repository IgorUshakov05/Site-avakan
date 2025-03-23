import style from "@/app/style/TroubleWebHUnt.module.css";
export default function TroubleWebHUnt() {
  return (
    <article className={style.container}>
      <div className={style.topElem}>
        <div className={style.pic}>
          <img src="/casePicture/power/postil.svg" alt="" />
        </div>
        <h1 className={style.problem}>Проблемы</h1>
      </div>
      <div className={`${style.w50} ${style.mt} ${style.flex}`}>
        <div className={`${style.flex} ${style.flex} ${style.w50}`}>
          <p className={style.w50}>
            На многих биржах для повышения рейтинга необходимо внести деньги,
            хотя работу чаще всего ищут те, кто испытывает финансовые трудности.{" "}
          </p>
          <p className={style.w50}>
            Есть ограниченное количество попыток отправить заявку на заказ, или
            необходимо получить отзыв, что особенно сложно новичкам.{" "}
          </p>
        </div>
        <p className={style.w50}>
          Заказы забирают те, кто давно на площадке, и приходится работать
          практически за спасибо. Даже если вам удается взять заказ за небольшие
          деньги, биржи съедают почти половину оплаты.
        </p>
      </div>
    </article>
  );
}
