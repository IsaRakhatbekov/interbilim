"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/logo.svg";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [burger, setBurger] = useState(false);

  // Функция для блокировки/разблокировки скролла
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden"; // Блокируем скролл
    } else {
      document.body.style.overflow = ""; // Возвращаем скролл
    }
  }, [burger]);

  const handleClickBurgerClose = () => {
    setBurger(false);
  };

  const handleClickBurger = () => {
    setBurger((prev) => !prev);
  };

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
              <Link className={styles.link} href="/publications">
                Публикации
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/gallery">
                Галерея
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/contacts">
                Контакты
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/cooperation" className={styles.btn}>
                Сотрудничество
              </Link>
            </li>
          </ul>
          <button
            onClick={handleClickBurger}
            className={`${styles.menuBtn} ${
              burger ? styles.menuBtnActive : ""
            }`}
          >
            <span></span>
          </button>

          <div
            className={`${styles.menuBody} ${
              burger ? styles.menuBodyActive : ""
            }`}
          >
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link
                  onClick={handleClickBurgerClose}
                  className={styles.menuLink}
                  href="/"
                >
                  Главная
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  onClick={handleClickBurgerClose}
                  className={styles.menuLink}
                  href="/about"
                >
                  О нас
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  onClick={handleClickBurgerClose}
                  className={styles.menuLink}
                  href="/ourProjects"
                >
                  Проекты
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  onClick={handleClickBurgerClose}
                  className={styles.menuLink}
                  href="/publications"
                >
                  Публикации
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  onClick={handleClickBurgerClose}
                  className={styles.menuLink}
                  href="/gallery"
                >
                  Галерея
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  onClick={handleClickBurgerClose}
                  className={styles.menuLink}
                  href="/contacts"
                >
                  Контакты
                </Link>
              </li>
            </ul>
            <Link href="/cooperation" className={styles.btn}>
              Сотрудничество
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
