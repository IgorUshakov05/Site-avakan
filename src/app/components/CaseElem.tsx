import { ICaseInfo } from "@/app/types/ICaseInfo";
import style from "@/app/style/CaseElem.module.css";
import Company from "./CompanyCase";
import { ListItem } from "./ListItem";
import Link from "next/link";
interface CaseElemProps {
  obj: ICaseInfo;
  isInversed?: boolean;
}
function CaseElem({ obj, isInversed }: CaseElemProps) {
  return (
    <article
      className={style.parent}
      style={{ flexDirection: isInversed ? "row-reverse" : "row" }}
    >
      <div className={style.parentImg}>
        <img src={`/workPicture/${obj.picture}`} className={style.img} alt="" />
      </div>
      <div
        className={style.content}
        style={{
          padding: !isInversed ? "50px 0 50px 40px" : "50px 40px 50px 0",
        }}
      >
        <div className={style.titleWrapper}>
          <h3 className={style.title}>
            <Link href={`/case/${obj.href}`}>{obj.title}</Link>
          </h3>
        </div>
        <div className={style.whatWrapper}>
          <span className={style.span}>#что</span>
          <ul className={style.whatList}>
            {obj.what.map((item, index) => (
              <ListItem text={item} key={index} />
            ))}
          </ul>
        </div>
        <div className={style.companyWrapper}>
          <span className={style.companyTitle}>О компании</span>
          <div className={style.companyInfo}>
            <div className={style.companyDetails}>
              <Company
                img={`/company/${obj.company.icon}`}
                title={obj.company.title}
              />
              <h3 className={style.companyDescription}>
                {obj.company.description}
              </h3>
            </div>
            <div className={style.caseLinksWrapper}>
              <ul className={style.caseList}>
                {obj.linkCase.map((media, index) => (
                  <li key={index} className={style.caseLink}>
                    <a
                      href={media.href}
                      title="Ссылка на кейс"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={media.icon}
                        alt="Иконка медиа"
                        className={style.caseMediaIcon}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CaseElem;
