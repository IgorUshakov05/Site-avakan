import Company from "@/app/components/CompanyCase";
import style from "@/app/style/WorkCase.module.css";

interface Company {
  descriptionCase: string;
  casePicture: string;
  titleCompany: string;
  media: Media[];
  companyIcon: string;
}

interface Media {
  icon: string;
  href: string;
}

interface CaseItemProps {
  company: Company;
}

export default function CaseItem({ company }: CaseItemProps) {
  return (
    <div className={style.mainContent}>
      <h2 className={style.descriptionCase}>{company.descriptionCase}</h2>
      <div className={style.pic}>
        <img src={`/casePicture/${company.casePicture}`} alt="Картинка кейса" />
      </div>
      <div className={style.bottomContent}>
        <Company
          title={company.titleCompany}
          img={`/company/${company.companyIcon}`}
        />
        <div>
          <ul className={style.caseList}>
            {company.media.map((media, index) => (
              <li key={index} className={style.caseLink}>
                <a
                  href={media.href}
                  title="Ссылка на кейс"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={media.icon} alt="Иконка медиа" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
