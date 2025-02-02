import styles from "./Structure.module.scss";

const Structure = () => {
  return (
    <div className={styles.structure}>
      <div className={`${styles.structureContainer} container`}>
        <div className={styles.wrapper}>
          <div className={`${styles.list} ${styles.firstList}`}>
            <div className={`${styles.item} ${styles.firstItem}`}>
              <p className={styles.text}>Общее собрание</p>
            </div>
          </div>
          <div className={`${styles.list} ${styles.seondList}`}>
            <div className={`${styles.item} ${styles.secondItem}`}>
              <p className={styles.text}>Директор головного офиса</p>
            </div>
            <div className={`${styles.item} ${styles.thirdItem}`}>
              <p className={styles.text}>Менеджер филиала г. Ош</p>
            </div>
          </div>
          <div className={`${styles.list} ${styles.thirdList}`}>
            <div className={`${styles.item} ${styles.fourthItem}`}>
              <p className={styles.text}>Координатор головного офиса</p>
            </div>
            <div className={`${styles.item} ${styles.fifthItem}`}>
              <p className={styles.text}>Финансовый менеджер головного офиса</p>
            </div>
            <div className={`${styles.item} ${styles.sixthItem}`}>
              <p className={styles.text}>Координатор филиала</p>
            </div>
            <div className={`${styles.item} ${styles.seventhItem}`}>
              <p className={styles.text}>Бухгалтер-логист</p>
            </div>
          </div>
          <div className={`${styles.list} ${styles.fourthList}`}>
            <div className={`${styles.item} ${styles.eighthItem}`}>
              <p className={styles.text}>Ассистент филиала</p>
            </div>
            <div className={`${styles.item} ${styles.ninthItem}`}>
              <p className={styles.text}>PR специалист филиала</p>
            </div>
            <div className={`${styles.item} ${styles.tenthItem}`}>
              <p className={styles.text}>Юрист</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
