import Response from "@/app/blocks/Response";
import { Header } from "./components/Header";
import { Landing } from "./blocks/SiteAbakan";
import { WhoIam } from "./blocks/WhoIam";
import { NewDigital } from "./blocks/NewWeb";
import { Works } from "./blocks/Terminal";
import { MoreAboutCase } from "./blocks/MoreAboutCase";
import Technologe from "./blocks/Technologe";
import Services from "./blocks/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <WhoIam />
      <NewDigital />
      <Works />
      <MoreAboutCase />
      <Technologe />
      <Services />
      <Response />
    </>
  );
}
