"use client";
import ReviewItem from "../components/Review";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import style from "@/app/style/Response.module.css";

interface Review {
  client: string;
  message: string[];
}

function Response() {
  let [reviews, setReviews] = useState<Review[]>([]);
  let [scrollPosition, setScrollPosition] = useState<number>(0);
  let elem = useRef<HTMLDivElement>(null);
  let [heightElem, setHeight] = useState(0);
  useEffect(() => {
    if (elem.current) {
      setHeight(elem.current.getBoundingClientRect().height);
    }
  }, [elem.current]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (scrollPosition >= heightElem ) {
        console.log("Вверх");
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition - 10;
          if (elem.current) {
            elem.current.scroll({
              top: newPosition,
              behavior: "smooth",
            });
          }
          return newPosition;
        });
        return;
      } else {
        setScrollPosition((prevPosition) => {
          console.log("Вниз");
          const newPosition = prevPosition + 10;
          if (elem.current) {
            elem.current.scroll({
              top: newPosition,
              behavior: "smooth",
            });
          }
          return newPosition;
        });
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });
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
        <div className={`${style.MainWidth}`}>
          <div className={`${style.Responds}`} ref={elem} id="scrollelem">
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
            <h1 className={`${style.what}`}>А что говорят люди?</h1>
          </div>
        </div>
        <div className={`${style.bg}`}></div>

        <div className={`${style.bottomElement}`}>
          <div className={`${style.SAbox}`}>
            <span className={`${style.SA}`}>SA</span>
            <span className={`${style.SA_Rotate}`}>SA</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Response;
