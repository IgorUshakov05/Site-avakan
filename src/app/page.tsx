import Response from "@/app/blocks/Response";
import { Header } from "./components/Header";
import { Landing } from "./blocks/SiteAbakan";
import { WhoIam } from "./blocks/WhoIam";
import { NewDigital } from "./blocks/NewWeb";
import { Works } from "./blocks/Terminal";
import { MoreAboutCase } from "./blocks/MoreAboutCase";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <WhoIam />
      <NewDigital />
      <Works />
      <MoreAboutCase />
      <Response />
    </>
  );
}
