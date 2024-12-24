import Image from "next/image";
import styles from "./Collaboration.module.scss";
import cooperation1 from "@/public/cooperation/cooperation1.png";
import cooperation2 from "@/public/cooperation/cooperation2.png";
import cooperation3 from "@/public/cooperation/cooperation3.png";

const Collaboration = () => {
  return (
    <section className={styles.cooperation}>
      <div className={`${styles.cooperationContainer} container`}>
        <h2 className={`${styles.cooperationTitle} def-title`}>
          Сотрудничество
          <br />
          <span>
            c Интер
            <span>билим</span>
          </span>
        </h2>
        <p className={styles.cooperationText}>
          Присоединяйтесь к нашей миссии! Мы предлагаем три формата
          сотрудничества, чтобы каждый мог внести свой вклад в развитие важных
          инициатив.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={cooperation1} alt="" />
            </div>
            <h3 className={styles.cooperationInnerTitle}>Партнерство</h3>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={cooperation2} alt="" />
            </div>
            <h3 className={styles.cooperationInnerTitle}>Пожертвоание</h3>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={cooperation3} alt="" />
            </div>
            <h3 className={styles.cooperationInnerTitle}>Волонтерство</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Collaboration;
