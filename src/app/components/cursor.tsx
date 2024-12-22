import { useEffect, useState } from "react";

enum WayCursor {
  Left,
  Right,
}

export const Cursor = ({
  way,
  isClick,
}: {
  way: WayCursor;
  isClick: boolean;
}) => {
  useEffect(() => {}, [isClick, way]);
  return (
    <>
      <svg
        style={{ transform: way ? "" : "rotate(180deg)" }}
        width="103"
        height="103"
        viewBox="0 0 103 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_1_539)">
          <rect
            width="102.02"
            height="102.02"
            rx="51.0102"
            fill="black"
            fillOpacity="0.36"
          />
          <rect
            x="0.285771"
            y="0.285771"
            width="101.449"
            height="101.449"
            rx="50.7244"
            stroke={
              isClick ? (way === WayCursor.Right ? "red" : "blue") : "#9F9F9F"
            }
            strokeWidth="0.571543"
          />
          <path
            d="M43.7944 36.5789L58.2259 51.0103L43.7944 65.4418"
            stroke={
              isClick ? (way === WayCursor.Right ? "red" : "blue") : "#9F9F9F"
            }
            strokeWidth="1.71463"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_1_539"
            x="-8.8"
            y="-8.8"
            width="119.621"
            height="119.621"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.4" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_539"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_539"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
