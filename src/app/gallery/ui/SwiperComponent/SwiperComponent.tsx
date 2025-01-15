"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperComponent.module.scss";
import img from "@/public/certificates/certificates15.png";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        className={styles.swiperWrapper}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img} alt="#" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
