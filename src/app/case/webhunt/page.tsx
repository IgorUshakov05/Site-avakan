import { Header } from "@/app/components/Header";
import style from "@/app/style/WebHunt.module.css";
import Footer from "@/app/components/Footer";
import LandingWebHunt from "@/app/components/LandingWebHunt";
import { useEffect } from "react";
import WebHuntFor from "@/app/components/WebHuntFor";
import TroubleWebHUnt from "@/app/components/Trouble";
import Issue from "@/app/components/Issue";
import FontAndDesign from "@/app/components/FontAndStyle";
import UI from "@/app/components/UI";
import Skills from "@/app/components/Skills";
import WeBest from "@/app/components/WeBest";
import CommingSoon from "@/app/components/CommingSoon";
import Social from "@/app/components/Social";
export default function CasePage() {
  return (
    <>
      <Header theme="white" />
      <div className={style.content}>
        <LandingWebHunt />
        <WebHuntFor />
        <TroubleWebHUnt />
        <Issue />
        <FontAndDesign />
        <UI />
        <Skills />
        <WeBest />
        <CommingSoon />
        <Social />
      </div>
      <Footer />
    </>
  );
}
