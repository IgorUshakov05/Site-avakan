import style from "@/app/style/CommingSoon.module.css";
export default function CommingSoon() {
  return (
    <article className={style.container}>
      <h1 className={style.title}>Когда ждать выхода?</h1>
      <p className={style.defaultText}>
        Дизайн платформы полностью готов, спроектированы его стилистические
        составляющие и навигационные. На данный момент происходит разработка
        Front & Back частей, они готовы на 75%
      </p>
      <div className={style.state}>
        <img src="/state/dev.svg" className={style.img} alt="" />
        <img src="/state/design.svg" className={style.img} alt="" />
      </div>
    </article>
  );
}
