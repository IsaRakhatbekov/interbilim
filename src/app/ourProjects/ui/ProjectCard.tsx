import Image from "next/image";
import styles from "./ProjectCard.module.scss";

export interface IProjectCard {
  title: string;
  image: string;
  text: string[];
  list?: string[];
  secondText?: string[];
  secondList?: string[];
  thirdText?: string[];
  thirdList?: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  image,
  text,
  list,
  secondText,
  secondList,
  thirdText,
  thirdList,
}) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.imgWrapper}>
        <Image src={image} alt="" width={400} height={350} />
      </div>
      {text?.map((paragraph, index) => (
        <p className={styles.text} key={index}>
          {paragraph}
        </p>
      ))}
      {list && list.length > 0 && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {secondText?.map((paragraph, index) => (
        <p className={styles.text} key={index}>
          {paragraph}
        </p>
      ))}
      {secondList && secondList.length > 0 && (
        <ul className={styles.list}>
          {secondList.map((secondList, index) => (
            <li className={styles.item} key={index}>
              {secondList}
            </li>
          ))}
        </ul>
      )}
      {thirdText?.map((paragraph, index) => (
        <p className={styles.text} key={index}>
          {paragraph}
        </p>
      ))}
      {thirdList && thirdList.length > 0 && (
        <ul className={styles.list}>
          {thirdList.map((secondList, index) => (
            <li className={styles.item} key={index}>
              {thirdList}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;
