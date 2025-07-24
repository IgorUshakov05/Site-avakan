import style from "@/app/style/FeedBack.module.css";
const LittleArrow = () => {
  return (
    <svg
      style={{ marginLeft: "5px" }}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9.35937L9 1.35938M9 1.35938V9.35937M9 1.35938H1"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.54839"
      />
    </svg>
  );
};
const Arrow = ({ color = "white" }: { color?: string }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 33.8594L33 3.85938M33 3.85938V33.8594M33 3.85938H3"
        stroke={color}
        strokeWidth="5.80645"
      />
    </svg>
  );
};
function FeedBack() {
  return (
    <section className={style.content} id="contact">
      <div className={style.container}>
        <header className={style.header}>
          <h1 className={style.title}>Связь</h1>
        </header>
        <main className={style.mainContent}>
          <ul className={style.list}>
            <li className={style.listItem}>
              <div className={style.topContent}>
                <h2 className={style.topContentTitle}>
                  <span>Работы</span>
                  <span className={style.links}>
                    <a className={style.link} href="https://github.com/IgorUshakov05">
                      GitHub
                      <LittleArrow />
                    </a>
                    <a className={style.link} href="https://www.dprofile.ru/yaroslavushakov">
                      DProfile
                      <LittleArrow />
                    </a>
                    <a className={style.link} href="https://www.behance.net/yaroslavushakov">
                      Behance
                      <LittleArrow />
                    </a>
                  </span>
                </h2>
              </div>
            </li>
            <li className={style.listItem}>
              <div className={style.topContent}>
                <h2 className={style.topContentTitle}>
                  <span>Почта</span>
                </h2>
              </div>
              <div className={style.contentItem}>
                <h3 className={style.email}>
                  <a
                    className={style.emailLink}
                    href="mailto:hello@huntteam.ru"
                  >
                    hello@huntteam.ru
                  </a>
                </h3>
              </div>
            </li>
            <li className={style.listItem}>
              <div className={style.topContent}>
                <h2 className={style.topContentTitle}>
                  <span>Мессенджера и социальные сети</span>
                </h2>
              </div>
              <div className={style.contentItem}>
                <ul className={style.socialList}>
                  <li className={style.socialItem}>
                    <a
                      className={style.socialLink}
                      href="https://vk.com/YaroslavUshakov"
                    >
                      ВК
                      <Arrow />
                    </a>
                  </li>
                  <li className={style.socialItem}>
                    <a
                      className={`${style.socialLink} ${style.telegram}`}
                      href="https://t.me/YaroslavUshakov"
                    >
                      Telegram
                      <Arrow color="red" />
                    </a>
                  </li>
                  <li className={style.socialItem}>
                    <a
                      className={`${style.socialLink} ${style.whatsapp}`}
                      href="https://web.whatsapp.com/send/?phone=79935574481"
                    >
                      WhatsApp
                      <Arrow />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
}

export default FeedBack;
