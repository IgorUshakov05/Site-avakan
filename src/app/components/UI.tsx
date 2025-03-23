import style from "@/app/style/UI.module.css";
export default function UI() {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <h2 className={style.UI}>
          <p style={{ opacity: "0" }}>I</p>U <p className={style.I}>I</p>
          <div className={style.colorsStyle}>
            <p className={style.pink}>6100FF</p>
            <p className={style.green}>01E325</p>
            <p className={style.black}>000000</p>
            <p className={style.white}>FFFFFF</p>
            <p className={style.red}>FF0000
              
            </p>
          </div>
        </h2>
        <p className={style.colors}>Colors</p>
      </div>
    </article>
  );
}
