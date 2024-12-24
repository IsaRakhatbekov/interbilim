import Image from "next/image";
import styles from "./Partners.module.scss";
import partners1 from "@/public/partners/1.png";
import partners2 from "@/public/partners/2.png";
import partners3 from "@/public/partners/3.png";
import partners4 from "@/public/partners/4.png";
import partners5 from "@/public/partners/5.png";
import partners6 from "@/public/partners/6.png";
import partners7 from "@/public/partners/7.png";
import partners8 from "@/public/partners/8.png";
import partners9 from "@/public/partners/9.png";
import partners10 from "@/public/partners/10.png";
import partners11 from "@/public/partners/11.png";
import partners12 from "@/public/partners/12.png";
import partners13 from "@/public/partners/13.png";
import partners14 from "@/public/partners/14.png";
import partners15 from "@/public/partners/15.png";
import partners16 from "@/public/partners/16.png";
import partners17 from "@/public/partners/17.png";

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={`${styles.partnersContainer} container`}>
        <h2 className={`${styles.partnersTitle} def-title`}>
          Наши
          <br />
          <span>
            пар
            <span>тнеры</span>
          </span>
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={partners1} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners2} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners3} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners4} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners5} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners6} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners7} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners8} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners9} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners10} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners11} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners12} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners13} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners14} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners15} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners16} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={partners17} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Partners;
