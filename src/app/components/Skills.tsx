import style from "@/app/style/Skills.module.css";

export default function Skills() {
  return (
    <article className={style.container}>
      <div className={style.whatsProductContainer}>
        <h1 className={style.whatsProduct}>
          <p className={style.skills}>навыки</p> в карточке вакансий
        </h1>
      </div>
      <img src="/casePicture/projector.svg" alt="" />
    </article>
  );
}
