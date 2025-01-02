import style from "@/app/style/Services.module.css";
import serviceItem from "@/app/data/Service";
import TypeJob from "../components/TypeJob";
function Services() {
  return (
    <div className={style.content}>
      <h2 className={style.sectionTitle}>Что же мы умеем</h2>
      {serviceItem.map((item) => (
        <TypeJob {...item} />
      ))}
    </div>
  );
}

export default Services;
