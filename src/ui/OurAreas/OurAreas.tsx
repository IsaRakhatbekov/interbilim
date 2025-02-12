import styles from "./OurAreas.module.scss";

const OurAreas = () => {
  const leftItems = [
    {
      title: "Содействие построению мира",
      text: "Поддержка инициатив по мирному разрешению конфликтов, укреплению диалога и взаимопонимания между различными группами общества.",
    },
    {
      title: "Развитие лидерства и работа с молодёжью",
      text: "Обучение и поддержка молодых лидеров, создание возможностей для активного участия молодёжи в общественной жизни.",
    },
    {
      title: "Развитие потенциала НКО и местных сообществ",
      text: "Обучение и укрепление компетенций некоммерческих организаций и местных сообществ для эффективного решения социально значимых проблем.",
    },
    {
      title: "Гражданско-правовое просвещение",
      text: "Повышение правовой грамотности граждан, обучение основам прав и обязанностей для активного участия в жизни общества.",
    },
  ];

  const rightItems = [
    {
      title: "Защита прав граждан и проведение адвокационных кампаний",
      text: "Продвижение и защита прав человека, организации кампаний по изменению законодательства и привлечению внимания к социальным проблемам.",
    },
    {
      title: "Поддержка и развитие культурных и экологических инициатив",
      text: "Сохранение культурного наследия, поддержка проектов в области искусства и экологии, улучшение осведомлённости о важности устойчивого развития.",
    },
    {
      title: "Содействие улучшению государственного управления",
      text: "Продвижение принципов прозрачности, подотчётности и эффективности в государственных структурах, укрепление сотрудничества между государством и гражданским обществом.",
    },
    {
      title: "Развитие социального предпринимательства",
      text: "Поддержка бизнес-инициатив, направленных на решение социальных проблем, создание устойчивых и полезных для общества проектов.",
    },
  ];

  return (
    <section className={styles.ourAreas}>
      <div className={styles.container}>
        <h2 className={`${styles.title} def-title`}>
          Наши <br />
          <span>
            сфе<span>ры</span>
          </span>
        </h2>

        <div className={styles.content}>
          {/* Левая колонка */}
          <div className={styles.columnLeft}>
            {leftItems.map((item, index) => (
              <div key={index} className={styles.item}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Центральная линия с точками */}
          <div className={styles.timeline}>
            <div className={styles.line}></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.dot}></div>
            ))}
          </div>

          {/* Правая колонка */}
          <div className={styles.columnRight}>
            {rightItems.map((item, index) => (
              <div key={index} className={styles.item}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAreas;
