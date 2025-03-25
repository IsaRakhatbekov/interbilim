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
import thirdGallery15 from "@/public/gallery/SchoolOfLeadership2006_2011/15.webp";
import thirdGallery16 from "@/public/gallery/SchoolOfLeadership2006_2011/16.webp";
import thirdGallery17 from "@/public/gallery/SchoolOfLeadership2006_2011/17.webp";
import thirdGallery18 from "@/public/gallery/SchoolOfLeadership2006_2011/18.webp";
import thirdGallery19 from "@/public/gallery/SchoolOfLeadership2006_2011/19.webp";
import thirdGallery21 from "@/public/gallery/SchoolOfLeadership2006_2011/21.webp";
import thirdGallery22 from "@/public/gallery/SchoolOfLeadership2006_2011/22.webp";
import thirdGallery23 from "@/public/gallery/SchoolOfLeadership2006_2011/23.webp";
import thirdGallery24 from "@/public/gallery/SchoolOfLeadership2006_2011/24.webp";
import thirdGallery25 from "@/public/gallery/SchoolOfLeadership2006_2011/25.webp";
import thirdGallery26 from "@/public/gallery/SchoolOfLeadership2006_2011/26.webp";
import thirdGallery27 from "@/public/gallery/SchoolOfLeadership2006_2011/27.webp";
import thirdGallery28 from "@/public/gallery/SchoolOfLeadership2006_2011/28.webp";
import thirdGallery29 from "@/public/gallery/SchoolOfLeadership2006_2011/29.webp";

import fourthGallery1 from "@/public/gallery/SupportForCivilSocietyActivists/1.webp";
import fourthGallery2 from "@/public/gallery/SupportForCivilSocietyActivists/2.webp";
import fourthGallery3 from "@/public/gallery/SupportForCivilSocietyActivists/3.webp";
import fourthGallery4 from "@/public/gallery/SupportForCivilSocietyActivists/4.webp";
import fourthGallery5 from "@/public/gallery/SupportForCivilSocietyActivists/5.webp";

import fifthGallery1 from "@/public/gallery/MobileGroupsExplAiningTheConstituTionOf_2010/1.webp";
import fifthGallery2 from "@/public/gallery/MobileGroupsExplAiningTheConstituTionOf_2010/2.webp";
import fifthGallery3 from "@/public/gallery/MobileGroupsExplAiningTheConstituTionOf_2010/3.webp";

