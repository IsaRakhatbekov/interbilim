import styles from "./page.module.scss";
import { projects } from "@/src/data/ourProjects";
import ProjectCard from "./ui/ProjectCard";
import Footer from "@/src/components/Footer/Footer";

const OurProjects = () => {
  return (
    <>
      <section className={styles.ourProjects}>
        <div className={`${styles.container} container`}>
          <h2 className={`${styles.title} def-title`}>
            Наши
            <br />
            <span>
              <span>про</span>екты
            </span>
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {projects.left.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  image={project.image}
                  text={project.text}
                  list={project.list}
                  secondText={project.secondText}
                  secondList={project.secondList}
                />
              ))}
            </div>

            <div className={styles.list}>
              {projects.right.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  image={project.image}
                  text={project.text}
                  list={project.list}
                  secondText={project.secondText}
                  secondList={project.secondList}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurProjects;
