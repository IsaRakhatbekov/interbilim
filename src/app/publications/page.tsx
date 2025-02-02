import styles from "./page.module.scss";
import { publicationsCard } from "@/src/data/publicationsData";
import PublicationsCard from "./ui/PublicationsCard";

const Publications = () => {
  return (
    <section className={styles.publications}>
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            {publicationsCard.left.map((publications, index) => (
              <PublicationsCard
                key={index}
                image={publications.image}
                title={publications.title}
              />
            ))}
          </div>
          <div className={styles.list}>
            {publicationsCard.middle.map((publications, index) => (
              <PublicationsCard
                key={index}
                image={publications.image}
                title={publications.title}
              />
            ))}
          </div>
          <div className={styles.list}>
            {publicationsCard.right.map((publications, index) => (
              <PublicationsCard
                key={index}
                image={publications.image}
                title={publications.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
