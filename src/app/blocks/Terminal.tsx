"use client";

import style from "@/app/style/WorkCase.module.css";
import { useRef, useState, useEffect } from "react";
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
  const [cursorTarget, setCursorTarget] = useState({ x: 0, y: 0 }); // Целевая позиция
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Текущая позиция
  const [showCursor, setShowCursor] = useState(false);
  const [isClick, setClick] = useState(false);
  const [selected, changeCase] = useState(0);
  const [isRigth, setPosition] = useState(WayCursor.Right);
  const elem = useRef<HTMLDivElement>(null);
  const [companyList] = useState([
    {
      titleCompany: "ПАО Росбанк",
      descriptionCase: `Терминал выдачи талонов`,
      companyIcon: "rosbank.svg",
      media: [
        { icon: Media.dprofile, href: "#" },
        { icon: Media.github, href: "#" },
        { icon: Media.behance, href: "#" },
      ],
      casePicture: "rosbank.webm",
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
      casePicture: "p-bank.webm",
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
      casePicture: "webhunt.webm",
    },
  ]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!elem.current) return;

    const { left, top, width, height } = elem.current.getBoundingClientRect();
    const offsetX = event.clientX - left;
    const offsetY = event.clientY - top;

    setPosition(offsetX < width / 2 ? WayCursor.Left : WayCursor.Right);
    setCursorTarget({
      x: (offsetX / width) * 100,
      y: (offsetY / height) * 100,
    });
  };

  function changeCaseClick(event: React.MouseEvent) {
    event.preventDefault();
    setClick(true);
  }

  useEffect(() => {
    let animationFrameId: number;

    const smoothCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (cursorTarget.x - prev.x) * 0.1, 
        y: prev.y + (cursorTarget.y - prev.y) * 0.1, 
      }));
      animationFrameId = requestAnimationFrame(smoothCursor);
    };

    animationFrameId = requestAnimationFrame(smoothCursor);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorTarget]);

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
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        style={{ position: "relative" }}
      >
        {showCursor && (
          <div
            className={style.cursor}
            style={{
              opacity: showCursor ? 1 : 0,
              position: "absolute",
              left: `${cursorPosition.x - 3.7}%`,
              top: `${cursorPosition.y - 6}%`,
              zIndex: "99",
              pointerEvents: "none",
            }}
          >
            <Cursor way={isRigth} isClick={isClick} />
          </div>
        )}

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
