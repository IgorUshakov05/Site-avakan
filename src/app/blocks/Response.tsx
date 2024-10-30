"use client";
import ReviewItem from "../components/Review";
import { useState, useEffect, useRef } from "react";
import style from "@/app/style/Response.module.css";

interface Review {
  client: string;
  message: string[];
}

function Response() {
  let [reviews, setReviews] = useState<Review[]>([]);
  let elem = useRef<HTMLDivElement>(null);
  let [scrollPosition, setScrollPosition] = useState(0);
  let [stop, setStop] = useState(false);
  let [scrollDirection, setScrollDirection] = useState(1); // 1 для вниз, -1 для вверх

  useEffect(() => {
    const scrollStep = () => {
      if (elem.current) {
        const { scrollTop, scrollHeight, clientHeight } = elem.current;

        if (scrollTop + clientHeight >= scrollHeight) {
          setScrollDirection(-0.1); // меняем направление на вверх
        } else if (scrollTop <= 0) {
          setScrollDirection(0.1); // меняем направление на вниз
        }

        setScrollPosition((prevPosition) => {
          const newPosition = stop?prevPosition:prevPosition + 10 * scrollDirection;
          elem.current.scrollTo({
            top: newPosition,
            behavior: "smooth",
          });
          return newPosition;
        });
      }
    };

    const timer = setInterval(scrollStep, 100);
    return () => {
      clearInterval(timer);
    };
  }, [scrollDirection,stop]);
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
  function stopScroll(): void {
    setStop(true);
  }
  function startScroll(): void {
    setStop(false);
  }
  return (
    <>
      <div className={`${style.Response}`}>
        <div className={`${style.MainWidth}`}>
          <div
            className={`${style.Responds}`}
            ref={elem}
            id="scrollelem"
            onMouseEnter={stopScroll}
            onMouseLeave={startScroll}
          >
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
        <div className={`${style.bgForLight}`}></div>
            
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
