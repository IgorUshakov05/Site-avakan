"use client";

import { useEffect, useRef, useState } from "react";
import style from "@/app/style/Response.module.css";
import { ResponseInfo } from "@/app/data/Response";
import ReviewItem from "../blocks/Review";

export default function ReviewsComponent() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDown, setScrollDown] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 1; // пикселей за кадр

    let animationFrameId: number;

    const scrollStep = () => {
      if (!el) return;

      if (scrollDown) {
        el.scrollTop += speed;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
          setScrollDown(false);
        }
      } else {
        el.scrollTop -= speed;
        if (el.scrollTop <= 0) {
          setScrollDown(true);
        }
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollDown]);

  return (
    <div ref={scrollRef} className={style.Responds} id="scrollelem">
      {ResponseInfo.map((item, index) => (
        <ReviewItem key={index} client={item.client} message={item.message} />
      ))}
    </div>
  );
}
