"use client";
import { useState } from "react";
import styles from "./Activities.module.scss";
import Image from "next/image";
import bottomImg from "@/public/bottomImg.png";

import bottomItem1 from "@/public/bottom1-min.svg";
import bottomItem2 from "@/public/bottom2-min.svg";
import bottomItem3 from "@/public/bottom3-min.svg";
import bottomItem4 from "@/public/bottom4-min.svg";
import bottomItem5 from "@/public/bottom5-min.svg";
import bottomItem6 from "@/public/bottom6-min.svg";
import bottomItem7 from "@/public/bottom7-min.svg";
import bottomItem8 from "@/public/bottom8-min.svg";

import activitiesMidle1 from "@/public/activitiesmidle1.png";
import activitiesMidle2 from "@/public/activitiesmidle2.png";
import activitiesMidle3 from "@/public/activitiesmidle3.png";
import activitiesMidle4 from "@/public/activitiesmidle4.png";
import activitiesMidle5 from "@/public/activitiesmidle5.png";
import activitiesMidle6 from "@/public/activitiesmidle6.png";
import Accordion from "./Accordion/Accordion";

export const Activities = () => {
  return (
    <section className={styles.activities}>
      <div className={`${styles.activitiesContainer} container`}>
        <h2 className={`${styles.activitiesTitle} secondDef-title`}>
          Коротко о нашей деятель<span>ности</span>
        </h2>
        <div className={styles.accordionWrapper}>
          <Accordion />
        </div>
        <div className={`${styles.activitiesBottom} ${styles.bottom}`}>
          <div className={styles.bottomWrapper}>
            <div className={styles.bottomContent}>
              <p className={styles.bottomText}>
                «МЦ Интербилим», как первая в Кыргызстане НКО поддерживающая
                организация, начала свою деятельность по содействию в создании
                и регистрации, менеджменту и организационному управлению
                НКО с информированием и обучением по новой концепции НКО сектора
                и связанным с ним тем.
              </p>
              <p className={styles.bottomText}>
                За годы своей деятельности «МЦ Интербилим» обучил более
                1200 НКО с посещением от 1 до 10 сотрудников от каждой
                организации на более 70 тем тренингов. «МЦ Интербилим» совместно
                с Ошским филиалом «МЦ Интербилим» осуществил 88 проектов
                по различным тематикам с 1994 по 2024 гг.
              </p>
            </div>
            <div className={styles.bottomImg}>
              <Image src={bottomImg} alt="" />
            </div>
          </div>
          <p className={styles.bottomText}>
            «МЦ Интербилим» реализовал проектную деятельность в различных
            направлениях для оказания содействия в повышении образовательного,
            правового уровня своих бенефициариев, вовлекая их в проектную
            деятельность и общественную жизнь.
          </p>
          <ul className={styles.bottomList}>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem1} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>
                  По повышению потенциала и организационному развитию НКО:
                </span>
                «МЦ Интербилим» осуществил проекты: «Повышение потенциала НКО и
                организационное развитие», «Проект по координации НКО и
                жизнеобеспечению», «Развитие женского лидерства КР и наращивание
                потенциала НКО», «Усиление общественного участия ОГО в
                Кыргызской Республике», «Поддержка гражданских активистов для
                вклада в развитие демократии», «Стажировка молодых лидеров
                Кыргызстана в Польше», «Повышение гражданского активизма в КР»,
                «Гражданское участие в целях развития, «Региональный
                Гуманитарный Форум» и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem2} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>По повышению потенциала молодежи:</span>
                «МЦ Интербилим» осуществлял различные проекты и программы, как
                «Школа Лидерства», «Демократия и молодежь», «Паспорт к успеху»,
                «Усиление потенциала молодых женщин и мужчин в Кыргызстане для
                продвижения мира и безопасности», «Профилактика правонарушений
                для несовершеннолетних», «Кыргызстан – страна уникального
                многообразия культур», Продвижение толерантности и ценностей
                мультикультурного общества, «Укрепление сотрудничества местной
                молодежи и мэрии г. Узген в предотвращении конфликтов», Проект,
                реализуемый в рамках партнерского проекта «Ынтымактуу Жашоо»,
                «Вместе для общественного участия» и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem3} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>
                  По повышению правого и образовательного уровня бенефициариев:
                </span>
                «МЦ Интербилим» осуществил такие проекты, как «Совместное
                изучение нужд села», «Интегрирование социального и
                экономического уровня общин юга Кыргызстан», «Организационное
                развитие и лоббирование, эдвокаси», «Поддержка инициативных
                групп, предоставляющих психосоциальную помощь», «Содействие
                реализации прав граждан на достаточное жилье в г. Ош,
                Джалал-Абад, Баткен», «Защита прав населения при изъятии и сносе
                индивидуального жилья для государственных нужд», «Усиление 40
                кондоминиумов г. Ош по мобилизации жителей многоэтажных квартир
                для получения документов на ПЗУ», «Активное участие местного
                сообщества в улучшении качества жизни», Проект по информированию
                населения пострадавших регионов и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem4} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>По избирательному праву:</span>
                «МЦ Интербилим» осуществил несколько проектов по мониторингу
                выборов: «Содействие в проведении свободных и справедливых
                выборов в Кыргызстане», «Общественный мониторинг парламентских
                выборов 2007 в КР», «Мониторинг финансовых средств политических
                партий в период избирательных компаний» и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem5} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>По содействию государственному управлению:</span>
                «Улучшение качества муниципальных услуг г. Ош через внедрение
                дополнительных муниципальных услуг», «Улучшение механизмов
                прозрачного принятия решений ОМСУ», «На пути к новым
                межбюджетным взаимоотношениям», «Мониторинг и оценка
                деятельности Государственной Дирекции по восстановлению гг. Ош и
                Джалал-Абад», «Оказание содействия мэрии г. Ош в реализации
                закона «О государственных и муниципальных услугах» и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem6} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>По снижению коррупции:</span>
                «МЦ Интербилим» осуществил такие проекты, как «Содействие
                снижению коррупции в регионах Ошской области путем
                усовершенствования социальных услуг» и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem7} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>По конфликтологии:</span>
                «МЦ Интербилим» осуществлял проекты: «Предотвращение конфликтов
                и построение мира в КР», «Предотвращение конфликтов путем
                повышения подотчетности местных органов власти на юге
                Кыргызстана» и др.
              </p>
            </li>
            <li className={styles.bottomItem}>
              <div className={styles.bottomItemImg}>
                <Image src={bottomItem8} alt="" />
              </div>
              <p className={`${styles.bottomItemText} ${styles.bottomText}`}>
                <span>Другие проекты:</span>
                «Проект по регулятивной реформе «Системный анализ
                регулирования», «Проект по информированию населения пострадавших
                регионов» и др.
              </p>
            </li>
          </ul>
          <p className={styles.bottomText}>
            Проекты, осуществлённые «МЦ Интербилим», внесли значительный вклад
            в развитие НКО сектора, различных сфер жизнедеятельности общества,
            оказали реальную помощь различным слоям населения и государству.
            Прежде всего, с учётом осуществлённой деятельности, «МЦ Интербилим»
            был внесён определённый вклад в человеческий капитал через повышение
            знаний и навыков, влияющий на здоровье обученного населения, широкий
            охват бенефициариев в свои проекты, повышая Индекс человеческого
            капитала страны.
          </p>
          <div className={styles.activitiesImagesWrapper}>
            <div className={styles.activitiesimg}>
              <Image src={activitiesMidle1} alt="" />
            </div>
            <div className={styles.activitiesimg}>
              <Image src={activitiesMidle2} alt="" />
            </div>
            <div className={styles.activitiesimg}>
              <Image src={activitiesMidle3} alt="" />
            </div>
            <div className={styles.activitiesimg}>
              <Image src={activitiesMidle4} alt="" />
            </div>
            <div className={styles.activitiesimg}>
              <Image src={activitiesMidle5} alt="" />
            </div>
            <div className={styles.activitiesimg}>
              <Image src={activitiesMidle6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
