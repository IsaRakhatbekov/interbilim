import Image from "next/image";
import styles from "./HomeAbout.module.scss";
import bigImg from "@/public/about/acquaintance-big.png";
import acquaintanceFirst from "@/public/about/acquaintance-1.png";
import acquaintanceSecond from "@/public/about/acquaintance-2.png";
import acquaintanceLong from "@/public/about/acquaintance-3.png";
import partnersBig from "@/public/about/partnersBigImg.png";
import partnersFirst from "@/public/about/partnersFirst.png";
import partnersSecond from "@/public/about/partnersSecond.png";
import partnersThird from "@/public/about/partnersThird.png";

const homeAbout = () => {
  return (
    <section className={styles.about}>
      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.acquaintance}>
          <h2 className={`${styles.acquaintanceTitle} def-title`}>
            Знакомство <br />
            <span>
              c Интер<span>билим</span>
            </span>
          </h2>
          <ul className={styles.acquaintanceWrapper}>
            <li
              className={`${styles.acquaintanceItem} ${styles.acquaintanceImagesWrapper}`}
            >
              <div className={styles.bigImg}>
                <Image src={bigImg} alt="" />
              </div>
              <div className={`${styles.littleImg} ${styles.littleImgFirst}`}>
                <Image src={acquaintanceFirst} alt="" />
              </div>
              <div className={`${styles.littleImg} ${styles.littleImgSecond}`}>
                <Image src={acquaintanceSecond} alt="" />
              </div>
              <div className={`${styles.littleImg} ${styles.littleImgLong}`}>
                <Image src={acquaintanceLong} alt="" />
              </div>
            </li>
            <li
              className={`${styles.acquaintanceItem} ${styles.acquaintanceContent}`}
            >
              <h3 className={styles.acquaintanceInnerTitle}>
                ОО «Международный Центр Интербилим» - первая организация в
                Кыргызстане, поддерживающая системное развитие НПО сектора,
                зарегистрировавшаяся в Министерстве Юстиции в феврале 1994 года.
              </h3>
              <p className={styles.acquaintanceText}>
                За 30 лет «МЦ Интербилим» сыграл значительную роль в становлении
                и укреплении третьего сектора, содействуя формированию активного
                и сознательного гражданского общества.
              </p>
              <p className={styles.acquaintanceText}>
                Сотрудничая с органами власти, разрабатываем и внедряем
                механизмы для эффективной реализации местных и государственных
                политик, учитывающих права граждан. Мы продвигаем инновационные
                инструменты, обеспечивающие прозрачность и подотчетность,
                возрождаем неработающие системы на местах и предлагаем
                современные, действенные подходы к управлению на локальном
                уровне в разных общественно-значимых вопросах.
              </p>
              <button className={styles.acquaintanceBtn}>Подробнее</button>
            </li>
          </ul>
        </div>
        <div className={styles.partners}>
          <h2 className={`${styles.acquaintanceTitle} def-title`}>
            С кем мы <br />
            <span>
              <span>рабо</span>таем
            </span>
          </h2>
          <ul className={styles.partnersList}>
            <li className={styles.partnersContent}>
              <p className={styles.partnersText}>
                Целевыми группами «МЦ Интербилим» являются граждане Кыргызстана,
                включая женщин и мужчин, подростков и молодежь, независимо от
                возраста, национальности, статуса, вероисповедания, гендерной
                принадлежности, языка, Некоммерческие и неправительственные
                организации (НКО и НПО), Инициативные группы и организации
                общинного типа.
              </p>
            </li>
            <li className={styles.partnersImagesWrapper}>
              <div className={styles.partnersBigImg}>
                <Image src={partnersBig} alt="" />
              </div>
              <div className={styles.partnersFirst}>
                <Image src={partnersFirst} alt="" />
              </div>
              <div className={styles.partnersSecond}>
                <Image src={partnersSecond} alt="" />
              </div>
              <div className={styles.partnersThird}>
                <Image src={partnersThird} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default homeAbout;
