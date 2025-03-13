"use client";
import styles from "./page.module.scss";
import Image, { StaticImageData } from "next/image";
import SwiperComponent from "./ui/SwiperComponent/SwiperComponent";
import gallery1 from "@/public/gallery/1.png";
import gallery2 from "@/public/gallery/2.png";
import gallery3 from "@/public/gallery/3.png";
import gallery4 from "@/public/gallery/4.png";
import gallery5 from "@/public/gallery/5.png";
import gallery6 from "@/public/gallery/6.png";
import gallery7 from "@/public/gallery/7.png";
import gallery8 from "@/public/gallery/8.png";
import gallery9 from "@/public/gallery/9.png";
import gallery10 from "@/public/gallery/10.png";
import gallery11 from "@/public/gallery/11.png";
import gallery12 from "@/public/gallery/12.png";
import gallery13 from "@/public/gallery/13.png";
import gallery14 from "@/public/gallery/14.png";
import gallery15 from "@/public/gallery/15.png";
import gallery16 from "@/public/gallery/16.png";
import gallery17 from "@/public/gallery/17.png";
import gallery18 from "@/public/gallery/18.png";
import gallery19 from "@/public/gallery/19.png";
import gallery20 from "@/public/gallery/20.png";
import gallery21 from "@/public/gallery/21.png";
import SecondFooter from "@/src/components/SecondFooter/SecondFooter";
import PhotoGallery from "./ui/PhotoGallery/PhotoGallery";
import { useState } from "react";

import firstGallery1 from "@/public/gallery/TheSchoolOfParliamentarism/1.webp";
import firstGallery2 from "@/public/gallery/TheSchoolOfParliamentarism/2.webp";
import firstGallery3 from "@/public/gallery/TheSchoolOfParliamentarism/3.webp";
import firstGallery4 from "@/public/gallery/TheSchoolOfParliamentarism/4.webp";

import secondGallery1 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/1.jpg";
import secondGallery2 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/2.jpg";
import secondGallery3 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/3.jpg";
import secondGallery4 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/4.jpg";
import secondGallery5 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/5.jpg";
import secondGallery6 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/6.jpg";
import secondGallery7 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/7.jpg";
import secondGallery8 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/8.jpg";
import secondGallery9 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/9.jpg";
import secondGallery10 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/10.jpg";
import secondGallery11 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/11.jpg";
import secondGallery12 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/12.jpg";
import secondGallery13 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/13.jpg";
import secondGallery14 from "@/public/gallery/OrganizationalDeElopmentAndLobbying/14.jpg";

