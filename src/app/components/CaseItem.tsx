import Company from "@/app/components/CompanyCase";
import style from "@/app/style/WorkCase.module.css";
import { useEffect, useState } from "react";

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
  const [isFading, setIsFading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(company.casePicture);

  useEffect(() => {
    setIsFading(true); // Начинаем затемнение

    const fadeTimer = setTimeout(() => {
      setCurrentVideo(company.casePicture);
      setIsFading(false);
    }, 500);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [company]);

  return (
    <div className={style.mainContent}>
      <h2 className={`${style.descriptionCase}`}>{company.descriptionCase}</h2>
      <div className={style.pic}>
        <video
          src={`/video/${currentVideo}`}
          loop
          muted
          autoPlay
          playsInline
          className={`${style.caseVideo} ${isFading ? style.fade : ""}`}
        />
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
