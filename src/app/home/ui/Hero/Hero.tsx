import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}></div>
    </section>
  );
};
export default Hero;
