import style from "@/app/style/Conversion.module.css";

export default function Conversion() {
  return (
    <div className={style.container}>
      <h2 className={style.text}>
        после внедрения разработаного нашей командой терминала, конверсия
        увелчилилась на 75%
      </h2>
      <div className={style.videoContainer}>
        <video
          src="/video/conversion.webm"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
}
