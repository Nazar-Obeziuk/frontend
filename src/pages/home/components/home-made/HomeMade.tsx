import React, { useEffect, useState } from "react";
import styles from "./HomeMade.module.css";
import { useTranslation } from "react-i18next";

const HomeMade: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("ua");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else if (i18n.language === "en") {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  return (
    <section className={styles.home__made_section}>
      <div className={styles.home__made_container}>
        <div className={styles.home__made_wrapper}>
          <div className={styles.home__made_info}>
            <h1 className={styles.home__info_title}>
              <span className={styles.home__title_small}>
                {t("home.homeMain.homeMainTitlePiece1")}
              </span>{" "}
              <br />
              {t("home.homeMain.homeMainTitlePiece2")} <br />{" "}
              {t("home.homeMain.homeMainTitlePiece3")} <br />
              <span className={styles.home__title_small}>
                {t("home.homeMain.homeMainTitlePiece4")}
              </span>
            </h1>
            <div className={styles.home__info_free}>
              <h3 className={styles.home__free_title}>
                {t("home.homeMain.homeMainSubtitle")}
              </h3>
              <div className={styles.home__free_block}>
                <span className={styles.home__free_item}>
                  {t("home.homeMain.homeMainFreeText1")}
                </span>
                <span className={styles.home__free_item}>
                  {t("home.homeMain.homeMainFreeText2")}
                </span>
              </div>
              <div className={styles.home__free_block}>
                <span className={styles.home__free_delivery}>
                  {t("home.homeMain.homeMainFreeText3")}
                </span>
              </div>
            </div>
            <button className={styles.home__info_button} type="button">
              {t("home.homeMain.homeMainButtonText")}
            </button>
          </div>
          <div className={styles.home__made_insoles}>
            <video
              key={activeLanguage}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className={styles.home__insoles_banner}
            >
              <source
                src={
                  activeLanguage === "ua"
                    ? "../../images/home-animation.webm"
                    : "../../images/home-animation-en.webm"
                }
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <button className={styles.home__mobile_button} type="button">
            {t("home.homeMain.homeMainButtonText")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMade;
