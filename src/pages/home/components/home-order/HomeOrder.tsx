import React from "react";
import styles from "./HomeOrder.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HomeOrder: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__order_section}>
      <div className={styles.container}>
        <div className={styles.home__order_wrapper}>
          <h2 className={styles.home__order_title}>
            {t("home.homeOrder.homeOrderTitleChild1")}
            <span className={styles.home__order_primary}>
              {t("home.homeOrder.homeOrderTitleChild2")}{" "}
            </span>
            {t("home.homeOrder.homeOrderTitleChild3")}
          </h2>
          <div className={styles.home__order_main}>
            <div className={styles.home__order_info}>
              <p className={styles.home__info_text}>
                {t("home.homeOrder.homeOrderTextChild1")}
                <span className={styles.home__text_primary}>
                  {t("home.homeOrder.homeOrderTextChild2")}
                </span>
                {t("home.homeOrder.homeOrderTextChild3")}
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
              <NavLink
                to={"https://youtu.be/wzwtNwJ7TLQ"}
                target={"_blank"}
                className={styles.home__video_link}
              >
                <span className={styles.home__link_circle}>
                  <img
                    src="./images/button-play-video.svg"
                    alt="play video"
                    className={styles.home__circle_play}
                  />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOrder;
