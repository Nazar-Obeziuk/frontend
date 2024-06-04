import React from "react";
import styles from "./HomeOrder.module.css";

const HomeOrder: React.FC = () => {
  return (
    <section className={styles.home__order_section}>
      <div className={styles.container}>
        <div className={styles.home__order_wrapper}>
          <h2 className={styles.home__order_title}>
            Як ми виготовляємо{" "}
            <span className={styles.home__order_primary}>ортопедичні </span>
            устілки на замовлення
          </h2>
          <div className={styles.home__order_main}>
            <div className={styles.home__order_info}>
              <p className={styles.home__info_text}>
                Для виготовлення індивідуальних ортопедичних устілок ми
                використовуємо технологію{" "}
                <span className={styles.home__text_primary}>CAD/CAM</span> —
                найсучасніший метод виготовлення індивідуальних ортопедичних
                устілок. Технологія передбачає перетворення отриманого
                скан-зображення стопи в 3D-модель устілки, яку моделює фізичний
                терапевт за допомогою програми.
              </p>
              <div className={styles.home__info_galery}>
                <img
                  src="./images/order-foot-1.svg"
                  alt="order foot 1"
                  className={styles.home__galery_image}
                />
                <img
                  src="./images/order-foot-2.svg"
                  alt="order foot 2"
                  className={styles.home__galery_image}
                />
                <img
                  src="./images/order-foot-3.svg"
                  alt="order foot 3"
                  className={styles.home__galery_image}
                />
              </div>
            </div>
            <div className={styles.home__order_video}>
              <a href="https://google.com" className={styles.home__video_link}>
                <span className={styles.home__link_circle}>
                  <img
                    src="./images/button-play-video.svg"
                    alt="play video"
                    className={styles.home__circle_play}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOrder;
