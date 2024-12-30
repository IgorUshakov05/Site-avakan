"use client";
import { useState } from "react";
import style from "@/app/style/Technoblock.module.css";
import { ListItem } from "../components/ListItem";
function Technologe() {
  const [tools] = useState([
    "Figma",
    "Photoshop",
    "Illustrator",
    "Spline",
    "After Effects",
    "InDesign",
  ]);
  const [techs] = useState([
    "NoSql",
    "Node.JS",
    "MongoDB",
    "JavaScript",
    "Git",
    "MySQL",
    "Cypress",
    "Vue.JS",
    "Jest",
    "MobX",
    "React.JS",
    "Next",
    "PostgreSQL",
    "Redux",
    "SCSS",
    "TypeScript",
    "Bootstrap",
  ]);

  return (
    <article className={style.technologe}>
      <h2 className={style.title}>Технологии</h2>
      <div className={style.content}>
        <div className={style.rigth}>
          <div className={style.visual}>
            <p className={style.defaultText}>
              Для создания первоклассного визуала
            </p>
            <ul className={style.list}>
              {tools.map((tool, index) => (
                <ListItem text={tool} key={index} />
              ))}
              <li className={style.listItem}></li>
            </ul>
          </div>
          <div className={style.team}>
            <div className={style.imageWrapper}>
              <img src="aw" alt="" className={style.image} />
            </div>
            <p className={style.defaultText}>
              Наша команда профессионалов владеет всеми необходимыми
              инструментами для эффективной реализации проектов любой сложности.
            </p>
          </div>
        </div>
        <div className={style.software}>
          <p className={style.defaultText}>Для создания программной части</p>
          <ul className={style.list}>
            {techs.map((tool, index) => (
              <ListItem text={tool} key={index} />
            ))}
            <li className={style.listItem}></li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Technologe;
