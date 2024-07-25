import React from "react";
import styles from "./AboutSolutions.module.css";
import { useTranslation } from "react-i18next";

const AboutSolutions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about__solutions_section}>
      <div className={styles.container}>
        <div className={styles.about__solutions_wrapper}>
          <div className={styles.about__wrapper_info}>
            <h2 className={styles.about__info_title}>
              {t("aboutUs.aboutUsSolutions.aboutUsSolutionsTitle")}
            </h2>
            <p className={styles.about__info_text}>
              {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText1Child1")}
              <span className={styles.about__text_primary}>
                {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText1Child2")}
              </span>
              {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText1Child3")}
              <span className={styles.about__text_primary}>
                {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText1Child4")}
              </span>
            </p>
            <p className={styles.about__info_text}>
              {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText2Child1")}
              <span className={styles.about__text_primary}>
                {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText2Child2")}
              </span>
              {t("aboutUs.aboutUsSolutions.aboutUsSolutionsText2Child3")}
            </p>
          </div>
          <div className={styles.about__wrapper_banner}>
            <img
              src={t("aboutUs.aboutUsSolutions.aboutUsSolutionsImageURL")}
              alt="about solutions banner"
              className={styles.about__banner_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolutions;
