import Footer from "@/src/components/Footer/Footer";
import { SecondHero } from "../about/ui/SecondHero/SecondHero";
import Header from "@/src/components/Header/Header";
import { Donation } from "./ui/Donation/Donation";
import Collaboration from "./ui/Collaboration/Collaboration";
import { Partnership } from "./ui/Partnership/Partnership";
import { Volunteering } from "./ui/Volunteering/Volunteering";
const Cooperation = () => {
  return (
    <>
      <Header />
      <main>
        <SecondHero />
        <Collaboration />
        <Donation />
        <Partnership />
        <Volunteering />
      </main>
      <Footer />
    </>
  );
};
export default Cooperation;
