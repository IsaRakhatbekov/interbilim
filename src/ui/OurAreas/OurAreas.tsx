import styles from "./OurAreas.module.scss";
const OurAreas = () => {

  return (
    <section className={styles.area}>
      <div className={`${styles.areaContainer} container`}>
        <h2 className={`${styles.areaTitle} def-title`}>
          Наши <br />
          <span>
            сфе<span>ры</span>
          </span>
        </h2>
        <div className={styles.wrapper}>
          <ul className={`${styles.list} ${styles.left}`}>
            <li className={`${styles.item} ${styles.leftItem}`}>
              <h4 className={styles.innerTitle}>Содействие построению мира</h4>
              <p className={styles.text}>Поддержка инициатив по мирному разрешению конфликтов, укреплению диалога и взаимопонимания между различными группами общества.</p>
            </li>
            <li className={`${styles.item} ${styles.leftItem}`}>
              <h4 className={styles.innerTitle}>
                Развитие лидерства и работа с молодежью
              </h4>
              <p className={styles.text}>Обучение и поддержка молодых лидеров, создание возможностей для активного участия молодежи в общественной жизни.</p>
            </li>
            <li className={`${styles.item} ${styles.leftItem}`}>
              <h4 className={styles.innerTitle}>
                Развитие потенциала НКО и местных сообществ
              </h4>
              <p className={styles.text}>Обучение и укрепление компетенций некоммерческих организаций и местных сообществ для эффективного решения социально значимых проблем.</p>
            </li>
            <li className={`${styles.item} ${styles.leftItem}`}>
              <h4 className={styles.innerTitle}>
                Гражданско-правовое просвещение
              </h4>
              <p className={styles.text}>Повышение правовой грамотности граждан, обучение основам прав и обязанностей для активного участия в жизни общества.</p>
            </li>
          </ul>
          <div className={styles.line}>
            <span className={styles.lineFirst}></span>
            <span className={styles.lineSeond}></span>
            <span className={styles.lineThird}></span>
            <span className={styles.lineFourth}></span>
            <span className={styles.lineFifth}></span>
            <span className={styles.lineSixth}></span>
            <span className={styles.lineSeventh}></span>
            <span className={styles.lineEighth}></span>
          </div>
          <ul className={`${styles.list} ${styles.right}`}>
            <li className={`${styles.item} ${styles.rightItem}`}>
              <h4 className={styles.innerTitle}>
                Защита прав граждан и проведение адвокационных кампаний
              </h4>
              <p className={styles.text}>Продвижение и защита прав человека, организация кампаний по изменению законодательства и привлечению внимания к социальным проблемам.</p>
            </li>
            <li className={`${styles.item} ${styles.rightItem}`}>
              <h4 className={styles.innerTitle}>
                Поддержка и развитие культурных и экологических инициатив
              </h4>
              <p className={styles.text}>Сохранение культурного наследия, поддержка проектов в области искусства и экологии, улучшение осведомленности о важности устойчивого развития.</p>
            </li>
            <li className={`${styles.item} ${styles.rightItem}`}>
              <h4 className={styles.innerTitle}>
                Содействие улучшению государственного управления
              </h4>
              <p className={styles.text}>Продвижение принципов прозрачности, подотчетности и эффективности в государственных структурах, укрепление сотрудничества между государством и гражданским обществом.</p>
            </li>
            <li className={`${styles.item} ${styles.rightItem}`}>
              <h4 className={styles.innerTitle}>
                Развитие социального предпринимательства
              </h4>
              <p className={styles.text}>Поддержка бизнес-инициатив, направленных на решение социальных проблем, создание устойчивых и полезных для общества проектов.</p>
            </li>
          </ul>
        </div>
      </div>    
    </section>
  );
};
export default OurAreas;
