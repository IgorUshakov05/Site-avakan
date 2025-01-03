"use client";

import style from "@/app/style/SendPost.module.css";
import { useState } from "react";

function SendPost() {
  const [media] = useState([
    { img: "telegram", alt: "Телеграм" },
    { img: "vk", alt: "Вк" },
    { img: "tenchat", alt: "Тенчат" },
    { img: "email", alt: "Почта" },
  ]);
  return (
    <div className={style.content}>
      <div className={style.parentTitle}>
        <span className={style.title}>Работаем?</span>
        <span className={style.describe}>
          Мы внимательно рассмотрит вашу заявку, чтобы оценить объем работы и
          предложить оптимальные решения. В любом случае, мы свяжемся с вами,
          чтобы обсудить детали и предложить вам лучшие варианты для достижения
          ваших целей. Заполните форму, и мы поможем вашему проекту начать путь
          к успеху!
        </span>
      </div>
      <div className={`${style.flex} ${style.main}`}>
        <div className={`${style.flex} ${style.center}`}>
          <div className={style.feed}>
            <div className={`${style.flex} ${style.text}`}>
              <span className={style.default}>
                Укажите контакт для обратной свзяи
              </span>
              <span className={`${style.star} ${style.defaultStar}`}>*</span>
            </div>
            <div className={style.inputs}>
              {media.map((item, index) => (
                <div key={index} className={style.container}>
                  <label htmlFor={item.alt} className={style.selectItem}>
                    <img src={`/icon/${item.img}.svg`} alt={item.alt} />
                  </label>
                  <input
                    type="radio"
                    className={style.input}
                    name="message"
                    id={item.alt}
                  />
                </div>
              ))}
            </div>
            <input
              type="text"
              name="link"
              id="link"
              className={`${style.textarea} ${style.inputLink}`}
              placeholder={"Вставьте ссылку"}
            />
            <div className={style.fileTZ}>
              <span className={style.default}>
                Добавьте файл, будет круто если это - ТЗ &lt;3
              </span>
              <div className={style.inputFIle}>
                <input type="file" className={style.file} />
                <div className={style.textAndDown}>
                  <span className={style.default}>
                    Перетяните файл и положите в это поле
                  </span>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 0.788086V18.1214M13 18.1214L18.1212 13.0892M13 18.1214L7.87878 13.0892"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <path d="M0 20.4849H26" stroke="white" strokeWidth="0.5" />
                    <path
                      d="M5.12122 25.2119H20.8788"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={style.video}>
            <video src="/video/sa.webm" autoPlay muted loop playsInline></video>
          </div>
        </div>
        <Right />
      </div>
    </div>
  );
}

const Right = () => {
  let [buget, setBuget] = useState("5000");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Получаем введённое значение
    const rawValue = e.target.value.replace(/\s/g, "");

    if (!isNaN(Number(rawValue))) {
      const formattedValue = Number(rawValue).toLocaleString("ru-RU");
      setBuget(formattedValue);
    }
  };

  return (
    <div>
      <div className={style.textareaParent}>
        <span className={style.star}>*</span>
        <label htmlFor="twoWord"></label>
        <textarea
          name="twoWord"
          id="twoWord"
          className={style.textarea}
          placeholder={"Расскажите о компании в двух словах"}
        ></textarea>
      </div>
      <div className={`${style.buget} ${style.main}`}>
        <span className={style.default}>Укажите бюджет</span>
        <div>
          <input type="range" name="" className={style.selectValue} id="" />
        </div>
        <div>
          <input
            className={style.value}
            value={buget}
            type="text"
            onChange={handleInputChange}
            placeholder="Введите сумму"
          />
        </div>
      </div>
      <div className={style.main}>
        <button className={style.sendQuery}>Отправть</button>
      </div>
    </div>
  );
};
export default SendPost;
