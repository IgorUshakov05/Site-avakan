"use client";

import { useState, useEffect } from "react";
import style from "@/app/style/Digital.module.css";

enum Variant {
  one = "*%#@!&=0",
  two = "!$#%&@",
  three = "=0%!#&*",
  four = "@!#=0$#@&*",
  five = "%=0&!#@$",
}
function TextChange() {
  let [text, setText] = useState(Variant.one);
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
    <span className={style.text}>
      Хакасия — Абакан — <span>{text}</span>
    </span>
  );
}

export default TextChange;
