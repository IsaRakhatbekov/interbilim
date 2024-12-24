import Image from "next/image";
import styles from "./Donation.module.scss";
import donation from "@/public/cooperation/donation.png";

export const Donation = () => {
  return (
    <section className={styles.donation}>
      <div className={`${styles.donationContainer} container`}>
        <h2 className={`${styles.donationTitle} secondDef-title`}>
          Пожерт<span>вование</span>
        </h2>

        <div className={styles.donationWrapper}>
          <div className={styles.donationContent}>
            <h3 className={styles.donationInnerTitle}>
              Поддержите наши инициативы, чтобы мы могли продолжать важную
              работу.
            </h3>
            <span className={styles.innerTitle}>Что вы получите:</span>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p>Уверенность, что ваш вклад идет на пользу важным делам.</p>
              </li>
              <li className={styles.item}>
                <p>
                  Благодарность от нашей команды и людей, которым мы помогаем.
                </p>
              </li>
              <li className={styles.item}>
                <p>Прозрачность в отчетах о распределении средств.</p>
              </li>
            </ul>
            <span className={styles.innerTitle}>Что нужно делать:</span>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p>
                  Выбрать удобный способ для пожертвования (перевод,
                  онлайн-платеж и др.).
                </p>
              </li>
              <li className={styles.item}>
                <p>
                  Поддерживать проекты в области экологии, прав человека и
                  развития гражданского общества.
                </p>
              </li>
              <li className={styles.item}>
                <p>Разовая или регулярная поддержка – любой вклад важен!</p>
              </li>
            </ul>
          </div>
          <div className={styles.donationImgWrapper}>
            <Image src={donation} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
