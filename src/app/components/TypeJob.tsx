import style from "@/app/style/TypeJob.module.css";
import {ItemWork} from "@/app/types/serviceItemList";
import WorkComponent from "./workComponent";
export default function TypeJob(obj: ItemWork) {
  return (
    <article className={style.serviceArticle}>
      {/* Блок с услугой: Разработка сайта */}
      <div className={style.blocks}>
        <div className={style.iconContainer}>
          {/* Здесь можно разместить иконку или изображение */}
        </div>
        <h3 className={style.title}>{obj.title}</h3>
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
            src={obj.video}
          >
            Ваш браузер не поддерживает видео.
          </video>
        </div>
        <div className={`${style.w50} ${style.mt50}`}>
          <h4 className={style.priceTitle}>Стоимость и Срок</h4>
          <div className={`${style.priceDetails} ${style.blocks}`}>
            <span className={style.price}>{obj.price}</span>
            <span className={style.duration}>{obj.time}</span>
          </div>
          {obj.listWork.map((item, index) => ( 
             <WorkComponent sevice={item.sevice} title={item.title} />
          ))} 
        </div>
      </div>
    </article>
  );
}
