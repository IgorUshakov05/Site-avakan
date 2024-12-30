export interface ICaseInfo {
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

interface LinkMedia {
  icon: string;
  href: string;
}
