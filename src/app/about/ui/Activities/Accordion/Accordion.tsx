import { useState } from "react";
import styles from "./Accordion.module.scss";
import { accordionData } from "@/src/data/accordion";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordionWrapper}>
      {accordionData.map((item, index) => (
        <div
          className={`${styles.accordion} ${
            activeIndex === index ? styles.active : ""
          }`}
          key={index}
        >
          <div
            className={styles.btn}
            onClick={() => handleClickAccordion(index)}
          >
            <span className={styles.title}>{item.title}</span>
            <span
              className={`${styles.arrow} ${
                activeIndex === index ? styles.rotated : ""
              }`}
            ></span>
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div className={styles.desc}>{item.text}</div>
            <ul>
              {item.listWithNumbers?.map((item, index) => (
                <li className={styles.listWithArrow} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            {item.image && (
              <div className={styles.image}>
                <img src={item.image} alt={item.title} />
              </div>
            )}
            {item.text2 && <p className={styles.desc}>{item.text2}</p>}
            {item.text3 && <p className={styles.desc}>{item.text3}</p>}
            {item.image2 && (
              <div className={styles.image}>
                <img src={item.image2} alt={item.title} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
