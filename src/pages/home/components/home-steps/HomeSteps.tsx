import React from "react";
import styles from "./HomeSteps.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HomeSteps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__steps_section}>
      <div className={styles.container}>
        <div className={styles.home__steps_wrapper}>
          <h2 className={styles.home__steps_title}>
            {t("home.homeSteps.homeStepsTitleChild1")}
            <span className={styles.home__steps_primary}>
              {t("home.homeSteps.homeStepsTitleChild2")}
            </span>
            {t("home.homeSteps.homeStepsTitleChild3")}
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
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard1Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard1TextChild1")}
                  <a
                    href="https://google.com"
                    className={styles.home__text_primary}
                  >
                    {t("home.homeSteps.homeStepsCard1TextChild2")}
                  </a>
                  {t("home.homeSteps.homeStepsCard1TextChild3")}
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
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard2Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard2Text")}
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
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard3Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard3Text")}
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
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard4Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard4Text")}
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
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard5Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard5Text")}
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
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard6Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard6Text")}
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
              {t("home.homeSteps.homeStepsButtonOrderText")}
            </button>
            <NavLink
              to={"https://youtu.be/wzwtNwJ7TLQ"}
              target={"_blank"}
              className={`${styles.home__actions_button} ${styles.home__actions_video}`}
              type="button"
            >
              {t("home.homeSteps.homeStepsButtonVideoText")}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
