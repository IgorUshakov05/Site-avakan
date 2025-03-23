import style from "@/app/style/Issue.module.css";
export default function Issue() {
  return (
    <article className={style.container}>
      <div className={style.whatsProductContainer}>
        <div className={style.pics}>
          <img
            className={style.js}
            src="/casePicture/power/JavaScript.svg"
            alt="Пример приемущества"
          />
          <img
            className={style.ru}
            src="/casePicture/power/Rub.svg"
            alt="Пример приемущества"
          />
          <img
            className={style.in}
            src="/casePicture/power/Infinity.svg"
            alt="Пример приемущества"
          />
        </div>
        <h1 className={style.whatsProduct}>Как мы решили эти проблемы</h1>
      </div>
      <div className={`${style.w50} ${style.mt50}`}>
        <div className={style.flex}>
          <p className={`${style.w50} ${style.text}`}>
            Мы не берем комиссии за заказ, потому что на нашей площадке,
            обговаривание деталей оплаты просиходит лично как угодно обеим
            сторонам, мы не запрещаем переходить в другие соц сети
          </p>
          <p className={`${style.w50} ${style.text}`}>
            Комиссий некаких нет, поскольку у нас все автоматизированно, поэтому
            специалисту платить не надо, но если работодатель хочет добавить
            компанию, тогда нужно платить подписку, посольку документы
            проверяются человеком на факт подделки, но работодатель может
            публиквать вакансии без компании
          </p>
        </div>
        <div className={`${style.flex} ${style.mt30}`}>
          <div className={style.w50}>
            <p className={style.text}>
              Мы отдаем приоритет навыкам нежели количеству лет в професси, хотя
              безусловно это важных критерий, но приоритет больше навыкам,
              потому что человек может находясь в проффесии перестать
              развиваться, топчась на одном месте, а навыки показывают чему и за
              какой период научился специалист{" "}
            </p>
            <p className={`${style.text} ${style.mt30}`}>
              Нет нужды платить за рейтинг, мы понимаем что с людей которые ищут
              работу, несовсем совестно тянуть деньги на рейтинг
            </p>
          </div>
          <p className={`${style.w50} ${style.text}`}>
            Нет ограничений на количество отправлений заявок на заказы
          </p>
        </div>
      </div>
    </article>
  );
}
