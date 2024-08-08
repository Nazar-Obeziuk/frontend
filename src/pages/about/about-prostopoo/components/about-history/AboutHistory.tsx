import React from "react";
import styles from "./AboutHistory.module.css";
import { useTranslation } from "react-i18next";

const AboutHistory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about__history_section}>
      <div className={styles.container}>
        <div className={styles.about__history_wrapper}>
          <div className={styles.about__history_inner}>
            <div className={styles.about__inner_info}>
              <h2 className={styles.about__info_title}>
                {t("aboutUs.aboutUsHistory.aboutUsHistoryTitle1")}
              </h2>
              <div className={styles.about__info_main}>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>
                    {t("aboutUs.aboutUsHistory.aboutUsHistoryText1Child1")}
                  </span>
                  {t("aboutUs.aboutUsHistory.aboutUsHistoryText1Child2")}
                </p>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>
                    {t("aboutUs.aboutUsHistory.aboutUsHistoryText2Child1")}
                  </span>
                  {t("aboutUs.aboutUsHistory.aboutUsHistoryText2Child2")}
                </p>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>
                    {t("aboutUs.aboutUsHistory.aboutUsHistoryText3Child1")}
                  </span>
                  {t("aboutUs.aboutUsHistory.aboutUsHistoryText3Child2")}
                </p>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>
                    {t("aboutUs.aboutUsHistory.aboutUsHistoryText4Child1")}
                  </span>
                  {t("aboutUs.aboutUsHistory.aboutUsHistoryText4Child2")}
                </p>
              </div>
            </div>
            <div className={styles.about__inner_galery}>
              <div className={styles.about__galery_item}>
                <img
                  src={t("aboutUs.aboutUsHistory.aboutUsHistoryImage1URL")}
                  alt="about foot 1"
                  className={styles.about__item_image}
                />
              </div>
              <div className={styles.about__galery_item}>
                <img
                  src={t("aboutUs.aboutUsHistory.aboutUsHistoryImage2URL")}
                  alt="about foot 2"
                  className={styles.about__item_image}
                />
              </div>
              <div className={styles.about__galery_item}>
                <img
                  src={t("aboutUs.aboutUsHistory.aboutUsHistoryImage3URL")}
                  alt="about foot 3"
                  className={styles.about__item_image}
                />
              </div>
            </div>
          </div>
          <div className={styles.about__history_banner}>
            <div className={styles.about__banner_block}>
              <img
                src="../../images/about-history-banner.webp"
                alt="home history banner"
                className={styles.about__block_image}
              />
            </div>
            <div className={styles.about__banner_history}>
              <h3 className={styles.about__history_title}>
                {t("aboutUs.aboutUsHistory.aboutUsHistoryTitle2")}
              </h3>
              <p className={styles.about__history_text}>
                {t("aboutUs.aboutUsHistory.aboutUsHistoryText5")}
              </p>
              <p className={styles.about__history_text}>
                {t("aboutUs.aboutUsHistory.aboutUsHistoryText6")}
              </p>
              <p className={styles.about__history_text}>
                {t("aboutUs.aboutUsHistory.aboutUsHistoryText7")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
