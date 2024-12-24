"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/logo.svg";
import { Link, NavLink } from "react-router-dom";

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
              <Link className={styles.link} to="/">
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/about">
                О нас
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/cooperation">
                Проекты
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Публикации
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Галерея
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Контакты
              </a>
            </li>
          </ul>
          <button className={styles.btn}>Сотрудничество</button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
