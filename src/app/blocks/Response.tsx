"use client";
import ReviewItem from "../components/Review";
import { useState, useEffect } from "react";
import style from "@/app/style/Response.module.css";

interface Review {
  client: string;
  message: string[];
}

function Response() {
  let [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    setReviews([
      {
        client: "Автошкола",
        message: [
          "С исполнителем очень легко было работать. Все замечания и предложения учитывал. Предлагал свои идеи, большинство из которых мы реализовали. Сайт получился как задумывалось. Выполнен был раньше срока на 4 дня, что позволило ускорить работу над версткой. Полностью довольна, надеюсь на дальнейшее сотрудничество по развитию сайта)",
        ],
      },
      {
        client: "Строительство",
        message: [
          "Отличный дизайнер с ответственным подходом!",
          "Все отлично, не первый раз обращаюсь к данному специалисту, выполняет работу качественно и раньше срока",
        ],
      },
      {
        client: "Юрисдикция",
        message: [
          "Очень нравится оперативность и качество работы. Дизайнер слышит все пожелания и воплощает их в работе",
        ],
      },
      {
        client: "Строительство",
        message: [
          "Пизд#то, знаю что не наша верстка, но дизайн твой и он охуе#ный",
        ],
      },
      {
        client: "Финансы",
        message: [
          "Доброе утро, чекнул щас то что у тебя выходит, белая тема тоже секс просто, цвета прям и стиль подобраны идеально",
        ],
      },
      {
        client: "Вы",
        message: [
          "Можете сотрудничать с нами  и оказаться здесь, написав нам отзыв",
        ],
      },
    ]);
  }, []);
  return (
    <>
      <div className={`${style.Response}`}>
        <div>
          {reviews.map((item, index) => {
            return (
              <ReviewItem
                key={index}
                client={item.client}
                message={item.message}
              />
            );
          })}
        </div>
        <div>
          {reviews.map((item, index) => {
            return (
              <ReviewItem
                key={index}
                client={item.client}
                message={item.message}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Response;
