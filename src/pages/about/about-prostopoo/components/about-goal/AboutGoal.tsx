import React from "react";
import styles from "./AboutGoal.module.css";
import { useTranslation } from "react-i18next";

const AboutGoal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about__goal_section}>
      <div className={styles.container}>
        <div className={styles.about__goal_wrapper}>
          <div className={styles.about__wrapper_info}>
            <h2 className={styles.about__info_title}>
              {t("aboutUs.aboutUsGoal.aboutUsGoalTitle")}
            </h2>
            <p className={styles.about__info_text}>
              {t("aboutUs.aboutUsGoal.aboutUsGoalText1")}
            </p>
            <p className={styles.about__info_text}>
              {t("aboutUs.aboutUsGoal.aboutUsGoalText2")}
            </p>
            <p className={styles.about__info_text}>
              {t("aboutUs.aboutUsGoal.aboutUsGoalText3")}
            </p>
          </div>
          <div className={styles.about__wrapper_banner}>
            <img
              src="../../images/about-goal-banner.jpg"
              alt="about goal banner"
              className={styles.about__banner_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGoal;
