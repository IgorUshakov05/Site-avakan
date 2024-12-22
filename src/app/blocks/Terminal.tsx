"use client";

import style from "@/app/style/WorkCase.module.css";
import { useRef, useState } from "react";
import CaseItem from "@/app/components/CaseItem";
import { Cursor } from "@/app/components/cursor";

enum Media {
  github = "social/github.svg",
  behance = "social/behance.svg",
  dprofile = "social/dprofile.svg",
}

enum WayCursor {
  Left,
  Right,
}

export const Works = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClick, setClick] = useState(false);
  let [selected, changeCase] = useState(0);
  const [isRigth, setPosition] = useState(WayCursor.Right);
  const elem = useRef<HTMLDivElement>(null);
  const [companyList, setCompany] = useState([
    {
      titleCompany: "ПАО Росбанк",
      descriptionCase: `Терминал выдачи талонов`,
      companyIcon: "rosbank.svg",
      media: [
        { icon: Media.dprofile, href: "#" },
        { icon: Media.github, href: "#" },
        { icon: Media.behance, href: "#" },
      ],
      casePicture: "RosbankCase.png",
    },
    {
      titleCompany: "ПАО Росбанк",
      descriptionCase: `Дизайн приложения`,
      companyIcon: "pBank.svg",
      media: [
        { icon: Media.dprofile, href: "#" },
        { icon: Media.github, href: "#" },
        { icon: Media.behance, href: "#" },
      ],
      casePicture: "Money.png",
    },
    {
      titleCompany: "Hunt",
      descriptionCase: `Платформа для найма в IT`,
      companyIcon: "hunt.svg",
      media: [
        { icon: Media.dprofile, href: "#" },
        { icon: Media.github, href: "#" },
        { icon: Media.behance, href: "#" },
      ],
      casePicture: "WebHunt.png",
    },
  ]);
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!elem.current) return; // Проверяем, что элемент существует

    const { left, top, width, height } = elem.current.getBoundingClientRect();
    const offsetX = event.clientX - left;
    const offsetY = event.clientY - top;

    // Определяем направление курсора относительно центра
    setPosition(offsetX < width / 2 ? WayCursor.Left : WayCursor.Right);
    // Обновляем позицию курсора в процентах
    setCursorPosition({
      x: (offsetX / width) * 100,
      y: (offsetY / height) * 100,
    });
  };
  function changeCaseClick(event: React.MouseEvent) {
    event.preventDefault();
    setClick(true);
  }
  return (
    <article
      className={style.content}
      onMouseDown={changeCaseClick}
      onMouseUp={() => {
        const lengthList = companyList.length;
        changeCase(
          isRigth
            ? (selected + 1) % lengthList
            : (selected - 1 + lengthList) % lengthList
        );

        setClick(false);
      }}
    >
      <div
        className={style.flexFullScreen}
        onMouseMove={handleMouseMove}
        ref={elem}
        style={{ position: "relative" }}
      >
        <div
          className={style.cursor}
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 3.7}%`,
            top: `${cursorPosition.y - 6}%`,
            zIndex: "99",
            pointerEvents: "none",
          }}
        >
          <Cursor way={isRigth} isClick={isClick} />
        </div>

        <div className={style.topContent}>
          <h2>Работы</h2>
          <span className={style.description}>
            Мы — молодая веб-студия из Абакана, и наша цель — повысить уровень
            качества и эстетики сайтов для бизнеса Хакасии
          </span>
        </div>

        <CaseItem company={companyList[selected]} />
      </div>
    </article>
  );
};
