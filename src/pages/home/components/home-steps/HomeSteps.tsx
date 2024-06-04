import React from "react";
import styles from "./HomeSteps.module.css";

const HomeSteps: React.FC = () => {
  return (
    <section className={styles.home__steps_section}>
      <div className={styles.container}>
        <div className={styles.home__steps_wrapper}>
          <h2 className={styles.home__steps_title}>
            6 кроків до ВИГОТОВЛЕННЯ{" "}
            <span className={styles.home__steps_primary}>індивідуальних</span>{" "}
            устілок
          </h2>
          <div className={styles.home__steps_main}>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_first}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-1.jpg"
                  alt="step 1 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>КРОК 1</h3>
                <p className={styles.home__info_text}>
                  Оформіть замовлення{" "}
                  <a href="#" className={styles.home__text_primary}>
                    тут
                  </a>{" "}
                  та отримайте пінобокс
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_second}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-2.jpg"
                  alt="step 2 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>КРОК 2</h3>
                <p className={styles.home__info_text}>
                  Отримайте діагностичний бокс у відділенні
                  <img
                    src="./images/nova-poshta.svg"
                    alt=""
                    className={styles.home__text_icon}
                  />
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_third}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-3.jpg"
                  alt="step 3 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>КРОК 3</h3>
                <p className={styles.home__info_text}>
                  Зробіть відтиск стопи та відправте нам за зворотною адресою
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_fourth}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-4.jpg"
                  alt="step 4 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>КРОК 4</h3>
                <p className={styles.home__info_text}>
                  Отримайте онлайн-консультацію з фізичним терапевтом
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_fifth}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-5.jpg"
                  alt="step 5 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>КРОК 5</h3>
                <p className={styles.home__info_text}>
                  Ваші устілки виготовляються індивідуально для вас
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_sixth}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-6.jpg"
                  alt="step 6 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>КРОК 6</h3>
                <p className={styles.home__info_text}>
                  Отримайте свої індивідуально виготовленні устілки у відділенні
                  <img
                    src="./images/nova-poshta.svg"
                    alt=""
                    className={styles.home__text_icon}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.home__steps_actions}>
            <button
              className={`${styles.home__actions_button} ${styles.home__actions_order}`}
              type="button"
            >
              ЗАМОВИТИ УСТІЛКИ
            </button>
            <button
              className={`${styles.home__actions_button} ${styles.home__actions_video}`}
              type="button"
            >
              ВІДЕОІНСТРУКЦІЯ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
