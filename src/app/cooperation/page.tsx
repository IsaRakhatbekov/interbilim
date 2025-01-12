import Footer from "@/src/components/Footer/Footer";
import { SecondHero } from "../about/ui/SecondHero/SecondHero";
import Header from "@/src/components/Header/Header";
import { CooperationSection } from "./ui/CooperationSection/CooperationSection";
const Cooperation = () => {
  return (
    <>
      <Header />
      <main>
        <SecondHero />
        <CooperationSection />
      </main>
      <Footer />
    </>
  );
};
export default Cooperation;
