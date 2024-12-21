import style from "@/app/style/Landing.module.css";

export const Landing = () => {
  return (
    <article className={style.landing}>
      <div className={`container`}>
        <div className={style.textBlock}>
          <h1 className={style.titleSite}>
            <span>SiteAbakan</span>
          </h1>
          <div className={style.description}>
            <div></div>
            <div className={style.video}>
            <video src="/video/Ленд.webm" autoPlay muted loop playsInline></video>

            </div>
            <h2 className={style.descriptionText}>
              <span>цифровое</span> будущее для вашего бизнеса
            </h2>
          </div>
        </div>
      </div>
    </article>
  );
};
