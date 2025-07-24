"use client";

import { useEffect, useRef } from "react";
import style from "@/app/style/Landing.module.css";

export const Landing = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <article className={style.landing} id="main">
      <div className={`container ${style.content}`}>
        <div className={style.video}>
          <video ref={videoRef} autoPlay muted loop playsInline  src="/video/Ленд.webm"/>
        </div>
        <div className={style.textBlock}>
          <h1 className={style.titleSite}>
            <span>HuntTeam</span>
          </h1>
          <div className={style.description}>
            <div></div>
            <h2 className={style.descriptionText}>
              <span>цифровое</span> будущее для вашего бизнеса
            </h2>
          </div>
        </div>
      </div>
    </article>
  );
};
