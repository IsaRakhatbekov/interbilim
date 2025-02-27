import Image from "next/image";
import styles from "./Introduction.module.scss";
import introduction from "@/public/introdaction/introdaction.png";
import introductio2 from "@/public/introdaction/introdaction2.png";
import introductio3 from "@/public/introdaction/introdaction3.png";
import introductio4 from "@/public/introdaction/introdaction4.png";
import introductio5 from "@/public/introdaction/introdaction5.png";

export const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={`${styles.introductionContainer} container`}>
        <h2 className={`${styles.introductionTitle} secondDef-title`}>
          О на<span>с</span>
        </h2>
        <div className={styles.archive}>
          <div className={styles.archiveImageWrapper}>
            <div className={styles.archiveImg}>
              <Image src={introduction} alt="" />
            </div>
            <span>Архивное фото</span>
          </div>
          <div className={styles.archiveContent}>
            <h3 className={styles.archiveTitle}>
              ОО «Международный Центр Интербилим» - первая организация
              в Кыргызстане, поддерживающая системное развитие НПО сектора,
              зарегистрировавшаяся в Министерстве Юстиции в феврале 1994 года.
            </h3>
            <p className={`${styles.archiveText} ${styles.introductionText}`}>
              За 30 лет «МЦ Интербилим» сыграл значительную роль в становлении
              и укреплении третьего сектора, содействуя формированию активного
              и сознательного гражданского общества.
            </p>
            <p className={`${styles.archiveText} ${styles.introductionText}`}>
              С первых дней своей работы «МЦ Интербилим» активно развивал
              и поддерживал организации гражданского общества, укрепляя
              их потенциал через информационную, консультационную и юридическую,
              техническую помощь.
            </p>
          </div>
        </div>
        <p
          className={`${styles.introductionText} ${styles.introductionTextTop}`}
        >
          С этого времени «МЦ Интербилим» поддерживал активистов и лидеров
          Инициативных групп, делился инновационными подходами к адвокации
          и привлекал к общественному участию. Проекты «МЦ Интербилим» стали
          наглядным примером для обучения и вдохновения новых участников
          гражданского сектора.
        </p>
        <p className={styles.introductionText}>
          «МЦ Интербилим» благодарен доверию партнёров из НКО и государственного
          сектора, признающим профессионализм организации и его огромную
          мотивацию способствовать улучшению жизни своих бенефициариев —
          благополучателей. Только благодаря сотрудничеству с партнёрами
          из НКО сектора «МЦ Интербилим» внёс вклад в развитие гражданского
          общества в Кыргызстане через усиление потенциала НКО и гражданских
          активистов, оказывая содействие улучшению государственного управления
          через мониторинг, выработку рекомендаций и социальное партнёрство.
        </p>
        <div className={styles.audience}>
          <div className={styles.audienceTop}>
            <div className={styles.audienceContent}>
              <h3 className={styles.audienceTitle}>Наша целевая аудитория</h3>
              <p className={styles.audienceText}>
                Целевыми группами «МЦ Интербилим» являются граждане Кыргызстана,
                включая женщин и мужчин, подростков и молодёжь, независимо
                от возраста, национальности, статуса, вероисповедания, гендерной
                принадлежности, языка, Некоммерческие и неправительственные
                организации (НКО и НПО), Инициативные группы и организации
                общинного типа, др.
              </p>
            </div>
            <div className={styles.audienceImg}>
              <Image src={introductio2} alt="" />
            </div>
          </div>
          <ul className={styles.audienceList}>
            <li className={styles.audienceImageWrapper}>
              <Image src={introductio3} alt="" />
            </li>
            <li className={styles.audienceImageWrapper}>
              <Image src={introductio4} alt="" />
            </li>
            <li className={styles.audienceImageWrapper}>
              <Image src={introductio5} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
