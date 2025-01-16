import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import style from "@/app/style/Response.module.css";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const scrollToBottom = () => {
  scroll.scrollToBottom();
};

import { ResponseInfo } from "@/app/data/Response";
import ReviewItem from "../blocks/Review";

export default function ReviewsComponent(data: any) {
  return (
    <div
      className={`${style.Responds}`}
      id="scrollelem"
      //   onMouseEnter={scrollToBottom}
      // onMouseLeave={startScroll}
    >
      {ResponseInfo.map((item, index) => {
        return (
          <ReviewItem key={index} client={item.client} message={item.message} />
        );
      })}
    </div>
  );
}
