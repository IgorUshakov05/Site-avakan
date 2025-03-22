import { Header } from "@/app/components/Header";
import style from "@/app/style/WebHunt.module.css";
import Footer from "@/app/components/Footer";
import LandingWebHunt from "@/app/components/LandingWebHunt";
import { useEffect } from "react";
export default function CasePage() {
  return (
    <>
      <Header theme="white" />
      <div className={style.content}>
        <LandingWebHunt />
      </div>
      <Footer />
    </>
  );
}
