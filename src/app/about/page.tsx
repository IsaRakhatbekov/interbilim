import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import { Introduction } from "./ui/Introduction/Introduction";
import { Activities } from "./ui/Activities/Activities";
import { SecondHero } from "./ui/SecondHero/SecondHero";

const About = () => {
  return (
    <div className=".page-wrapper">
      <Header />
      <main>
        <SecondHero />
        <Introduction />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};
export default About;
