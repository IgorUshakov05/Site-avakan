import style from "@/app/style/WebHuntFor.module.css";
export default function WebHuntFor() {
  return (
    <article className={style.container}>
      <div className={style.whatsProductContainer}>
        <h1 className={style.whatsProduct}>Что это за продукт</h1>
      </div>
      <div className={`${style.twoBlocks} ${style.top}`}>
        <div className={`${style.twoBlocks} ${style.w50}`}>
          <div className={`${style.w50} ${style.flexColumn}`}>
            <div>
              <p className={style.defaultText}>
                Платформа для веб-специалистов, предназначенная для поиска как
                разовых заказов, так и постоянной работы.{" "}
              </p>
            </div>
            <div>
              <p  className={style.defaultText}>
                На нашей платформе нет комиссии за заказы. Специалисты и
                работодатели сами обговаривают детали оплаты вне WH.
              </p>
            </div>
          </div>
          <div className={style.w50}>
            <p className={style.defaultText}>
              WebHunt предоставляет работодателям возможность найти
              узкоспециализированных разработчиков и специалистов по поддержке
              сайтов. Платформа подходит для всех сфер бизнеса, так как в наше
              время иметь сайт – это необходимость.
            </p>
          </div>
        </div>
        <div className={`${style.twoBlocks} ${style.w50}`}>
          <img src="/casePicture/power/team.svg" alt=""  style={{width:"100%"}}/>
        </div>
      </div>
    </article>
  );
}
