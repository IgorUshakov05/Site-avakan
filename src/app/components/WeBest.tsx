import style from "@/app/style/WeBest.module.css";
import { shortItems, longItems } from "../data/WebHunt";
export default function WeBest() {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <div className={style.whatsProductContainer}>
          <h1 className={style.whatsProduct}>Почему мы лучше</h1>
        </div>
        <div className={style.two}>
          <div className={style.flex}>
            {shortItems.map((item, index) => (
              <article className={style.shortCard} key={index}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
                <p>{item.description} </p>
              </article>
            ))}
          </div>
          <div className={`${style.w50} ${style.twoFlex}`}>
            {longItems.map((item, index) => (
              <article
                className={`${style.shortCard} ${style.w100}`}
                key={index}
              >
                <img src={item.img} alt="" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description} </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
