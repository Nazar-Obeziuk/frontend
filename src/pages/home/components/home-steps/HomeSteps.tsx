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
                  src="../../images/step-1.webp"
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
                  <NavLink
                    to={"/home/catalog/individual-orthopedic-insoles"}
                    className={styles.home__text_primary}
                  >
                    {t("home.homeSteps.homeStepsCard1TextChild2")}
                  </NavLink>
                  {t("home.homeSteps.homeStepsCard1TextChild3")}
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_second}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="../../images/step-2.webp"
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
                  <svg
                    className={styles.home__text_icon}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 9H9V4.5H6L10.1464 0.353553C10.3728 0.127177 10.6799 0 11 0C11.3201 0 11.6272 0.127177 11.8536 0.353553L16 4.5H13V9Z"
                      fill="white"
                    />
                    <path
                      d="M9 13H13V17.5H16L11.8536 21.6464C11.6272 21.8728 11.3201 22 11 22C10.6799 22 10.3728 21.8728 10.1464 21.6464L6 17.5H9V13Z"
                      fill="white"
                    />
                    <path
                      d="M4 6V16L0.707107 12.7071C0.254354 12.2544 0 11.6403 0 11C0 10.3597 0.254353 9.74565 0.707106 9.29289L4 6Z"
                      fill="white"
                    />
                    <path
                      d="M18 16V6L21.2929 9.29289C21.7456 9.74565 22 10.3597 22 11C22 11.6403 21.7456 12.2544 21.2929 12.7071L18 16Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_third}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="../../images/step-3.webp"
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
                  src="../../images/step-4.webp"
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
                  src="../../images/step-5.webp"
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
                  src="../../images/step-6.webp"
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
                  <svg
                    className={styles.home__text_icon}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 9H9V4.5H6L10.1464 0.353553C10.3728 0.127177 10.6799 0 11 0C11.3201 0 11.6272 0.127177 11.8536 0.353553L16 4.5H13V9Z"
                      fill="white"
                    />
                    <path
                      d="M9 13H13V17.5H16L11.8536 21.6464C11.6272 21.8728 11.3201 22 11 22C10.6799 22 10.3728 21.8728 10.1464 21.6464L6 17.5H9V13Z"
                      fill="white"
                    />
                    <path
                      d="M4 6V16L0.707107 12.7071C0.254354 12.2544 0 11.6403 0 11C0 10.3597 0.254353 9.74565 0.707106 9.29289L4 6Z"
                      fill="white"
                    />
                    <path
                      d="M18 16V6L21.2929 9.29289C21.7456 9.74565 22 10.3597 22 11C22 11.6403 21.7456 12.2544 21.2929 12.7071L18 16Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.home__steps_actions}>
            <NavLink
              to={"/home/catalog/individual-orthopedic-insoles"}
              className={`${styles.home__actions_button} ${styles.home__actions_order}`}
              type="button"
            >
              {t("home.homeSteps.homeStepsButtonOrderText")}
            </NavLink>
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
