import Image from "next/image";
import styles from "./SecondFooter.module.scss";
import logo from "@/public/footerLogo.svg";
import Link from "next/link";

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
              <Link className={styles.link} href="/">
                Главная
              </Link>
              <Link className={styles.link} href="/about">
                О нас
              </Link>
              <Link className={styles.link} href="/ourProjects">
                Проекты
              </Link>
              <Link className={styles.link} href="/publications">
                Публикации
              </Link>
              <Link className={styles.link} href="/gallery">
                Галерея
              </Link>
            </li>
            <li className={`${styles.item} ${styles.contacts}`}>
              <h5 className={styles.title}>Контакты</h5>
              <p className={styles.link}>
                г. Бишкек, ул. Уметалиева, 27 <br />
                Тел: +996 (553) 602 375 <br />
                Эл.почта: interbilim@gmail.com
              </p>
              <p className={styles.link}>
                г. Ош ул. Ленина 335/11
                <br />
                Тел: +996 (322) 22-29-52
                <br />
                Эл.почта: interbilim.osh@gmail.com
              </p>
            </li>
            <li className={`${styles.item} ${styles.social}`}>
              <h5 className={styles.title}>Мы в соц. сетях</h5>
              <a
                className={styles.link}
                href="https://www.facebook.com/interbilimngo"
                target="_blank"
              >
                Facebook
              </a>
              <a
                className={styles.link}
                href="https://www.instagram.com/interbilim.kg?igsh=MWtnbXlrdnU5OHZ0cA=="
                target="_blank"
              >
                Instagram
              </a>
              <a
                className={styles.link}
                href="https://wa.me/996553602375"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li className={`${styles.item} ${styles.languages}`}>
              <h5 className={styles.title}>Языки</h5>
              <a className={styles.link} href="#">
                Кыргызча
              </a>
              <a className={styles.link} href="#">
                Русский
              </a>
              <a className={styles.link} href="#">
                English
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default SecondFooter;
