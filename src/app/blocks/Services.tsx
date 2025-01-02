import style from "@/app/style/Services.module.css";
import WorkComponent from "@/app/components/workComponent";
import serviceItem from "@/app/data/Service";
function Services() {
  return (
    <div className={style.content}>
      <h2 className={style.sectionTitle}>Что же мы умеем</h2>
      <article className={style.serviceArticle}>
        {/* Блок с услугой: Разработка сайта */}
        <div className={style.blocks}>
          <div className={style.iconContainer}>
            {/* Здесь можно разместить иконку или изображение */}
          </div>
          <h3 className={style.title}>Разработка сайта</h3>
        </div>

        {/* Блок с деталями услуги */}
        <div className={style.blocks}>
          <div className={style.w50}>
            {/* Видео с объяснением услуги */}
            <video
              className={style.serviceVideo}
              muted
              autoPlay
              loop
              playsInline
              src="/video/www.webm"
            >
              Ваш браузер не поддерживает видео.
            </video>
          </div>
          <div className={`${style.w50} ${style.mt50}`}>
            <h4 className={style.priceTitle}>Стоимость и Срок</h4>
            <div className={`${style.priceDetails} ${style.blocks}`}>
              <span className={style.price}>36 000</span>
              <span className={style.duration}>неделя</span>
            </div>
            {serviceItem.map((item, index) => (
              <WorkComponent sevice={item.sevice} title={item.title} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Services;
