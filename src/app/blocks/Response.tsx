"use client";
import ReviewItem from "./Review";
import { useState, useEffect, useRef, useReducer } from "react";
import style from "@/app/style/Response.module.css";
import { ResponseInfo } from "@/app/data/Response";

function Response() {
  let elem = useRef<HTMLDivElement>(null);
  let [scrollPosition, setScrollPosition] = useState(0);
  let [stop, setStop] = useState(false);
  let [scrollDirection, setScrollDirection] = useState(1);
  enum ChangeSize {
    X,
    Y,
  }

  interface State {
    x: number;
    y: number;
  }

  interface Action {
    type: ChangeSize;
    payload: number;
  }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ChangeSize.X:
        return { ...state, x: state.x + action.payload };
      case ChangeSize.Y:
        return { ...state, y: state.y + action.payload };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const initialState: State = { x: 52, y: 52 };

  const [value, dispatch] = useReducer(reducer, initialState);

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
          const newPosition = stop
            ? prevPosition
            : prevPosition + 10 * scrollDirection;
          elem.current?.scrollTo({
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
  }, [scrollDirection, stop]);
  function stopScroll(): void {
    setStop(true);
  }
  function startScroll(): void {
    setStop(false);
  }
  return (
    <>
      <article className={`${style.Response}`} id="reviews">
        <div className={`${style.MainWidth}`}>
          <div
            className={`${style.Responds}`}
            ref={elem}
            id="scrollelem"
            onMouseEnter={stopScroll}
            onMouseLeave={startScroll}
          >
            {ResponseInfo.map((item, index) => {
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
        <div
          className={`${style.bgForLight}`}
          style={{
            background: `radial-gradient(
    ${value.x}% ${value.y}% at 66.42% 60.03%,
    #ffffff -100%,
    #ffc0c1 21.85%,
    #ff297f 43.55%,
    #000000 100%
  );`,
          }}
        ></div>

        <div className={`${style.bottomElement}`}>
          <div className={`${style.SAbox}`}>
            <span className={`${style.SA}`}>SA</span>
            <span className={`${style.SA_Rotate}`}>SA</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Response;