import sixthGallery1 from "@/public/gallery/young/1.jpg";
import sixthGallery2 from "@/public/gallery/young/2.jpg";
import sixthGallery3 from "@/public/gallery/young/3.jpg";
import sixthGallery4 from "@/public/gallery/young/4.jpg";
import sixthGallery5 from "@/public/gallery/young/5.jpg";
import sixthGallery6 from "@/public/gallery/young/6.jpg";
import sixthGallery7 from "@/public/gallery/young/7.jpg";
import sixthGallery8 from "@/public/gallery/young/8.jpg";
import sixthGallery9 from "@/public/gallery/young/9.jpg";
import sixthGallery10 from "@/public/gallery/young/10.jpg";
import sixthGallery11 from "@/public/gallery/young/11.jpg";
import sixthGallery12 from "@/public/gallery/young/12.jpg";
import sixthGallery13 from "@/public/gallery/young/13.jpg";
import sixthGallery14 from "@/public/gallery/young/14.jpg";
import sixthGallery15 from "@/public/gallery/young/15.jpg";
import sixthGallery16 from "@/public/gallery/young/16.jpg";
import sixthGallery17 from "@/public/gallery/young/17.jpg";
import sixthGallery18 from "@/public/gallery/young/18.jpg";
import sixthGallery19 from "@/public/gallery/young/19.jpg";
import sixthGallery20 from "@/public/gallery/young/20.jpg";
import sixthGallery21 from "@/public/gallery/young/21.jpg";
import sixthGallery22 from "@/public/gallery/young/22.jpg";
import sixthGallery23 from "@/public/gallery/young/23.jpg";
import sixthGallery24 from "@/public/gallery/young/24.jpg";
import sixthGallery25 from "@/public/gallery/young/25.jpg";
import sixthGallery26 from "@/public/gallery/young/26.jpg";
import sixthGallery27 from "@/public/gallery/young/27.jpg";
import sixthGallery28 from "@/public/gallery/young/28.jpg";
import sixthGallery29 from "@/public/gallery/young/29.jpg";
import sixthGallery30 from "@/public/gallery/young/30.jpg";
import sixthGallery31 from "@/public/gallery/young/31.jpg";
import sixthGallery32 from "@/public/gallery/young/32.jpg";
import sixthGallery33 from "@/public/gallery/young/33.jpg";
import sixthGallery34 from "@/public/gallery/young/34.jpg";
import sixthGallery35 from "@/public/gallery/young/35.jpg";
import sixthGallery36 from "@/public/gallery/young/36.jpg";
import sixthGallery37 from "@/public/gallery/young/37.jpg";
import sixthGallery38 from "@/public/gallery/young/38.jpg";
import sixthGallery39 from "@/public/gallery/young/39.jpg";
import sixthGallery40 from "@/public/gallery/young/40.jpg";
import sixthGallery41 from "@/public/gallery/young/41.jpg";
import sixthGallery42 from "@/public/gallery/young/42.jpg";
import sixthGallery43 from "@/public/gallery/young/43.jpg";
import sixthGallery44 from "@/public/gallery/young/44.jpg";
import sixthGallery45 from "@/public/gallery/young/45.jpg";
import sixthGallery46 from "@/public/gallery/young/46.jpg";
import sixthGallery47 from "@/public/gallery/young/47.jpg";
import sixthGallery48 from "@/public/gallery/young/48.jpg";
import sixthGallery49 from "@/public/gallery/young/49.jpg";

import seventhGaller1 from "@/public/gallery/PassportToSuccess/1.webp";
import seventhGaller2 from "@/public/gallery/PassportToSuccess/2.webp";
import seventhGaller3 from "@/public/gallery/PassportToSuccess/3.webp";
import seventhGaller4 from "@/public/gallery/PassportToSuccess/4.webp";
import seventhGaller5 from "@/public/gallery/PassportToSuccess/5.webp";
import seventhGaller6 from "@/public/gallery/PassportToSuccess/6.webp";
import seventhGaller7 from "@/public/gallery/PassportToSuccess/7.webp";
import seventhGaller8 from "@/public/gallery/PassportToSuccess/8.webp";
import seventhGaller9 from "@/public/gallery/PassportToSuccess/9.webp";
import seventhGaller10 from "@/public/gallery/PassportToSuccess/10.webp";
import seventhGaller11 from "@/public/gallery/PassportToSuccess/11.webp";
import seventhGaller12 from "@/public/gallery/PassportToSuccess/12.webp";
import seventhGaller13 from "@/public/gallery/PassportToSuccess/13.webp";
import seventhGaller14 from "@/public/gallery/PassportToSuccess/14.webp";
import seventhGaller15 from "@/public/gallery/PassportToSuccess/15.webp";
import seventhGaller16 from "@/public/gallery/PassportToSuccess/16.webp";

import eighthGallery1 from "@/public/gallery/DemocracyCampInTheChuiRegion/1.webp";
import eighthGallery2 from "@/public/gallery/DemocracyCampInTheChuiRegion/2.webp";
import eighthGallery3 from "@/public/gallery/DemocracyCampInTheChuiRegion/3.webp";
import eighthGallery4 from "@/public/gallery/DemocracyCampInTheChuiRegion/4.webp";
import eighthGallery5 from "@/public/gallery/DemocracyCampInTheChuiRegion/5.webp";
import eighthGallery6 from "@/public/gallery/DemocracyCampInTheChuiRegion/6.webp";
import eighthGallery7 from "@/public/gallery/DemocracyCampInTheChuiRegion/7.webp";
import eighthGallery8 from "@/public/gallery/DemocracyCampInTheChuiRegion/8.webp";
import eighthGallery9 from "@/public/gallery/DemocracyCampInTheChuiRegion/9.webp";

