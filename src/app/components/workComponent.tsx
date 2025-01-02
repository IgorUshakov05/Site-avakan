import style from "@/app/style/workComponent.module.css";
import {ListItem} from "@/app/types/serviceItemList";
function WorkComponent(obj: ListItem) {
  return (
    <div className={style.block}>
      <h4 className={style.planTitle}>{obj.title}</h4>
      <ul className={style.planList}>
        {obj.sevice.map((item, index) => (
          <li className={style.planItem} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkComponent;
