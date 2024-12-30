"use client";
import style from "@/app/style/MoreAboutCase.module.css";
import { useState } from "react";
import { ICaseInfo } from "@/app/types/ICaseInfo";
import CaseElem from "@/app/components/CaseElem";
import { Media } from "../types/EnumMedia";

export const MoreAboutCase = () => {
  const [caseInfo] = useState<ICaseInfo[]>([
    {
      title: "Терминал выдачи талонов",
      what: ["UX", "UI", "3D", "Финансы", "Веб-приложение"],
      linkCase: [
        { href: "#", icon: Media.dprofile },
        { href: "#", icon: Media.github },
        { href: "#", icon: Media.behance },
      ],
      picture: "rosbank.png",
      company: {
        title: "ПАО Росбанк",
        icon: "rosbank.svg",
        description:
          "Крупный российский банк, входящий в группу Societe Generale и предлагающий комплексные финансовые услуги для частных и корпоративных клиентов.",
      },
    },
    {
      title: "Webhunt",
      what: ["UX", "UI", "3D", "Найм", "Веб-приложение", "Моушн", "Графический дизайн","Логотип"],
      linkCase: [
        { href: "#", icon: Media.dprofile },
        { href: "#", icon: Media.github },
        { href: "#", icon: Media.behance },
      ],
      picture: "webhunt.png",
      company: {
        title: "Hunt",
        icon: "hunt.svg",
        description:
          "Компания занимается разработкой цифровых продуктов в сфере найма IT специалистов.",
      },
    },
    {
      title: "P-Bank Mobile",
      what: ["UX", "UI", "3D", "Финансы", "PreviewAppStore"],
      linkCase: [
        { href: "#", icon: Media.dprofile },
        { href: "#", icon: Media.github },
        { href: "#", icon: Media.behance },
      ],
      picture: "pbank.png",
      company: {
        title: "P-Bank",
        icon: "pbank.svg",
        description:
          "Новый цифровой российский банк.",
      },
    },
  ]);
  return (
    <article className={style.content}>
      <ul style={{ height: "100%" }}>
        {caseInfo.map((item, index) => (
          <li key={index} style={{ height: "100%" }}>
            <CaseElem obj={item} isInversed={index % 2 === 0 ? true : false} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MoreAboutCase;
