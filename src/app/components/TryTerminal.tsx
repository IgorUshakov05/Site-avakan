import style from "@/app/style/Case_TryTerminal.module.css";

function TryTerminal() {
  return (
    <article className={style.container}>
      {backgroundSVG()}
      {/* <h2 className={style.text}>
        Опробуйте
        <br />
        сами
      </h2> */}
      <div className={style.absolute}></div>
    </article>
  );
}

function backgroundSVG() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_330_743"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <circle cx="9" cy="9" r="9" fill="#FF0000" />
      </mask>
      <g mask="url(#mask0_330_743)">
        <path
          d="M-621 356C-621 356 -496.612 8.99945 9.00002 9C514.612 9.00055 639 356 639 356"
          stroke="#FF0000"
          strokeDasharray="10 10"
        />
        <path
          d="M639 -338C639 -338 514.612 9.00054 8.99998 8.99994C-496.612 8.99934 -621 -338 -621 -338"
          stroke="#FF0000"
          strokeDasharray="10 10"
        />
      </g>
    </svg>
  );
}

export default TryTerminal;
