import style from "@/app/style/Header.module.css";

export const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className={`container ${style.headerContent}`}>
        <div>
          <a href="/">
            <img src="/logo.svg" alt="Логотип" />
          </a>
        </div>
        <div className={style.nav}>
          <nav>
            <ul className={style.listLink}>
              <li className={style.linkItem}>
                <a href="">Веб-студия</a>
              </li>
              <li className={style.linkItem}>
                <a href="">Портфолио</a>
              </li>
              <li className={style.linkItem}>
                <a href="">Услуги</a>
              </li>
              <li className={style.linkItem}>
                <a href="">Отзывы</a>
              </li>
              <li className={style.linkItem}>
                <a href="">Связаться</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