import thirdGallery1 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery2 from "@/public/gallery/SchoolOfLeadership2006_2011/2.webp";
import thirdGallery3 from "@/public/gallery/SchoolOfLeadership2006_2011/3.webp";
import thirdGallery4 from "@/public/gallery/SchoolOfLeadership2006_2011/4.webp";
import thirdGallery5 from "@/public/gallery/SchoolOfLeadership2006_2011/5.webp";
import thirdGallery6 from "@/public/gallery/SchoolOfLeadership2006_2011/6.webp";
import thirdGallery7 from "@/public/gallery/SchoolOfLeadership2006_2011/7.webp";
import thirdGallery8 from "@/public/gallery/SchoolOfLeadership2006_2011/8.webp";
import thirdGallery9 from "@/public/gallery/SchoolOfLeadership2006_2011/9.webp";
import thirdGallery10 from "@/public/gallery/SchoolOfLeadership2006_2011/10.webp";
import thirdGallery11 from "@/public/gallery/SchoolOfLeadership2006_2011/11.webp";
import thirdGallery12 from "@/public/gallery/SchoolOfLeadership2006_2011/12.webp";
import thirdGallery13 from "@/public/gallery/SchoolOfLeadership2006_2011/13.webp";
import thirdGallery14 from "@/public/gallery/SchoolOfLeadership2006_2011/14.webp";
import thirdGallery15 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery16 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery17 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery18 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery19 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery20 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery21 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery22 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery23 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery24 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery25 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery26 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery27 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery28 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";
import thirdGallery29 from "@/public/gallery/SchoolOfLeadership2006_2011/1.webp";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<
    (string | StaticImageData)[]
  >([]);

  const openGallery = (images: (string | StaticImageData)[]) => {
    setSelectedImages(images);
    setIsOpen(true);
  };
  return (
    <>
      <section className={styles.gallery}>
        <a
          className={styles.galleryHero}
          href="https://www.youtube.com/watch?v=PYeCqSw3owY"
          target="_blank"
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
            <Image src={gallery1} alt="" />
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
              <Image
                src={gallery2}
                alt="Gallery Image 4"
                width={300}
                height={200}
              />
              {isOpen && (
                <PhotoGallery
                  images={selectedImages}
                  closeGallery={() => setIsOpen(false)}
                />
              )}
            </div>

            <div
              className={styles.imgWrapper}
              onClick={() =>
                openGallery([
                  firstGallery1,
                  firstGallery2,
                  firstGallery3,
                  firstGallery4,
                ])
              }
            >
              <Image
                src={gallery3}
                alt="Gallery Image 4"
                width={300}
                height={200}
              />
              {isOpen && (
                <PhotoGallery
                  images={selectedImages}
                  closeGallery={() => setIsOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.imagesWrapper}>
            <div
              className={styles.imgWrapper}
              onClick={() =>
                openGallery([
                  secondGallery1,
                  secondGallery2,
                  secondGallery3,
                  secondGallery4,
                  secondGallery5,
                  secondGallery6,
                  secondGallery7,
                  secondGallery8,
                  secondGallery9,
                  secondGallery10,
                  secondGallery11,
                  secondGallery12,
                  secondGallery13,
                  secondGallery14,
                ])
              }
            >
              <Image
                src={gallery4}
                alt="Gallery Image 4"
                width={300}
                height={200}
              />
              {isOpen && (
                <PhotoGallery
                  images={selectedImages}
                  closeGallery={() => setIsOpen(false)}
                />
              )}
            </div>
            <div
              className={styles.imgWrapper}
              onClick={() =>
                openGallery([
                  thirdGallery1,
                  thirdGallery2,
                  thirdGallery3,
                  thirdGallery4,
                  thirdGallery5,
                  thirdGallery6,
                  thirdGallery7,
                  thirdGallery8,
                  thirdGallery9,
                  thirdGallery10,
                  thirdGallery11,
                  thirdGallery12,
                  thirdGallery13,
                  thirdGallery14,
                  thirdGallery15,
                  thirdGallery16,
                  thirdGallery17,
                  thirdGallery18,
                  thirdGallery19,
                  thirdGallery20,
                  thirdGallery21,
                  thirdGallery22,
                  thirdGallery23,
                  thirdGallery24,
                  thirdGallery25,
                  thirdGallery26,
                  thirdGallery27,
                  thirdGallery28,
                  thirdGallery29,
                ])
              }
            >
              <Image
                src={gallery5}
                alt="Gallery Image 4"
                width={300}
                height={200}
              />
              {isOpen && (
                <PhotoGallery
                  images={selectedImages}
                  closeGallery={() => setIsOpen(false)}
                />
              )}
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.videoWrapper}
            href="https://www.youtube.com/watch?v=QY3O26Jj83o"
          >
            <Image src={gallery6} alt="" />
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
            <Image src={gallery7} alt="" />
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
              <Image src={gallery8} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={gallery9} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.imagesWrapper}>
            <div className={styles.imgWrapper}>
              <Image src={gallery10} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={gallery11} alt="" />
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.videoWrapper}
            href="https://www.youtube.com/watch?v=z11UnYDROTg"
          >
            <Image src={gallery12} alt="" />
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
            href="https://www.youtube.com/watch?v=0YR1FA6k4-8"
          >
            <Image src={gallery13} alt="" />
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
              <Image src={gallery14} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={gallery15} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.imagesWrapper}>
            <div className={styles.imgWrapper}>
              <Image src={gallery16} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={gallery17} alt="" />
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.videoWrapper}
            href="https://www.youtube.com/watch?v=z11UnYDROTg"
          >
            <Image src={gallery18} alt="" />
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
            <Image src={gallery19} alt="" />
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
              <Image src={gallery20} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={gallery21} alt="" />
            </div>
          </div>
        </div>
        <SwiperComponent />
      </section>
      <SecondFooter />
    </>
  );
};

export default page;
