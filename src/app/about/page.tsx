import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import { Introduction } from "./ui/Introduction/Introduction";
import { Activities } from "./ui/Activities/Activities";
import { SecondHero } from "./ui/SecondHero/SecondHero";
import { Assistance } from "./ui/Assistance/Assistance";

const About = () => {
  return (
    <div className=".page-wrapper">
      <Header />
      <main>
        <SecondHero />
        <Introduction />
        <Activities />
        <Assistance />
      </main>
      <Footer />
    </div>
  );
};
export default About;
