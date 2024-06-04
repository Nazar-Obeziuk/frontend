import React from "react";
import styles from "./AboutHistory.module.css";

const AboutHistory: React.FC = () => {
  return (
    <section className={styles.about__history_section}>
      <div className={styles.container}>
        <div className={styles.about__history_wrapper}>
          <div className={styles.about__history_inner}>
            <div className={styles.about__inner_info}>
              <h2 className={styles.about__info_title}>ПРО PROSTOPOO</h2>
              <div className={styles.about__info_main}>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>Prostopoo</span>{" "}
                  — ми український виробник індивідуальних ортопедичних устілок.
                </p>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>Prostopoo</span>{" "}
                  — нашими устілками вже користуються жителі всієї України та
                  закордоном.
                </p>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>Prostopoo</span>{" "}
                  — ми надаємо послуги по виготовленню індивідуальних
                  ортопедичних устілок, з використанням передових технологій.
                </p>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>Prostopoo</span>{" "}
                  — швидке та легке рішення для ефективного догляду за своїми
                  стопами.
                </p>
              </div>
            </div>
            <div className={styles.about__inner_galery}>
              <div className={styles.about__galery_item}>
                <img
                  src="../images/about-foot-1.svg"
                  alt="about foot 1"
                  className={styles.about__item_image}
                />
              </div>
              <div className={styles.about__galery_item}>
                <img
                  src="../images/about-foot-2.svg"
                  alt="about foot 2"
                  className={styles.about__item_image}
                />
              </div>
              <div className={styles.about__galery_item}>
                <img
                  src="../images/about-foot-3.svg"
                  alt="about foot 3"
                  className={styles.about__item_image}
                />
              </div>
            </div>
          </div>
          <div className={styles.about__history_banner}>
            <div className={styles.about__banner_block}>
              <img
                src="../images/about-history-banner.jpg"
                alt="home history banner"
                className={styles.about__block_image}
              />
            </div>
            <div className={styles.about__banner_history}>
              <h3 className={styles.about__history_title}>Історія бренду</h3>
              <p className={styles.about__history_text}>
                Раніше виготовлення індивідуальних ортопедичних устілок
                потребувало чимало часу та ресурсів.
              </p>
              <p className={styles.about__history_text}>
                Ми поставили собі за мету зробити процес замовлення та
                виготовлення індивідуальних устілок доступним будь-кому та
                будь-де, автоматизованим і швидким, якісним і комфортним.
              </p>
              <p className={styles.about__history_text}>
                Наша команда розробила стратегію та план виготовлення адаптивних
                й ефективних індивідуальних ортопедичних устілок. У перший рік
                створення бренду ми виготовили понад 5000 пар устілок. Кількість
                нових клієнтів безупинно зростає.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
