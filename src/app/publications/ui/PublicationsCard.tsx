import Image from "next/image";
import styles from "./PublicationsCard.module.scss";

export interface IPublicationsCard {
  title: string;
  image: string;
  link: string;
}

const PublicationsCard: React.FC<IPublicationsCard> = ({
  title,
  image,
  link,
}) => {
  return (
    <a href={link} className={styles.card} target="_blank">
      <div className={styles.imgWrapper}>
        <Image src={image} alt="#" width={355} height={400} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </a>
  );
};

export default PublicationsCard;
