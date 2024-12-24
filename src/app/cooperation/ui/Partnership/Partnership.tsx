import Image from "next/image";
import styles from "./Partnership.module.scss";
import partnership from "@/public/cooperation/partnership.png";

export const Partnership = () => {
  return (
    <section className={styles.partnership}>
      <div className={`${styles.partnershipContainer} container`}>
        <h2 className={`${styles.partnershipTitle} secondDef-title`}>
          <span>Парт</span>нерство
        </h2>
        <div className={styles.partnershipWrapper}>
          <div className={styles.imgWrapper}>
            <Image src={partnership} alt="" />
          </div>
          <div className={styles.partnershipContent}>
            <h3 className={styles.partnershipInnerTitle}>
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
        </div>
      </div>
    </section>
  );
};
