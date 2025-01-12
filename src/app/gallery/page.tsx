import Image from "next/image";
import styles from "./page.module.scss";
import img from "@/public/certificates/certificates15.png";
import imgVideo from "@/public/galleryVideo.png";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.gallery}>
          <div className={`${styles.container} container`}>
            <div className={styles.heroVideo}></div>
            <div className={styles.wrapper}>
              <div className={styles.littleVideoWrapper}>
                <Image src={imgVideo} alt="" />
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.videoWrapper}>
                  <Image src={img} alt="" width={370} height={400} />
                </div>
                <div className={styles.imgWrapper}>
                  <Image src={img} alt="" width={370} height={400} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
