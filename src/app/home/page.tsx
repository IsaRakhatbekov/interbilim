import styles from "./page.module.scss";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Hero from "./ui/Hero/Hero";
import HomeAbout from "./ui/HomeAbout/HomeAbout";
import OurAreas from "./ui/OurAreas/OurAreas";
import Interbilim from "./ui/Interbilim/Interbilim";
import Partners from "./ui/Partners/Partners";

export const Home = () => {
  return (
    <div className=".page-wrapper">
      <Header />
      <main>
        <Hero />
        <HomeAbout />
        <OurAreas />
        <Interbilim />
        {/*  need to finish Interbilim adaptive */}
        <Partners />
      </main>
      <Footer />
    </div>
  );
};
