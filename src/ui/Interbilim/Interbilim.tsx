"use client";
import Image from "next/image";
import values1 from "@/public/interbilim/values1.png";
import values2 from "@/public/interbilim/values2.png";
import values3 from "@/public/interbilim/values3.png";
import reviews1 from "@/public/interbilim/reviews1.png";
import reviews2 from "@/public/interbilim/reviews2.png";
import reviews3 from "@/public/interbilim/reviews3.png";
import reviews4 from "@/public/interbilim/reviews4.png";
import reviews5 from "@/public/interbilim/reviews5.png";
import reviews6 from "@/public/interbilim/reviews6.png";
import reviews7 from "@/public/interbilim/reviews7.png";
import reviews8 from "@/public/interbilim/reviews8.png";
import reviews9 from "@/public/interbilim/reviews9.jpg";
import reviews10 from "@/public/interbilim/reviews10.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./Interbilib.module.scss";

const Interbilim = () => {
  return (
    <section className={styles.interbilim}>
      <div className={`${styles.interbilimContainer} container`}>
        <div className={styles.values}>
          <h2 className={`${styles.valuesTitle} secondDef-title`}>
            Ценн
            <span>ости</span>
          </h2>
          <ul className={styles.valuesList}>
            <li className={styles.valuesItem}>
              <div className={styles.valuesImgWrapper}>
                <Image src={values1} alt="" />
              </div>
              <h5 className={styles.valuesInnerTitle}>Человек</h5>
            </li>
            <li className={styles.valuesItem}>
              <div className={styles.valuesImgWrapper}>
                <Image src={values2} alt="" />
              </div>
              <h5 className={styles.valuesInnerTitle}>Свобода</h5>
            </li>
            <li className={styles.valuesItem}>
              <div className={styles.valuesImgWrapper}>
                <Image src={values3} alt="" />
              </div>
              <h5 className={styles.valuesInnerTitle}>Справедливость</h5>
            </li>
          </ul>
        </div>
        <div className={styles.numbers}>
          <h2 className={`${styles.numbersTitle} def-title`}>
            Интербилим <br />
            <span>
              в циф
              <span>рах</span>
            </span>
          </h2>
          <ul className={styles.numbersList}>
            <li className={styles.numbersItem}>
              <h3 className={styles.numbersInnerTitle}>30</h3>
              <p className={styles.numbersText}>лет непрерывной работы</p>
            </li>
            <li className={styles.numbersItem}>
              <h3 className={styles.numbersInnerTitle}>7</h3>
              <p className={styles.numbersText}>областей охвачено</p>
            </li>
            <li className={styles.numbersItem}>
              <h3 className={styles.numbersInnerTitle}>350</h3>
              <p className={styles.numbersText}>эдвокаси-кампаний проведено</p>
            </li>
            <li className={styles.numbersItem}>
              <h3 className={styles.numbersInnerTitle}>1200</h3>
              <p className={styles.numbersText}>и более НКО обучено</p>
            </li>
            <li className={styles.numbersItem}>
              <h3 className={styles.numbersInnerTitle}>10000</h3>
              <p className={styles.numbersText}>человек посетили тренинги</p>
            </li>
          </ul>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviewsWrapper}>
            <h2 className={`${styles.reviewsTitle} def-title`}>
              От
              <span>
                <span>зывы</span>
              </span>
            </h2>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              className={styles.swiper}
            >
              <div className={`${styles.customSwiperBtnPrev} custom-prev`}>
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="25"
                    transform="matrix(-1 0 0 1 50 0)"
                    fill="url(#pattern0_267_891)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_267_891"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_267_891"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_267_891"
                      width="512"
                      height="512"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className={`${styles.customSwiperBtnNext} custom-next`}>
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="25"
                    transform="matrix(-1 0 0 1 50 0)"
                    fill="url(#pattern0_267_891)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_267_891"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_267_891"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_267_891"
                      width="512"
                      height="512"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews2} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Файруза Самидинова</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      Было очень интересно принять участие в проекте в качестве
                      тренера, хорошая организация, доброжелательная, комфортная
                      обстановка, я очень была рада также пообщаться с коллегами
                      из других городов, получила массу полезной и нужной
                      информации. А самое важное для меня было то,
                      что это действительно нужный и важный лагерь
                      для подростков и молодёжи нашего города.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews1} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Мирбек Асангариев</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      Наш выпуск в «Школе Лидерства» был очень сильным, многие
                      сейчас — довольно известные лидеры. Помню, как я старался
                      максимально осваивать темы семинаров и успешно закончить
                      школу. По окончании Школы я съездил в обучающий тур
                      в Польшу, что тоже было очень ценным опытом для меня. Вся
                      программа была очень грамотно и интересно построена,
                      мы действительно и обучались, и встречались с другими
                      лидерами, и реализовывали позже свои мини-проекты.
                    </p>
                    <p className={styles.reviewsText}>
                      Наш проект касался квотирования рабочих мест для ЛОВЗ. Был
                      разработан пакет документов для лоббирования квотирования
                      рабочих мест для инвалидов. По проекту разработки системы
                      квотирования, безбарьерной жизни для инвалидов: пандусы,
                      мы приобрели мощный опыт в убеждении, отстаивании
                      интересов. Пакет был передан в правовой отдел Министерства
                      Труда и Социальной Защиты, Министерство Юстиции и в отдел
                      Жогорку Кенеш по социальной политике для поправок
                      в законодательство.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews3} alt="Карим Ва- Ахунов" />
                    </div>
                    <h5 className={styles.reviewsName}>Карим Ва- Ахунов</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      МЦ Интербилим» - это площадка, где молодежь может
                      развиваться. Лично для меня «МЦ Интербилим» находится
                      отдельно в моем сердце, потому что я нашел новых друзей и
                      реализовал себя. Участник Лагеря Демократии проекта «Жаш –
                      Аракет», г. Токмок.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews4} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Ыдырыс Исаков</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      В Оше есть общественная организация «МЦ Интербилим». По ее
                      инициативе городские власти стали ежегодно отчитываться
                      перед жителями о том, что они делают и чего не делают,
                      куда и как расходуют бюджетные средства. Именно по
                      инициативе этой организации городские власти стали
                      узнавать о предназначении средств, собираемых в городскую
                      казну, и реальных потребностях населения. Да будет «МЦ
                      Интербилим»!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews5} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>
                      Гульшаир Абдирасулова
                    </h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      В «Школе Лидерства» больше всего мне запомнилось несколько
                      моментов. Игра «Шляпы» была очень интересной! Участникам
                      раздали несколько шляп, в зависимости от которых нужно
                      было тем или иным образом реагировать на ситуации:
                      «думающая шляпа», «разгневанная шляпа», «логичная шляпа» и
                      прочие. Это очень просто, игра показала мне, как легко
                      можно контролировать свои эмоции в зависимости от
                      обстоятельств. По окончании Школы участникам была
                      предоставлена возможность реализовать собственные проекты.
                      Это также было для меня ценным опытом.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews6} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Нурбек Омурзаков</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      Я закончил «Школу лидерства» в Бишкеке в 2009 году. Тогда
                      мне понравилась сама идея обучения и воспитания лидеров
                      нового поколения, ее я решил, слегка изменив, реализовать
                      в своем районе. Из обучения же в Бишкеке больше всего мне
                      запомнился профессионализм тренеров и встречи с уже
                      состоявшимися лидерами.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews7} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Чинара Айтбаева</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      Когда я подавала заявку на обучение в Школе Лидерства в
                      2006 году, мои коллеги говорили: «Зачем подавать заявку?
                      Ты уже и так лидер!», я отвечала: «Учиться никогда не
                      поздно». Я не пожалела, что пришла учиться в этой школе,
                      так как во время обучения узнала много интересного и
                      важного для моей работы, съездила в Польшу в рамках
                      образовательной тура по обмену опытом. Особенно мне
                      запомнились тренинги Александра Кулинского о съемках
                      роликов, психолога Михаила Мунькина о том, как распознать
                      человека при первом разговоре, встречи с руководителями
                      бизнес структур и политическими лидерами. Все это
                      проходило в такой легко усваиваемой форме. Иногда я ловлю
                      себя на мысли, что спустя годы я применяю в работе
                      некоторые знания и навыки, полученные в Школе.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews8} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Марс Черикчиев</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      Очень горжусь Интербилимом и в том, что являюсь
                      выпускником Школы Лидерства.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div className={styles.reviewsImgWrapper}>
                      <Image src={reviews9} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Эльвира Карипова</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      С «МЦ Интербилим» я познакомилась еще, будучи студенткой
                      первого курса. Я смогла пройти отбор для участия в ряде
                      его тренингов по проекту «Демократия и молодежь». Эти
                      тренинги усилили мои знания и, конечно, при раннем
                      трудоустройстве я отличалась от своих сверстников. Так
                      начиная с 4- го курса, я начала работать с международными
                      проектами. Большую лепту в моем карьерном росте сыграло
                      также участие в «Школе Лидерства 2009». Так я открыла для
                      себя «МЦ Интербилим» с внутренней стороны и была
                      воодушевлена работой интербилимовцев.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.reviewsCard}>
                  <div className={styles.reviewsImageWrapper}>
                    <div
                      className={`${styles.reviewsImgWrapper} ${styles.reviewsImgWrapperLast}`}
                    >
                      <Image src={reviews10} alt="" />
                    </div>
                    <h5 className={styles.reviewsName}>Мирсулжан Намазалиев</h5>
                  </div>
                  <div className={styles.reviewsContent}>
                    <p className={styles.reviewsText}>
                      Школа Лидерства» действительно наращивает потенциал
                      активистов гражданского сектора, создает возможности для
                      получения практичных знаний, а также для реализации
                      основных идей участников. Более того, это площадка для
                      настоящего нетворкинга, где каждый участник становится
                      твоим другом, соратником и партнером в настоящем и
                      будущем. Я думаю, никто другой, кроме как «Международный
                      Центр Интербилим», не сделает эту программу столь важной и
                      эффективной. Я помню, как еще в период авторитарного
                      режима, мы все же имели возможность встречаться с
                      совершенно разными политиками, чиновниками, задавать им
                      открытые и каверзные вопросы, получать и уяснять для себя
                      весьма важную и ценную информацию и знания.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Interbilim;
