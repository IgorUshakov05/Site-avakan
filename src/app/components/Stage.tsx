"use client";
import { Cursor } from "@/app/components/cursor";

import style from "@/app/style/CasePage.module.css";
import { useEffect, useRef, useState } from "react";

export default function Stage() {
  enum WayCursor {
    Left,
    Right,
  }

  const [cursorTarget, setCursorTarget] = useState({ x: 0, y: 0 }); // Целевая позиция
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Текущая позиция
  const [showCursor, setShowCursor] = useState(false);
  const [isClick, setClick] = useState(false);
  const [isRigth, setPosition] = useState(WayCursor.Right);
  const elem = useRef<HTMLDivElement>(null);

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
    setTimeout(() => {
      setClick(false);
    }, 500);
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
      className={style.container}
      onMouseMove={handleMouseMove}
      ref={elem}
      onClick={changeCaseClick}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {showCursor && (
        <div
          style={{
            opacity: showCursor ? 1 : 0,
            position: "absolute",
            left: `${cursorPosition.x - 3.7}%`,
            top: `${cursorPosition.y - 6}%`,
            transition: "0s",
            zIndex: "99",
            pointerEvents: "none",
          }}
        >
          <Cursor way={isRigth} text="scroll" isClick={isClick} />
        </div>
      )}
      <div className={style.background}>
        <div className={style.num} data-text="0">
          0
        </div>
        <div className={style.num} data-text="2">
          2
        </div>
      </div>
      <div className={style.stage}>
        <h2 className={style.blockTitle}>Этапы работы</h2>
        <div className={style.centerContent}>
          <h3 className={style.stageTitle}>Передача дизайна программисту</h3>
          <p className={style.stageDescription}>
            Создание черно-белых схем интерфейса, чтобы проработать логику
            взаимодействия с терминалом. Основная цель — упрощение структуры,
            чтобы клиент мог легко найти нужный раздел. Добавление визуальных
            элементов и интерактивности, чтобы проверить, как клиенты
            воспринимают интерфейс в более реалистичных условиях. Разработка
            минималистичного и интуитивно понятного дизайна с использованием
            контрастных цветов для ключевых элементов (например, кнопок и
            категорий). Использование шрифтов с высокой читаемостью для
            текстовых блоков, акцент на иерархии текста (заголовки,
            подзаголовки, инструкции).
          </p>
        </div>
      </div>
    </article>
  );
}
