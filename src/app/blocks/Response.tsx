"use client";
import { useEffect, useReducer } from "react";
import style from "@/app/style/Response.module.css";
import ReviewsComponent from "../components/ReviewsComponent";

function Response() {
  interface State {
    x: number;
    y: number;
  }

  interface Action {
    payload: {
      x: number;
      y: number;
    };
  }

  const reducer = (state: State, action: Action): State => {
    return { x: action.payload.x, y: action.payload.y };
  };

  const initialState: State = { x: 52, y: 52 };

  const [value, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    function getRandomValue(): State {
      return {
        x: Math.floor(Math.random() * (52 - 40 + 1)) + 40,
        y: Math.floor(Math.random() * (52 - 40 + 1)) + 40,
      };
    }
    let timer = setInterval(() => {
      dispatch({
        payload: getRandomValue(),
      });
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <article className={`${style.Response}`} id="reviews">
        <div className={`${style.MainWidth}`}>
          <ReviewsComponent />

          <div>
            <h1 className={`${style.what}`}>А что говорят люди?</h1>
          </div>
        </div>
        <div className={`${style.bg}`}></div>
        <div
          className={`${style.bgForLight}`}
          style={{
            transition: "background 0.5s ease-in-out",
            background: `radial-gradient(
    ${value.x}% ${value.y}% at 66.42% 60.03%,
    #ffffff -100%,
    #ffc0c1 21.85%,
    #ff297f 43.55%,
    #000000 100%
  )`,
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
