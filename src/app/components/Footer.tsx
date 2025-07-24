import style from "@/app/style/Footer.module.css";
import Link from "next/link";
import TextChange from "./TextChange";

const Footer = () => {
  return (
    <footer className={`${style.content} ${style.flex}`}>
      <div className={`${style.flex} ${style.linksAndImg}`}>
        <div className={`${style.flex} ${style.img}`}>
          <img src="/company/logoInBox.png" alt="" />
        </div>
        <div className={style.link}>
          <nav className={style.flex}>
            <ul className={`${style.flex} ${style.linkNav}`}>
              <li>
                <Link href={"/"}>Веб-студия</Link>
              </li>
              <li>
                <Link href={"/"}>Портфолио</Link>
              </li>
              <li>
                <Link href={"/#case"}>Услуги</Link>
              </li>
              <li>
                <Link href={"/#reviews"}>Отзывы</Link>
              </li>
              <li>
                <Link href={"/#contact"}>Связаться</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${style.flex} ${style.between}`}>
        <p style={{ textAlign: "left" }}>
          <TextChange />
        </p>
        <p style={{ textAlign: "center" }}>
          HuntTeam {new Date().getFullYear()}
        </p>
        <Link
          href="mailto:hello@huntteam.ru"
          target="_blank"
          style={{ textAlign: "right", cursor: "pointer" }}
        >
          hello@huntteam.ru
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
