import style from "@/app/style/Design.module.css";

function Design() {
  return (
    <article className={style.container}>
      <div className={style.flex}>
        <div className={`${style.flex} ${style.column}`}>
          <p className={style.title}>Чертеж</p>
          <p className={style.description}>
            Максимально минималистичный дизайн с использованием некой частички
            будущего
          </p>
        </div>
        <div>
          <p className={style.next}>Далее разработка 3D</p>
        </div>
      </div>
      <div className={style.img_container}>
        <img src="/casePicture/chercheg.png" alt="" />
      </div>
    </article>
  );
}

export default Design;
