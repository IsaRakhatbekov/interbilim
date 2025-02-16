import styles from "./page.module.scss";
import { publicationsCard } from "@/src/data/publicationsData";
import PublicationsCard from "./ui/PublicationsCard";
import SecondFooter from "@/src/components/SecondFooter/SecondFooter";

const Publications = () => {
  return (
    <>
      <section className={styles.publications}>
        <div className={`${styles.container} container`}>
          <h2 className={`${styles.title} secondDef-title`}>
            Публика<span>ции</span>
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {publicationsCard.left.map((publications, index) => (
                <PublicationsCard
                  key={index}
                  image={publications.image}
                  title={publications.title}
                  link={publications.link}
                />
              ))}
            </div>
            <div className={styles.list}>
              {publicationsCard.middle.map((publications, index) => (
                <PublicationsCard
                  key={index}
                  image={publications.image}
                  title={publications.title}
                  link={publications.link}
                />
              ))}
            </div>
            <div className={styles.list}>
              {publicationsCard.right.map((publications, index) => (
                <PublicationsCard
                  key={index}
                  image={publications.image}
                  title={publications.title}
                  link={publications.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <SecondFooter />
    </>
  );
};

export default Publications;