import ninthGAllery1 from "@/public/gallery/DemocracyAndYouth/1.webp";
import ninthGAllery2 from "@/public/gallery/DemocracyAndYouth/2.webp";
import ninthGAllery3 from "@/public/gallery/DemocracyAndYouth/3.webp";
import ninthGAllery4 from "@/public/gallery/DemocracyAndYouth/4.webp";
import ninthGAllery5 from "@/public/gallery/DemocracyAndYouth/5.webp";
import ninthGAllery6 from "@/public/gallery/DemocracyAndYouth/6.webp";
import ninthGAllery7 from "@/public/gallery/DemocracyAndYouth/7.webp";
import ninthGAllery8 from "@/public/gallery/DemocracyAndYouth/8.webp";
import ninthGAllery9 from "@/public/gallery/DemocracyAndYouth/9.webp";
import ninthGAllery10 from "@/public/gallery/DemocracyAndYouth/10.webp";
import ninthGAllery11 from "@/public/gallery/DemocracyAndYouth/11.webp";
import ninthGAllery12 from "@/public/gallery/DemocracyAndYouth/12.webp";
import ninthGAllery13 from "@/public/gallery/DemocracyAndYouth/13.webp";
import ninthGAllery14 from "@/public/gallery/DemocracyAndYouth/14.webp";
import ninthGAllery15 from "@/public/gallery/DemocracyAndYouth/15.webp";
import ninthGAllery16 from "@/public/gallery/DemocracyAndYouth/16.webp";
import ninthGAllery17 from "@/public/gallery/DemocracyAndYouth/17.webp";
import ninthGAllery18 from "@/public/gallery/DemocracyAndYouth/18.webp";
import ninthGAllery19 from "@/public/gallery/DemocracyAndYouth/19.webp";
import ninthGAllery20 from "@/public/gallery/DemocracyAndYouth/20.webp";
import ninthGAllery21 from "@/public/gallery/DemocracyAndYouth/21.webp";
import ninthGAllery22 from "@/public/gallery/DemocracyAndYouth/22.webp";
import ninthGAllery23 from "@/public/gallery/DemocracyAndYouth/23.webp";
import ninthGAllery24 from "@/public/gallery/DemocracyAndYouth/24.webp";
import ninthGAllery25 from "@/public/gallery/DemocracyAndYouth/25.webp";
import ninthGAllery26 from "@/public/gallery/DemocracyAndYouth/26.webp";
import ninthGAllery27 from "@/public/gallery/DemocracyAndYouth/27.webp";
import ninthGAllery28 from "@/public/gallery/DemocracyAndYouth/28.webp";
import ninthGAllery29 from "@/public/gallery/DemocracyAndYouth/29.webp";
import ninthGAllery30 from "@/public/gallery/DemocracyAndYouth/30.webp";
import ninthGAllery31 from "@/public/gallery/DemocracyAndYouth/31.webp";
import ninthGAllery32 from "@/public/gallery/DemocracyAndYouth/32.webp";

