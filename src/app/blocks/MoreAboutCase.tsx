import style from "@/app/style/MoreAboutCase.module.css";
import ICaseInfo from "@/app/types/ICaseInfo";
import CaseElem from "@/app/components/CaseElem";

export const MoreAboutCase = () => {
  return (
    <article className={style.content}>
      <ul style={{ height: "100%" }}>
        {ICaseInfo.map((item, index) => (
          <li key={index} style={{ height: "100%" }}>
            <CaseElem obj={item} isInversed={index % 2 === 0 ? true : false} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MoreAboutCase;
