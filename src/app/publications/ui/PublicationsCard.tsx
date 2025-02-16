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
  const getDownloadLink = (originalLink: string) => {
    // Извлекаем ID файла из Google Drive ссылки
    const match = originalLink.match(/file\/d\/([^\/]+)/);
    if (match) {
      // Формируем прямую ссылку для скачивания
      return `https://drive.google.com/uc?id=${match[1]}&export=download`;
    }
    return originalLink;
  };

  return (
    <a
      href={getDownloadLink(link)}
      className={styles.card}
      rel="noopener noreferrer"
    >
      <div className={styles.imgWrapper}>
        <Image src={image} alt="#" width={355} height={400} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </a>
  );
};

export default PublicationsCard;
