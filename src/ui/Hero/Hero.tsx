"use client";
import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImg from "@/public/heroBg.png";
import { useEffect, useState } from "react";
import mapIcon from "@/public/mapIcon.svg";

const locations = [
  "Бишкек",
  "Ош",
  "Каракол",
  "Жалал-Абад",
  "Талас",
  "Нарын",
  "Баткен",
];

const Hero = () => {
  const [animatoin, setAnimation] = useState(false);
  const [animatedIndex, setAnimatedIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedIndex(index);
      index++;
      if (index >= locations.length) {
        clearInterval(interval);
      }
    }, 500); // Интервал 1.5 секунды между элементами

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <p
            className={`${styles.heroTitle} ${
              animatoin ? styles.heroTitleActive : ""
            }`}
          >
            Содействие построению <br />
            <span>справедливого общества</span>
          </p>
          <div className={styles.heroImg}>
            {locations.map((city, i) => (
              <span
                key={i}
                className={`${styles.mapIconWrapper} ${
                  animatedIndex >= i ? styles.mapIconActive : ""
                }`}
              >
                <span className={styles.mapIcon}>
                  <Image src={mapIcon} alt="mapIcon" />
                </span>
                {city}
              </span>
            ))}
            <Image src={heroImg} alt="" />
          </div>
          <p
            className={`${styles.heroTitle} ${styles.seondTitle} ${
              animatoin
                ? `${styles.heroTitleActive} ${styles.seondTitleActive}`
                : ""
            }`}
          >
            Продвижение <span>прав и интересов</span> <br />
            уязвимых групп населения
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
