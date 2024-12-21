import style from "@/app/style/WhoIam.module.css";

export const WhoIam = () => {
  return (
    <article className={style.content}>
      <div className={`container ${style.twoBlocks}`}>
        <div className={style.abakan}>
          <img src="/abakan.png" alt="Фото абакана" />
        </div>
        <div className={style.other}>
          <h2 className={style.title}>КТО МЫ</h2>
          <div className={style.infoAbout}>
            <div className={style.empty}>awd</div>
            <div className={style.aboutText}>
              <div className={style.description}>
                <h3 className={style.descriptionItem}>
                  Мы — молодая веб-студия из Абакана, и наша цель — повысить
                  уровень качества и эстетики сайтов для бизнеса Хакасии
                </h3>
              </div>
              <div className={style.description}>
                <h3 className={style.workWithOut}>
                  Работаем с вами<span>,</span> где бы вы ни находились
                </h3>
                <div className={style.twoColumn}>
                  <div>
                    <span className={style.defaultText}>
                      Даже если ваш бизнес или вы сами не находитесь в Абакане —
                      это совершенно не проблема. Наша студия успешно работает с
                      клиентами дистанционно, предоставляя тот же уровень
                      внимания и качества, как и при личных встречах. Напишите
                      нам, и мы обсудим проект в удобное для вас время
                    </span>
                  </div>
                  <div>
                    <span className={style.defaultText}>
                      Поскольку мы недавно вышли на рынок, у нас действует
                      уникальное предложение – <span>сниженные цены</span> на весь спектр
                      услуг! Сейчас у вас есть отличная возможность заказать
                      разработку сайтов, веб-приложений и цифровых решений с
                      максимально выгодными условиями.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
