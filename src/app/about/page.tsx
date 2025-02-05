import { Introduction } from "./ui/Introduction/Introduction";
import { Activities } from "./ui/Activities/Activities";
import { Assistance } from "./ui/Assistance/Assistance";
import Chronology from "./ui/Chronology/Chronology";
import Organization from "./ui/Organization/Organization";
import Structure from "./ui/Structure/Structure";
import SecondFooter from "@/src/components/SecondFooter/SecondFooter";

const About = () => {
  return (
    <div className=".page-wrapper">
      <main>
        <Introduction />
        {/* <Activities /> */}
        <Assistance />
        <Structure />
        <Chronology />
        {/* <Organization /> */}
      </main>
      <SecondFooter />
    </div>
  );
};
export default About;
