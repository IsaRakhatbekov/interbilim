import { chronologyData, IChronologyItem } from "@/src/data/chronology";
import styles from "./Chronology.module.scss";

const Chronology = () => {
  return (
    <div className={styles.chronology}>
      <div className={`${styles.container} container`}>
        <h2 className={`${styles.chronologyTitle} secondDef-title`}>
          Хронология нашей <span>деятель</span>ности
        </h2>
        <ul className={styles.list}>
          {chronologyData.map((item: IChronologyItem, index: number) => (
            <li className={styles.item} key={index}>
              <div className={styles.yearsWrapper}>
                {item.year.map((year, yearIndex) => {
                  const yearToString = year.toString();
                  const firstTwo = yearToString.slice(0, 2);
                  const lastTwo = yearToString.slice(2);

                  return (
                    <span key={yearIndex}>
                      <span className={styles.year}>
                        <span
                          className={
                            yearIndex === 0 ? styles.redYear : styles.blackYear
                          }
                        >
                          {firstTwo}
                        </span>
                        <span className={styles.blackYear}>{lastTwo}</span>
                      </span>
                      {yearIndex < item.year.length - 1 && <br />}
                    </span>
                  );
                })}
              </div>
              <div className={styles.descWrapper}>
                {item.description.map((desc, descIndex) => (
                  <p className={styles.desc} key={descIndex}>
                    {desc}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chronology;
