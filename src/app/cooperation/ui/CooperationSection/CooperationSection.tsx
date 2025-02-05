import Image from "next/image";
import styles from "./CooperationSection.module.scss";
import dontaionImg from "@/public/CooperationSection/donation.png";
import partnershipImg from "@/public/CooperationSection/Partnership.png";
import volunteering from "@/public/CooperationSection/Volunteering.png";
import SecondFooter from "@/src/components/SecondFooter/SecondFooter";

export const CooperationSection = () => {
  return (
    <>
      <section className={styles.cooperation}>
        <div className={`${styles.cooperationContainer} container`}>
          <h2 className={`${styles.title} def-title`}>
            Сотрудничество
            <br />
            <span>
              c Интер <span>билим</span>
            </span>
          </h2>

          <p className={styles.subtitle}>
            Присоединяйтесь к нашей миссии! Мы предлагаем три формата
            сотрудничества, чтобы каждый мог внести свой вклад в развитие важных
            инициатив.
          </p>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles.donation}>
                <h2
                  className={`${styles.cooperationInnerTitle} secondDef-title`}
                >
                  Пожерт<span>вование</span>
                </h2>
                <h3 className={styles.cooperationInnerSubtitle}>
                  Поддержите наши инициативы, чтобы мы могли продолжать важную
                  работу.
                </h3>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.listTitle}`}>
                    Что вы получите:
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Уверенность, что ваш вклад идет на пользу важным делам.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Благодарность от нашей команды и людей, которым мы
                      помогаем.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Прозрачность в отчетах о распределении средств.
                    </p>
                  </li>
                </ul>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.listTitle}`}>
                    Что нужно делать:{" "}
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Выбрать удобный способ для пожертвования (перевод,
                      онлайн-платеж и др.).
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Поддерживать проекты в области экологии, прав человека и
                      развития гражданского общества.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Разовая или регулярная поддержка – любой вклад важен!
                    </p>
                  </li>
                </ul>
                <button className={styles.btn}>Поддержать нас</button>
                <div className={styles.donationImgWrapper}>
                  <Image src={dontaionImg} alt="" />
                </div>
              </div>
              <div className={styles.volunteering}>
                <h2
                  className={`${styles.cooperationInnerTitle} secondDef-title`}
                >
                  Волонтер<span>ство</span>
                </h2>
                <h3 className={styles.cooperationInnerSubtitle}>
                  Внесите свой вклад в реализацию наших проектов и получите
                  уникальный опыт.
                </h3>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.listTitle}`}>
                    Что вы получите:
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Уникальный опыт участия в общественно значимых проектах.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Навыки, которые помогут вам развиваться как профессионалу
                      и гражданину.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Возможность работать в команде единомышленников.
                    </p>
                  </li>
                </ul>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.listTitle}`}>
                    Что нужно делать:
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Помогать в организации мероприятий, тренингов и акций.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Поддерживать проекты в области прав человека или развития
                      гражданского общества.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Вести коммуникацию с участниками и партнерами.
                    </p>
                  </li>
                </ul>
                <button className={styles.btn}>Связаться с нами</button>
              </div>
            </div>
            <div className={styles.line}>
              <div className={`${styles.point} ${styles.first}`}></div>
              <div className={`${styles.point} ${styles.second}`}></div>
              <div className={`${styles.point} ${styles.third}`}></div>
            </div>
            <div className={styles.right}>
              <div className={styles.donation}>
                <div className={styles.donationImgWrapper}>
                  <Image src={partnershipImg} alt="" />
                </div>
                <h2
                  className={`${styles.cooperationInnerTitle} secondDef-title`}
                >
                  <span>Парт</span>нерство
                </h2>
                <h3 className={styles.cooperationInnerSubtitle}>
                  Поддержите наши инициативы, чтобы мы могли продолжать важную
                  работу.
                </h3>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.listTitle}`}>
                    Что вы получите:
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Уверенность, что ваш вклад идет на пользу важным делам.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Благодарность от нашей команды и людей, которым мы
                      помогаем.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Прозрачность в отчетах о распределении средств.
                    </p>
                  </li>
                </ul>
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.listTitle}`}>
                    Что нужно делать:{" "}
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Выбрать удобный способ для пожертвования (перевод,
                      онлайн-платеж и др.).
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Поддерживать проекты в области экологии, прав человека и
                      развития гражданского общества.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      Разовая или регулярная поддержка – любой вклад важен!
                    </p>
                  </li>
                </ul>
                <button className={styles.btn}>Стать партнером</button>

                <div className={styles.donationImgWrapperSecond}>
                  <Image src={volunteering} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecondFooter />
    </>
  );
};
