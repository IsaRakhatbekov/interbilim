"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/logo.svg";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerActive : ""}`}
    >
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="/">
            <Image src={logo} alt="Логотип" />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href="/">
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/about">
                О нас
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/ourProjects">
                Проекты
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/certificates">
                Публикации
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#">
                Галерея
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#">
                Контакты
              </Link>
            </li>
          </ul>
          <button className={styles.btn}>Сотрудничество</button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
