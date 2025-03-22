import style from "@/app/style/LandingWebHunt.module.css";
export default function LandingWebHunt() {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <div className={style.text}>
          <h1 className={style.web}>Web</h1>
          <h1 className={style.hunt}>Hunt</h1>
        </div>
        <div className={style.LogoContainer}>
            <img src='/Logo.png' />
        </div>
      </div>
    </article>
  );
}

