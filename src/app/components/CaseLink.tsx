import style from "@/app/style/CaseLink.module.css";

const CaseLink = () => {
  return (
    <article className={style.content}>
      <div className={style.rigth}>
        <h2 className={style.title}>Где смотреть?</h2>
      </div>
      <div className={`${style.flex} ${style.mt50}`}>
        <div className={`${style.flex} ${style.w50}`}>
          <div className={`${style.flex} ${style.w50}`}>
            <p className={style.text}>
              Если вы хотите узнать больше о процессе создания дизайна и увидеть
              все этапы работы над проектом, переходите по ссылкам в кружочках.{" "}
            </p>
          </div>
          <div className={`${style.flex} ${style.w50} ${style.linksBox}`}>
            <div className={style.box}></div>
          </div>
        </div>
        <div className={`${style.flex} ${style.w50} ${style.textDefault}`}>
          <p>
            Детальное описание этапов разработки дизайна: от идеи до финальной
            версии.
          </p>
          <p>
            Исходные материалы и код: чтобы оценить техническую часть и уровень
            исполнения.
          </p>
          <p>
            Дополнительные инсайты: больше подробностей, которые помогут понять,
            как мы работаем и принимаем решения.
          </p>
        </div>
      </div>
    </article>
  );
};

export default CaseLink;
