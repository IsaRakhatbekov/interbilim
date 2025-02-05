import Footer from "../components/Footer/Footer";
import Hero from "../ui/Hero/Hero";
import HomeAbout from "../ui/HomeAbout/HomeAbout";
import Interbilim from "../ui/Interbilim/Interbilim";
import OurAreas from "../ui/OurAreas/OurAreas";
import Partners from "../ui/Partners/Partners";

export default function Main() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <OurAreas />
      <Interbilim />
      {/*  need to finish Interbilim adaptive */}
      <Partners />
      <Footer />
    </>
  );
}
