"use client";
import style from "@/app/style/Header.module.css";
import CustomSvg from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export const Header = ({ theme = "dark" }) => {
  const pathname = usePathname();
  const currentPage = pathname.split("/").reverse()[0];
  console.log(currentPage);
  return (
    <header
      className={`${style.header}`}
      style={{ background: theme === "dark" ? "black" : "#F1F4FF" }}
    >
      <div className={`container ${style.headerContent}`}>
        <div>
          <Link href="/">
            <CustomSvg
              color={theme == "dark" ? "white" : "#232DFC"}
            />
          </Link>
        </div>
        <div className={style.nav}>
          <nav>
            <ul className={style.listLink}>
              <li className={style.linkItem}>
                <a
                  href="/#about"
                  style={{ color: theme === "dark" ? "#F1F4FF" : "black" }}
                >
                  Веб-студия
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  href="/#case"
                  style={{ color: theme === "dark" ? "#F1F4FF" : "black" }}
                >
                  Портфолио
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  href="/#services"
                  style={{ color: theme === "dark" ? "#F1F4FF" : "black" }}
                >
                  Услуги
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  href="/#reviews"
                  style={{ color: theme === "dark" ? "#F1F4FF" : "black" }}
                >
                  Отзывы
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  href="/#contact"
                  style={{ color: theme === "dark" ? "#F1F4FF" : "black" }}
                >
                  Связаться
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
