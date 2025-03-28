"use client";
import style from "@/app/style/Digital.module.css";
import { useEffect, useState } from "react";
import TextChange from "../components/TextChange";
enum Variant {
  one = "*%#@!&=0",
  two = "!$#%&@",
  three = "=0%!#&*",
  four = "@!#=0$#@&*",
  five = "%=0&!#@$",
}
export const NewDigital = () => {
  let [text, setText] = useState(Variant.one);
  let [isLoad, setLoad] = useState(false);
  useEffect(() => {
    let values = Object.values(Variant);
    let index = 0;
    const changeText = setInterval(() => {
      index = (index + 1) % values.length;
      setText(values[index]);
    }, 500);
    return () => clearInterval(changeText);
  }, []);
  return (
    <article className={style.content}>
      <div className={`container ${style.border}`}>
        <TextChange />
        <div className={style.centerAll}>
          <div className={style.video}>
            <video
              src="/video/Infinity.webm"
              onLoad={() => setLoad(true)}
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
          <div className={style.digitalText}>
            <span>Новая студия с современным подходом</span>
          </div>
        </div>
        <div className={style.center}></div>
      </div>
    </article>
  );
};