import tenthGallery1 from "@/public/gallery/projects/1.webp";
import tenthGallery2 from "@/public/gallery/projects/2.webp";
import tenthGallery3 from "@/public/gallery/projects/3.webp";
import tenthGallery4 from "@/public/gallery/projects/4.webp";
import tenthGallery5 from "@/public/gallery/projects/5.webp";
import tenthGallery6 from "@/public/gallery/projects/6.webp";
import tenthGallery7 from "@/public/gallery/projects/7.webp";
import tenthGallery8 from "@/public/gallery/projects/8.webp";
import tenthGallery9 from "@/public/gallery/projects/9.webp";
import tenthGallery10 from "@/public/gallery/projects/10.webp";
import tenthGallery11 from "@/public/gallery/projects/11.webp";
import tenthGallery12 from "@/public/gallery/projects/12.webp";
import tenthGallery13 from "@/public/gallery/projects/13.webp";
import tenthGallery14 from "@/public/gallery/projects/14.webp";
import tenthGallery15 from "@/public/gallery/projects/15.webp";
import tenthGallery16 from "@/public/gallery/projects/16.webp";
import tenthGallery17 from "@/public/gallery/projects/17.webp";
import tenthGallery18 from "@/public/gallery/projects/18.webp";
import tenthGallery19 from "@/public/gallery/projects/19.webp";
import tenthGallery20 from "@/public/gallery/projects/20.webp";
import tenthGallery21 from "@/public/gallery/projects/21.webp";
import tenthGallery22 from "@/public/gallery/projects/22.webp";
import tenthGallery23 from "@/public/gallery/projects/23.webp";
import tenthGallery24 from "@/public/gallery/projects/24.webp";
import tenthGallery25 from "@/public/gallery/projects/25.webp";
import tenthGallery26 from "@/public/gallery/projects/26.webp";
import tenthGallery27 from "@/public/gallery/projects/27.webp";
import tenthGallery28 from "@/public/gallery/projects/28.webp";
import tenthGallery29 from "@/public/gallery/projects/29.webp";
import tenthGallery30 from "@/public/gallery/projects/30.webp";
import tenthGallery31 from "@/public/gallery/projects/31.webp";
import tenthGallery32 from "@/public/gallery/projects/32.webp";
import tenthGallery33 from "@/public/gallery/projects/33.webp";
import tenthGallery34 from "@/public/gallery/projects/34.webp";
import tenthGallery35 from "@/public/gallery/projects/35.webp";
import tenthGallery36 from "@/public/gallery/projects/36.webp";
import tenthGallery37 from "@/public/gallery/projects/37.webp";
import tenthGallery38 from "@/public/gallery/projects/38.webp";
import tenthGallery39 from "@/public/gallery/projects/39.webp";
import tenthGallery40 from "@/public/gallery/projects/40.webp";
import tenthGallery41 from "@/public/gallery/projects/41.webp";
import tenthGallery42 from "@/public/gallery/projects/42.webp";
import tenthGallery43 from "@/public/gallery/projects/43.webp";
import tenthGallery44 from "@/public/gallery/projects/44.webp";
import tenthGallery45 from "@/public/gallery/projects/45.webp";
import tenthGallery46 from "@/public/gallery/projects/46.webp";
import tenthGallery47 from "@/public/gallery/projects/47.webp";
import tenthGallery48 from "@/public/gallery/projects/48.webp";
import tenthGallery49 from "@/public/gallery/projects/49.webp";
import tenthGallery50 from "@/public/gallery/projects/50.webp";
import tenthGallery51 from "@/public/gallery/projects/51.webp";
import tenthGallery52 from "@/public/gallery/projects/52.webp";
import tenthGallery53 from "@/public/gallery/projects/53.webp";

