"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./PhotoGallery.module.scss";

interface PhotoGalleryProps {
  images: (string | StaticImageData)[];
  closeGallery: () => void;
}

const PhotoGallery = ({ images, closeGallery }: PhotoGalleryProps) => {
  return (
    <div className={styles.modalOverlay} onClick={closeGallery}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeGallery}></button>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className={styles.swiper}
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx} className={styles.swiperSlide}>
              <div className={styles.innerImg}>
                <Image
                  src={typeof image === "string" ? image : image.src} // 👈 Проверяем, строка или объект
                  alt={`Slide ${idx}`}
                  width={800}
                  height={500}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoGallery;
