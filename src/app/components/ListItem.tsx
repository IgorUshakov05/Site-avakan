import style from "@/app/style/ListItem.module.css";

export const ListItem = ({ text }: { text: string }) => {
  return <li className={style.item}>{text}</li>;
};