import eleventhGallery1 from "@/public/gallery/differentPhotos/1.webp";
import eleventhGallery2 from "@/public/gallery/differentPhotos/2.webp";
import eleventhGallery3 from "@/public/gallery/differentPhotos/3.webp";
import eleventhGallery4 from "@/public/gallery/differentPhotos/4.webp";
import eleventhGallery5 from "@/public/gallery/differentPhotos/5.webp";
import eleventhGallery6 from "@/public/gallery/differentPhotos/6.webp";
import eleventhGallery7 from "@/public/gallery/differentPhotos/7.webp";
import eleventhGallery8 from "@/public/gallery/differentPhotos/8.webp";
import eleventhGallery9 from "@/public/gallery/differentPhotos/9.webp";
import eleventhGallery10 from "@/public/gallery/differentPhotos/10.webp";
import eleventhGallery11 from "@/public/gallery/differentPhotos/11.webp";
import eleventhGallery12 from "@/public/gallery/differentPhotos/12.webp";
import eleventhGallery13 from "@/public/gallery/differentPhotos/13.webp";
import eleventhGallery14 from "@/public/gallery/differentPhotos/14.webp";
import eleventhGallery15 from "@/public/gallery/differentPhotos/15.webp";
import eleventhGallery16 from "@/public/gallery/differentPhotos/16.webp";
import eleventhGallery17 from "@/public/gallery/differentPhotos/17.webp";
import eleventhGallery18 from "@/public/gallery/differentPhotos/18.webp";
import eleventhGallery19 from "@/public/gallery/differentPhotos/19.webp";
import eleventhGallery20 from "@/public/gallery/differentPhotos/20.webp";

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
            <Image src={gallery1} alt="" loading="lazy" />
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
            <Image src={gallery6} alt="" loading="lazy" />
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
            <Image src={gallery7} alt="" loading="lazy" />
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
            <div
              className={styles.imgWrapper}
              onClick={() =>
                openGallery([
                  fourthGallery1,
                  fourthGallery2,
                  fourthGallery3,
                  fourthGallery4,
                  fourthGallery5,
                ])
              }
            >
              <Image
                src={gallery8}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
                openGallery([fifthGallery1, fifthGallery2, fifthGallery3])
              }
            >
              <Image
                src={gallery9}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
                  sixthGallery1,
                  sixthGallery2,
                  sixthGallery3,
                  sixthGallery4,
                  sixthGallery5,
                  sixthGallery6,
                  sixthGallery7,
                  sixthGallery8,
                  sixthGallery9,
                  sixthGallery10,
                  sixthGallery11,
                  sixthGallery12,
                  sixthGallery13,
                  sixthGallery14,
                  sixthGallery15,
                  sixthGallery16,
                  sixthGallery17,
                  sixthGallery18,
                  sixthGallery19,
                  sixthGallery20,
                  sixthGallery21,
                  sixthGallery22,
                  sixthGallery23,
                  sixthGallery24,
                  sixthGallery25,
                  sixthGallery26,
                  sixthGallery27,
                  sixthGallery28,
                  sixthGallery29,
                  sixthGallery30,
                  sixthGallery31,
                  sixthGallery32,
                  sixthGallery33,
                  sixthGallery34,
                  sixthGallery35,
                  sixthGallery36,
                  sixthGallery37,
                  sixthGallery38,
                  sixthGallery39,
                  sixthGallery40,
                  sixthGallery41,
                  sixthGallery42,
                  sixthGallery43,
                  sixthGallery44,
                  sixthGallery45,
                  sixthGallery46,
                  sixthGallery47,
                  sixthGallery48,
                  sixthGallery49,
                ])
              }
            >
              <Image
                src={gallery10}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
                  seventhGaller1,
                  seventhGaller2,
                  seventhGaller3,
                  seventhGaller4,
                  seventhGaller5,
                  seventhGaller6,
                  seventhGaller7,
                  seventhGaller8,
                  seventhGaller9,
                  seventhGaller10,
                  seventhGaller11,
                  seventhGaller12,
                  seventhGaller13,
                  seventhGaller14,
                  seventhGaller15,
                  seventhGaller16,
                ])
              }
            >
              <Image
                src={gallery11}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
            href="https://www.youtube.com/watch?v=z11UnYDROTg"
          >
            <Image src={gallery12} alt="" loading="lazy" />
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
            <Image src={gallery13} alt="" loading="lazy" />
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
            <div
              className={styles.imgWrapper}
              onClick={() =>
                openGallery([
                  eighthGallery1,
                  eighthGallery2,
                  eighthGallery3,
                  eighthGallery4,
                  eighthGallery5,
                  eighthGallery6,
                  eighthGallery7,
                  eighthGallery8,
                  eighthGallery9,
                ])
              }
            >
              <Image
                src={gallery14}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
                  ninthGAllery1,
                  ninthGAllery2,
                  ninthGAllery3,
                  ninthGAllery4,
                  ninthGAllery5,
                  ninthGAllery6,
                  ninthGAllery7,
                  ninthGAllery8,
                  ninthGAllery9,
                  ninthGAllery10,
                  ninthGAllery11,
                  ninthGAllery12,
                  ninthGAllery13,
                  ninthGAllery14,
                  ninthGAllery15,
                  ninthGAllery16,
                  ninthGAllery17,
                  ninthGAllery18,
                  ninthGAllery19,
                  ninthGAllery20,
                  ninthGAllery21,
                  ninthGAllery22,
                  ninthGAllery23,
                  ninthGAllery24,
                  ninthGAllery25,
                  ninthGAllery26,
                  ninthGAllery27,
                  ninthGAllery28,
                  ninthGAllery29,
                  ninthGAllery30,
                  ninthGAllery31,
                  ninthGAllery32,
                ])
              }
            >
              <Image
                src={gallery15}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
                  tenthGallery1,
                  tenthGallery2,
                  tenthGallery3,
                  tenthGallery4,
                  tenthGallery5,
                  tenthGallery6,
                  tenthGallery7,
                  tenthGallery8,
                  tenthGallery9,
                  tenthGallery10,
                  tenthGallery11,
                  tenthGallery12,
                  tenthGallery13,
                  tenthGallery14,
                  tenthGallery15,
                  tenthGallery16,
                  tenthGallery17,
                  tenthGallery18,
                  tenthGallery19,
                  tenthGallery20,
                  tenthGallery21,
                  tenthGallery22,
                  tenthGallery23,
                  tenthGallery24,
                  tenthGallery25,
                  tenthGallery26,
                  tenthGallery27,
                  tenthGallery28,
                  tenthGallery29,
                  tenthGallery30,
                  tenthGallery31,
                  tenthGallery32,
                  tenthGallery33,
                  tenthGallery34,
                  tenthGallery35,
                  tenthGallery36,
                  tenthGallery37,
                  tenthGallery38,
                  tenthGallery39,
                  tenthGallery40,
                  tenthGallery41,
                  tenthGallery42,
                  tenthGallery43,
                  tenthGallery44,
                  tenthGallery45,
                  tenthGallery46,
                  tenthGallery47,
                  tenthGallery48,
                  tenthGallery49,
                  tenthGallery50,
                  tenthGallery51,
                  tenthGallery52,
                  tenthGallery53,
                ])
              }
            >
              <Image
                src={gallery16}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
                  eleventhGallery1,
                  eleventhGallery2,
                  eleventhGallery3,
                  eleventhGallery4,
                  eleventhGallery5,
                  eleventhGallery6,
                  eleventhGallery7,
                  eleventhGallery8,
                  eleventhGallery9,
                  eleventhGallery10,
                  eleventhGallery11,
                  eleventhGallery12,
                  eleventhGallery13,
                  eleventhGallery14,
                  eleventhGallery15,
                  eleventhGallery16,
                  eleventhGallery17,
                  eleventhGallery18,
                  eleventhGallery19,
                  eleventhGallery20,
                ])
              }
            >
              <Image
                src={gallery17}
                alt="Gallery Image 4"
                width={300}
                height={200}
                loading="lazy"
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
            href="https://www.youtube.com/watch?v=z11UnYDROTg"
          >
            <Image src={gallery18} alt="" loading="lazy" />
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
            <Image src={gallery19} alt="" loading="lazy" />
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
              <Image src={gallery20} alt="" loading="lazy" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={gallery21} alt="" loading="lazy" />
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
