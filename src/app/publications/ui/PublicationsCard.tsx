import Image from "next/image";
import styles from "./PublicationsCard.module.scss";

export interface IPublicationsCard {
  title: string;
  image: string;
}

const PublicationsCard: React.FC<IPublicationsCard> = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image src={image} alt="#" width={355} height={400} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default PublicationsCard;
