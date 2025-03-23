import style from "@/app/style/LandingWebHunt.module.css";
export default function LandingWebHunt() {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <div className={style.text}>
          <h1 className={style.web}>Web</h1>
          <h1 className={style.hunt}>Hunt</h1>
        </div>
        <div className={style.containerStrong}>
          <img src="/casePicture/power/company.png" className={style.company} alt="" />
          <img src="/casePicture/power/fastwork.png" className={style.fastwork} alt="" />
          <img src="/casePicture/power/teams.png" className={style.teams} alt="" />
          <img src="/casePicture/power/vacancy.png" className={style.vacancy} alt="" />
        </div>
        <div className={style.LogoContainer}>
          <img src="/Logo.png" alt="Логотип WebHunt" />
          <img src="/casePicture/bottom.png" alt="Пъедестал" />
        </div>
      </div>
    </article>
  );
}
