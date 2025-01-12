import Image from "next/image";
import styles from "./ProjectCard.module.scss";

export interface IProjectCard {
  title: string;
  image: string;
  text: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({ title, image, text }) => {
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
    </div>
  );
};

export default ProjectCard;
