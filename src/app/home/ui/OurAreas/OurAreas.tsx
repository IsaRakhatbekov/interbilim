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
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>Содействие построению мира</h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Защита прав граждан и проведение адвокационных кампаний
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Развитие лидерства и работа с молодежью
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Поддержка и развитие культурных и экологических инициатив
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Развитие потенциала НКО и местных сообществ
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Содействие улучшению государственного управления
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Гражданско-правовое просвещение
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>
              Развитие социального предпринимательства
            </h4>
            <p className={styles.text}>ppppppppppppppp</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default OurAreas;
