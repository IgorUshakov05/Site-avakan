import style from "@/app/style/Case_TryTerminal.module.css";

function TryTerminal() {
  return (
    <article className={style.container}>
      <div className={style.svgBg}>{backgroundSVG()}</div>
      <p className={style.title}>
        Опробуйте
        <br />
        сами
      </p>
      {/* <h2 className={style.text}>
        Опробуйте
        <br />
        сами
      </h2> */}
    </article>
  );
}

function backgroundSVG() {
  return (
    <svg
      width="1262"
      height="696"
      viewBox="0 0 1262 696"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 695C1 695 125.388 347.999 631 348C1136.61 348.001 1261 695 1261 695"
        stroke="red"
        strokeDasharray="10 10"
      />
      <path
        d="M1261 1.00011C1261 1.00011 1136.61 348.001 631 348C125.388 347.999 0.999983 0.999988 0.999983 0.999988"
        stroke="red"
        strokeDasharray="10 10"
      />
      <mask
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="622"
        y="339"
        width="18"
        height="18"
      >
        <circle cx="631" cy="348" r="9" fill="#FF0000" />
      </mask>
      <g mask="url(#mask0_247_3363)">
        <path
          d="M1 695C1 695 125.388 347.999 631 348C1136.61 348.001 1261 695 1261 695"
          stroke="#FF0000"
          strokeDasharray="10 10"
        />
        <path
          d="M1261 1.00011C1261 1.00011 1136.61 348.001 631 348C125.388 347.999 0.999983 0.999988 0.999983 0.999988"
          stroke="#FF0000"
          strokeDasharray="10 10"
        />
      </g>
      <mask
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="622"
        y="339"
        width="18"
        height="18"
      >
        <circle cx="631" cy="348" r="9" fill="#FF0000" />
      </mask>
      <g mask="url(#mask1_247_3363)">
        <path
          d="M387 695C387 695 435.176 347.999 631 348C826.824 348.001 875 695 875 695"
          stroke="#FF0000"
          strokeDasharray="10 10"
        />
        <path
          d="M875 1.00011C875 1.00011 826.824 348.001 631 348C435.176 347.999 387 0.999988 387 0.999988"
          stroke="#FF0000"
          strokeDasharray="10 10"
        />
      </g>
    </svg>
  );
}

export default TryTerminal;
