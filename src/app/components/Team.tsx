"use client";
import { useState, useEffect } from "react";
import style from "@/app/style/Team.module.css";

export default function Team() {
  return (
    <article className={style.container}>
      <div className={style.gridContainer}>
        <div className={style.grid}>
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className={style.box}></div>
          ))}
        </div>
      </div>
    </article>
  );
}
