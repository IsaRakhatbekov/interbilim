import Header from "@/src/components/Header/Header";
import styles from "./page.module.scss";
import Footer from "@/src/components/Footer/Footer";
import { projects } from "@/src/data/ourProjects";
import ProjectCard from "./ui/ProjectCard";

const OurProjects = () => {
  return (
    <div>
      <Header />
      <main>
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
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurProjects;
