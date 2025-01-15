"use client";
import styles from "./page.module.scss";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Image from "next/image";
import videoImg from "@/public/galleryVideo.png";
import img from "@/public/certificates/certificates15.png";
import SwiperComponent from "./ui/SwiperComponent/SwiperComponent";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.gallery}>
          <a
            className={styles.galleryHero}
            href="https://www.youtube.com/watch?v=PYeCqSw3owY"
          >
            <span className={styles.play}>
              <svg
                width="34"
                height="56"
                viewBox="0 0 34 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6083 2.63746C8.89583 0.945795 6.35 0.458294 4.125 1.38746C1.8875 2.32079 0.5 4.39579 0.5 6.80413V49.2C0.5 51.6083 1.8875 53.6833 4.125 54.6166C4.875 54.9291 5.65833 55.0833 6.4375 55.0833C7.97083 55.0833 9.475 54.4875 10.6083 53.3666L32.0875 32.1708C33.2125 31.0583 33.8333 29.5791 33.8333 28.0041C33.8333 26.4291 33.2125 24.95 32.0875 23.8375L10.6083 2.63746ZM29.1583 29.2L7.68333 50.3958C6.89583 51.175 5.99167 50.875 5.72917 50.7666C5.40833 50.6333 4.66667 50.2125 4.66667 49.1958V6.80413C4.66667 5.78746 5.4125 5.36663 5.72917 5.23329C5.85417 5.18329 6.125 5.08746 6.4625 5.08746C6.82917 5.08746 7.27083 5.19996 7.68333 5.60413L29.1583 26.8C29.4875 27.1208 29.6667 27.55 29.6667 28C29.6667 28.45 29.4875 28.8791 29.1583 29.2Z"
                  fill="#FCFCFC"
                />
              </svg>
            </span>
          </a>
          <div className={styles.wrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.videoWrapper}
              href="https://www.youtube.com/watch?v=i_kDgVxHNSc"
            >
              <Image src={videoImg} alt="" />
              <span className={styles.play}>
                <svg
                  width="34"
                  height="56"
                  viewBox="0 0 34 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6083 2.63746C8.89583 0.945795 6.35 0.458294 4.125 1.38746C1.8875 2.32079 0.5 4.39579 0.5 6.80413V49.2C0.5 51.6083 1.8875 53.6833 4.125 54.6166C4.875 54.9291 5.65833 55.0833 6.4375 55.0833C7.97083 55.0833 9.475 54.4875 10.6083 53.3666L32.0875 32.1708C33.2125 31.0583 33.8333 29.5791 33.8333 28.0041C33.8333 26.4291 33.2125 24.95 32.0875 23.8375L10.6083 2.63746ZM29.1583 29.2L7.68333 50.3958C6.89583 51.175 5.99167 50.875 5.72917 50.7666C5.40833 50.6333 4.66667 50.2125 4.66667 49.1958V6.80413C4.66667 5.78746 5.4125 5.36663 5.72917 5.23329C5.85417 5.18329 6.125 5.08746 6.4625 5.08746C6.82917 5.08746 7.27083 5.19996 7.68333 5.60413L29.1583 26.8C29.4875 27.1208 29.6667 27.55 29.6667 28C29.6667 28.45 29.4875 28.8791 29.1583 29.2Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>
            </a>
            <div className={styles.imagesWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.imagesWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.videoWrapper}
              href="https://www.youtube.com/watch?v=QY3O26Jj83o"
            >
              <Image src={videoImg} alt="" />
              <span className={styles.play}>
                <svg
                  width="34"
                  height="56"
                  viewBox="0 0 34 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6083 2.63746C8.89583 0.945795 6.35 0.458294 4.125 1.38746C1.8875 2.32079 0.5 4.39579 0.5 6.80413V49.2C0.5 51.6083 1.8875 53.6833 4.125 54.6166C4.875 54.9291 5.65833 55.0833 6.4375 55.0833C7.97083 55.0833 9.475 54.4875 10.6083 53.3666L32.0875 32.1708C33.2125 31.0583 33.8333 29.5791 33.8333 28.0041C33.8333 26.4291 33.2125 24.95 32.0875 23.8375L10.6083 2.63746ZM29.1583 29.2L7.68333 50.3958C6.89583 51.175 5.99167 50.875 5.72917 50.7666C5.40833 50.6333 4.66667 50.2125 4.66667 49.1958V6.80413C4.66667 5.78746 5.4125 5.36663 5.72917 5.23329C5.85417 5.18329 6.125 5.08746 6.4625 5.08746C6.82917 5.08746 7.27083 5.19996 7.68333 5.60413L29.1583 26.8C29.4875 27.1208 29.6667 27.55 29.6667 28C29.6667 28.45 29.4875 28.8791 29.1583 29.2Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className={styles.wrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.videoWrapper}
              href="https://www.youtube.com/watch?v=qDZa0r0w_yc"
            >
              <Image src={videoImg} alt="" />
              <span className={styles.play}>
                <svg
                  width="34"
                  height="56"
                  viewBox="0 0 34 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6083 2.63746C8.89583 0.945795 6.35 0.458294 4.125 1.38746C1.8875 2.32079 0.5 4.39579 0.5 6.80413V49.2C0.5 51.6083 1.8875 53.6833 4.125 54.6166C4.875 54.9291 5.65833 55.0833 6.4375 55.0833C7.97083 55.0833 9.475 54.4875 10.6083 53.3666L32.0875 32.1708C33.2125 31.0583 33.8333 29.5791 33.8333 28.0041C33.8333 26.4291 33.2125 24.95 32.0875 23.8375L10.6083 2.63746ZM29.1583 29.2L7.68333 50.3958C6.89583 51.175 5.99167 50.875 5.72917 50.7666C5.40833 50.6333 4.66667 50.2125 4.66667 49.1958V6.80413C4.66667 5.78746 5.4125 5.36663 5.72917 5.23329C5.85417 5.18329 6.125 5.08746 6.4625 5.08746C6.82917 5.08746 7.27083 5.19996 7.68333 5.60413L29.1583 26.8C29.4875 27.1208 29.6667 27.55 29.6667 28C29.6667 28.45 29.4875 28.8791 29.1583 29.2Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>
            </a>
            <div className={styles.imagesWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.imagesWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.videoWrapper}
              href="https://www.youtube.com/watch?v=z11UnYDROTg"
            >
              <Image src={videoImg} alt="" />
              <span className={styles.play}>
                <svg
                  width="34"
                  height="56"
                  viewBox="0 0 34 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6083 2.63746C8.89583 0.945795 6.35 0.458294 4.125 1.38746C1.8875 2.32079 0.5 4.39579 0.5 6.80413V49.2C0.5 51.6083 1.8875 53.6833 4.125 54.6166C4.875 54.9291 5.65833 55.0833 6.4375 55.0833C7.97083 55.0833 9.475 54.4875 10.6083 53.3666L32.0875 32.1708C33.2125 31.0583 33.8333 29.5791 33.8333 28.0041C33.8333 26.4291 33.2125 24.95 32.0875 23.8375L10.6083 2.63746ZM29.1583 29.2L7.68333 50.3958C6.89583 51.175 5.99167 50.875 5.72917 50.7666C5.40833 50.6333 4.66667 50.2125 4.66667 49.1958V6.80413C4.66667 5.78746 5.4125 5.36663 5.72917 5.23329C5.85417 5.18329 6.125 5.08746 6.4625 5.08746C6.82917 5.08746 7.27083 5.19996 7.68333 5.60413L29.1583 26.8C29.4875 27.1208 29.6667 27.55 29.6667 28C29.6667 28.45 29.4875 28.8791 29.1583 29.2Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className={`${styles.wrapper} ${styles.lastWrapper}`}>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.videoWrapper}
              href="https://www.youtube.com/watch?v=0YR1FA6k4-8"
            >
              <Image src={videoImg} alt="" />
              <span className={styles.play}>
                <svg
                  width="34"
                  height="56"
                  viewBox="0 0 34 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6083 2.63746C8.89583 0.945795 6.35 0.458294 4.125 1.38746C1.8875 2.32079 0.5 4.39579 0.5 6.80413V49.2C0.5 51.6083 1.8875 53.6833 4.125 54.6166C4.875 54.9291 5.65833 55.0833 6.4375 55.0833C7.97083 55.0833 9.475 54.4875 10.6083 53.3666L32.0875 32.1708C33.2125 31.0583 33.8333 29.5791 33.8333 28.0041C33.8333 26.4291 33.2125 24.95 32.0875 23.8375L10.6083 2.63746ZM29.1583 29.2L7.68333 50.3958C6.89583 51.175 5.99167 50.875 5.72917 50.7666C5.40833 50.6333 4.66667 50.2125 4.66667 49.1958V6.80413C4.66667 5.78746 5.4125 5.36663 5.72917 5.23329C5.85417 5.18329 6.125 5.08746 6.4625 5.08746C6.82917 5.08746 7.27083 5.19996 7.68333 5.60413L29.1583 26.8C29.4875 27.1208 29.6667 27.55 29.6667 28C29.6667 28.45 29.4875 28.8791 29.1583 29.2Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>
            </a>
            <div className={styles.imagesWrapper}>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
              <div className={styles.imgWrapper}>
                <Image src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={`${styles.container} container`}>
            <SwiperComponent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
