export interface ICaseInfo {
  title: string;
  what: string[];
  href: string;
  picture: string;
  linkCase: LinkMedia[];
  company: {
    title: string;
    icon: string;
    description: string;
  };
}
enum Media {
  github = "social/github.svg",
  behance = "social/behance.svg",
  dprofile = "social/dprofile.svg",
}
interface LinkMedia {
  icon: string;
  href: string;
}

const caseInfo: ICaseInfo[] = [
  {
    title: "Терминал выдачи талонов",
    href: "rosbank",
    what: ["UX", "UI", "3D", "Финансы", "Веб-приложение"],
    linkCase: [
      { href: "https://dprofile.ru/case/80099/rosbank-veb-prilozenie-dlia-terminala", icon: Media.dprofile },
      { href: "https://github.com/IgorUshakov05/Rosbank", icon: Media.github },
      { href: "https://www.behance.net/gallery/204740919/ROSBANK-TERMINAL", icon: Media.behance },
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
    href: "webhunt",
    what: [
      "UX",
      "UI",
      "3D",
      "Найм",
      "Веб-приложение",
      "Моушн",
      "Графический дизайн",
      "Логотип",
    ],
    linkCase: [
      { href: "https://dprofile.ru/case/77055/webhunt-brending-uxui-grafika", icon: Media.dprofile },
      { href: "https://www.behance.net/gallery/203214451/WebHunt-Brending-UXUI-Logos", icon: Media.behance },
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
    href: "/#",

    what: ["UX", "UI", "3D", "Финансы", "PreviewAppStore"],
    linkCase: [
      { href: "https://booming-area-660.notion.site/P-BANK-0e859a08182c411083e308f8ce7ce3e4", icon: Media.behance },
    ],
    picture: "pbank.png",
    company: {
      title: "P-Bank",
      icon: "pbank.svg",
      description: "Новый цифровой российский банк.",
    },
  },
];

export default caseInfo;
