import style from "@/app/style/FontAndStyle.module.css";

function FontAndDesign() {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <div className={style.font}>
          <div className={style.picture}>
            <img src="/casePicture/12.svg" alt="" />
          </div>
          <div className={style.info}>
            <p className={style.for}>FontFamily для цифр</p>
            <p className={style.Ubuntu}>Ubuntu</p>
            <ul className={style.list}>
              <li style={{ fontWeight: "700" }}>Bold</li>
              <li style={{ fontWeight: "600" }}>Regular</li>
              <li style={{ fontWeight: "400" }}>Light</li>
            </ul>
          </div>
        </div>
        <div className={`${style.font} ${style.reverse}`}>
          <div className={`${style.picture} ${style.leftPic}`}>
            <img src="/casePicture/Aa.svg" alt="" />
          </div>
          <div className={`${style.info} ${style.leftToRight}`}>
            <p className={style.for}>FontFamily для цифр</p>
            <p className={style.Ubuntu}>Raleway</p>
            <ul className={`${style.list} ${style.listRaleway}`}>
              <li style={{ fontWeight: "700" }}>Bold</li>
              <li style={{ fontWeight: "600" }}>Regular</li>
              <li style={{ fontWeight: "400" }}>Light</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FontAndDesign;
