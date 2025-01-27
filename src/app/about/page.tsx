import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import { Introduction } from "./ui/Introduction/Introduction";
import { Activities } from "./ui/Activities/Activities";
import { SecondHero } from "./ui/SecondHero/SecondHero";
import { Assistance } from "./ui/Assistance/Assistance";
import Chronology from "./ui/Chronology/Chronology";
import Organization from "./ui/Organization/Organization";

const About = () => {
  return (
    <div className=".page-wrapper">
      <main>
        <SecondHero />
        <Introduction />
        {/* <Activities /> */}
        <Assistance />
        <Chronology />
        {/* <Organization /> */}
      </main>
    </div>
  );
};
export default About;
