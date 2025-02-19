import Image from "next/image";
import styles from "./SecondFooter.module.scss";
import logo from "@/public/footerLogo.svg";

const SecondFooter = () => {
  return (
    <footer className={styles.secondFooter}>
      <div className={`${styles.footerContainer} container`}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="#">
            <Image src={logo} alt="" priority={false} />
          </a>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.linksWrapper}`}>
              <h5 className={styles.title}>Разделы</h5>
              <a className={styles.link} href="#">
                Главная
              </a>
              <a className={styles.link} href="#">
                О нас
              </a>
              <a className={styles.link} href="#">
                Проекты
              </a>
              <a className={styles.link} href="#">
                Публикации
              </a>
              <a className={styles.link} href="#">
                Галерея
              </a>
            </li>
            <li className={`${styles.item} ${styles.contacts}`}>
              <h5 className={styles.title}>Контакты</h5>
              <a className={styles.link} href="#">
                г. Бишкек, ул. Уметалиева, 27 <br />
                Тел: +996 (553) 602 375 <br />
                Эл.почта: interbilim@gmail.com
              </a>
              <a className={styles.link} href="#">
                г. Ош ул. Ленина 335/11 <br /> Тел: +996 (3222) 2-29-52 <br />{" "}
                Эл.почта: interbilim.osh@gmail.com
              </a>
            </li>
            <li className={`${styles.item} ${styles.social}`}>
              <h5 className={styles.title}>Мы в соц. сетях</h5>
              <a className={styles.link} href="#">
                Facebook
              </a>
              <a className={styles.link} href="#">
                Instagram
              </a>
              <a className={styles.link} href="#">
                WhatsApp
              </a>
            </li>
            <li className={`${styles.item} ${styles.languages}`}>
              <h5 className={styles.title}>Языки</h5>
              <a className={styles.link} href="#">
                English
              </a>
              <a className={styles.link} href="#">
                Русский
              </a>
              <a className={styles.link} href="#">
                Кыргызча
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default SecondFooter;
