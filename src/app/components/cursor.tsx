import { useEffect, useState } from "react";

enum WayCursor {
  Left,
  Right,
}

export const Cursor = ({
  way,
  isClick,
  text,
}: {
  way: WayCursor;
  isClick: boolean;
  text?: string;
}) => {
  useEffect(() => {
    console.log("Курсор");
  }, [isClick, way]);
  return (
    <>
      <div
        style={{
          width: "103px",
          height: "103px",
          border: "1px solid white",
          opacity: "0.5",
          borderColor: isClick ? "red" : "#9F9F9F",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isClick ? "red" : "#9F9F9F",
          fontFamily: "Unbounded",
          fontSize: "15px",
          fontWeight: "200",
          lineHeight: "22.06px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
        }}
      >
        {text ? (
          text
        ) : (
          <svg
            width="17"
            height="32"
            viewBox="0 0 17 32"
            style={{ transform: !way ? "rotate(180deg)" : "" }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.794434 1.57886L15.2259 16.0103L0.794434 30.4418"
              stroke={isClick ? "red" : "#9F9F9F"}
              strokeWidth="1.71463"
            />
          </svg>
        )}
      </div>
    </>
  );
};
