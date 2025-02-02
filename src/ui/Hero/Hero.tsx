import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImg from "@/public/heroBg.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroImg}>
          <Image src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
