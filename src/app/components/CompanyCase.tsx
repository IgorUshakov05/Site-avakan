import style from "@/app/style/CompanyItem.module.css";

interface Props {
  img: string;
  title: string;
}
export default function Company({ img, title }: Props) {
  return (
    <div className={style.company}>
      <div>
        <img src={img} alt={`Локотип компании ${title}`} />
      </div>
      <h2 className={style.titleCompany}>{title}</h2>
    </div>
  );
}
