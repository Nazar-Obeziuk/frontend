import React from "react";
import styles from "./AboutFeatures.module.css";
import { useTranslation } from "react-i18next";

const AboutFeatures: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about__features_section}>
      <div className={styles.container}>
        <div className={styles.about__features_wrapper}>
          <h2 className={styles.about__features_title}>
            {t("aboutUs.aboutUsFeatures.aboutUsFeaturesTitle")}
          </h2>
          <div className={styles.about__features_main}>
            <ul className={styles.about__features_list}>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>1</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText1")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>2</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText2")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>3</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText3")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>4</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText4")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>5</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText5")}
                </p>
              </li>
            </ul>
            <ul className={styles.about__features_list}>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>6</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText6")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>7</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText7")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>8</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText8")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>9</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText9")}
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>10</span>
                <p className={styles.about__item_text}>
                  {t("aboutUs.aboutUsFeatures.aboutUsFeaturesText10")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
