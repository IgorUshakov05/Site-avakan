interface ICaseInfo {
  title: string;
  what: string[];
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
      description: "Новый цифровой российский банк.",
    },
  },
];


export default caseInfo