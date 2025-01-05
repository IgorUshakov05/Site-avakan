import style from "@/app/style/Services.module.css";
import serviceItem from "@/app/data/Service";
import TypeJob from "../components/TypeJob";
function Services() {
  return (
    <article className={style.content} id="services">
      <h2 className={style.sectionTitle}>Что же мы умеем</h2>
      {serviceItem.map((item, index) => (
        <TypeJob {...item} key={index} />
      ))}
    </article>
  );
}

export default Services;
