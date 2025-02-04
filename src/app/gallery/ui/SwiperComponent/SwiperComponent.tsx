"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperComponent.module.scss";
import img1 from "@/public/gallery/gallery-swiper-1.png";
import img2 from "@/public/gallery/gallery-swiper-2.png";
import img3 from "@/public/gallery/gallery-swiper-3.png";
import img4 from "@/public/gallery/gallery-swiper-4.png";
import img5 from "@/public/gallery/gallery-swiper-5.png";
import img6 from "@/public/gallery/gallery-swiper-6.png";
import img7 from "@/public/gallery/gallery-swiper-7.png";
import img8 from "@/public/gallery/gallery-swiper-8.png";
import img9 from "@/public/gallery/gallery-swiper-9.png";
import img10 from "@/public/gallery/gallery-swiper-10.png";
import img11 from "@/public/gallery/gallery-swiper-11.png";
import img12 from "@/public/gallery/gallery-swiper-12.png";
import img13 from "@/public/gallery/gallery-swiper-13.png";
import img14 from "@/public/gallery/gallery-swiper-14.png";
import img15 from "@/public/gallery/gallery-swiper-15.png";
import img16 from "@/public/gallery/gallery-swiper-16.png";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        // loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        className={styles.swiperWrapper}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img1} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img2} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img3} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img4} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img5} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img6} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img7} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img8} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img9} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img10} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img11} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img12} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img13} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img14} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img15} alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image src={img16} alt="#" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
