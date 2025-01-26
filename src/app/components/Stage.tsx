"use client";
import { Cursor } from "@/app/components/cursor";
import { processImprovement } from "@/app/data/CaseWorks";
import style from "@/app/style/CasePage.module.css";
import { useEffect, useReducer, useRef, useState } from "react";

export default function Stage() {
  enum WayCursor {
    Left,
    Right,
  }
  let [indexActive, setIndex] = useState(0);
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
    console.log(indexActive);
    if (indexActive >= processImprovement.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
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
        <div className={style.num} data-text={indexActive+1}>
          {indexActive+1}
        </div>
      </div>
      <div className={style.stage}>
        <h2 className={style.blockTitle}>Этапы работы</h2>
        <div className={style.centerContent}>
          <h3 className={style.stageTitle}>
            {processImprovement[indexActive].stage}
          </h3>
          {processImprovement[indexActive].actions.map((item, index) => (
            <p className={style.stageDescription} key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
