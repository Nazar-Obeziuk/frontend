import React, { useState } from "react";
import styles from "./AboutTechnologies.module.css";
import { useTranslation } from "react-i18next";

const AboutTechnologies: React.FC = () => {
  const [isOpenDetailsBlock, setIsOpenDetailsBlock] = useState(false);
  const { t } = useTranslation();

  const handleInfoBlock = () => {
    setIsOpenDetailsBlock((prevState) => !prevState);
  };

  return (
    <section className={styles.about__technologies_section}>
      <div className={styles.container}>
        <div className={styles.about__technologies_wrapper}>
          <div className={styles.about__wrapper_banner}>
            <img
              src="../../images/about-technologies-banner.webp"
              alt="about technologies banner"
              className={styles.about__banner_image}
            />
          </div>
          <div className={styles.about__wrapper_info}>
            <h2 className={styles.about__info_title}>
              {t("aboutUs.aboutUsTechnologies.aboutUsTechnologiesTitle")}
            </h2>
            <div className={styles.about__info_main}>
              <p className={styles.about__main_text}>
                {t("aboutUs.aboutUsTechnologies.aboutUsTechnologiesText1")}
              </p>
              <p className={styles.about__main_text}>
                {t(
                  "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText2Child1"
                )}
                <span className={styles.about__text_primary}>
                  {t(
                    "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText2Child2"
                  )}
                </span>
              </p>
              <div className={styles.about__main_for}>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>
                    {t(
                      "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText3Child1"
                    )}
                  </span>
                  {t(
                    "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText3Child2"
                  )}
                </p>
                <div
                  onClick={handleInfoBlock}
                  className={styles.about__inner_details}
                >
                  <p className={styles.about__details_text}>
                    {isOpenDetailsBlock
                      ? t("details.detailsClose")
                      : t("details.detailsOpen")}
                  </p>
                  <svg
                    className={`${styles.about__details_icon} ${
                      isOpenDetailsBlock ? `${styles.active}` : ""
                    }`}
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.47732 6.95899L5.25 5L6 5.75676L3 9L3.86753e-08 5.75676L0.7 5L2.52268 6.97046L2.52268 3.00826e-08L3.47732 4.14667e-08L3.47732 6.95899Z"
                      fill="#FFED00"
                    />
                  </svg>
                </div>
                {isOpenDetailsBlock && (
                  <ul className={styles.about__main_list}>
                    <li className={styles.about__list_item}>
                      <span className={styles.about__item_bold}>
                        {t(
                          "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText4Child1"
                        )}
                      </span>
                      {t(
                        "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText4Child2"
                      )}
                    </li>
                    <li className={styles.about__list_item}>
                      <span className={styles.about__item_bold}>
                        {t(
                          "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText5Child1"
                        )}
                      </span>
                      {t(
                        "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText5Child2"
                      )}
                    </li>
                    <li className={styles.about__list_item}>
                      <span className={styles.about__item_bold}>
                        {t(
                          "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText6Child1"
                        )}
                      </span>
                      {t(
                        "aboutUs.aboutUsTechnologies.aboutUsTechnologiesText6Child2"
                      )}
                    </li>
                  </ul>
                )}
              </div>
              <p className={styles.about__main_text}>
                {t("aboutUs.aboutUsTechnologies.aboutUsTechnologiesText7")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTechnologies;
