import React, { useState } from "react";
import styles from "./HomeInfo.module.css";
import { Trans, useTranslation } from "react-i18next";

const HomeInfo: React.FC = () => {
  const [isOpenMobileInfoBlock, setIsOpenMobileInfoBlock] = useState(false);
  const { t } = useTranslation();

  const handleInfoBlock = () => {
    setIsOpenMobileInfoBlock((prevState) => !prevState);
  };

  return (
    <section className={styles.home__info_section}>
      <div className={styles.container}>
        <div className={styles.home__info_wrapper}>
          <div className={styles.home__wrapper_about}>
            <p className={styles.home__info_text}>
              {t("home.homeInfo.homeInfoText1Child1")}
              <span className={styles.home__info_primary}>
                {t("home.homeInfo.homeInfoText1Child2")}
              </span>
              {t("home.homeInfo.homeInfoText1Child3")}
            </p>
            <p className={styles.home__info_text}>
              {t("home.homeInfo.homeInfoText2Child1")}
              <span className={styles.home__info_primary}>
                {t("home.homeInfo.homeInfoText2Child2")}
              </span>
              <span className={styles.home__info_white}>
                {t("home.homeInfo.homeInfoText2Child3")}
              </span>{" "}
              {t("home.homeInfo.homeInfoText2Child4")}
            </p>
            <p className={styles.home__info_text}>
              {t("home.homeInfo.homeInfoText3")}
            </p>
            <p className={styles.home__info_university}>
              <span className={styles.home__info_primary}>
                {t("home.homeInfo.homeInfoText4Child1")}
              </span>
              {t("home.homeInfo.homeInfoText4Child2")}
            </p>
          </div>
          <div onClick={handleInfoBlock} className={styles.home__info_details}>
            <p className={styles.home__details_text}>
              {isOpenMobileInfoBlock
                ? t("details.detailsClose")
                : t("details.detailsOpen")}
            </p>
            <svg
              className={`${styles.home__details_icon} ${
                isOpenMobileInfoBlock ? `${styles.active}` : ""
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
          <div className={styles.home__wrapper_more}>
            <p className={styles.home__info_bold}>
              {t("home.homeInfo.homeInfoText5")}
            </p>
            <p className={styles.home__info_text}>
              {t("home.homeInfo.homeInfoText6")}
            </p>
            <p className={styles.home__info_bold}>
              {t("home.homeInfo.homeInfoText7")}
            </p>
            <div className={styles.home__info_offer}>
              <p className={styles.home__info_text}>
                <span className={styles.home__info_white}>
                  {t("home.homeInfo.homeInfoText8Child1")}
                </span>
                {t("home.homeInfo.homeInfoText8Child2")}
              </p>
              <p className={styles.home__info_text}>
                <span className={styles.home__info_white}>
                  {t("home.homeInfo.homeInfoText9Child1")}
                </span>
                {t("home.homeInfo.homeInfoText9Child2")}
              </p>
              <p className={styles.home__info_text}>
                <span className={styles.home__info_white}>
                  {t("home.homeInfo.homeInfoText10Child1")}
                </span>
                {t("home.homeInfo.homeInfoText10Child2")}
              </p>
            </div>
          </div>
          {isOpenMobileInfoBlock && (
            <div className={styles.home__more_mobile}>
              <p className={styles.home__info_bold}>
                {t("home.homeInfo.homeInfoText5")}
              </p>
              <p className={styles.home__info_text}>
                {t("home.homeInfo.homeInfoText6")}
              </p>
              <p className={styles.home__info_bold}>
                {t("home.homeInfo.homeInfoText7")}
              </p>
              <div className={styles.home__info_offer}>
                <p className={styles.home__info_text}>
                  <span className={styles.home__info_white}>
                    {t("home.homeInfo.homeInfoText8Child1")}
                  </span>
                  {t("home.homeInfo.homeInfoText8Child2")}
                </p>
                <p className={styles.home__info_text}>
                  <span className={styles.home__info_white}>
                    {t("home.homeInfo.homeInfoText9Child1")}
                  </span>
                  {t("home.homeInfo.homeInfoText9Child2")}
                </p>
                <p className={styles.home__info_text}>
                  <span className={styles.home__info_white}>
                    {t("home.homeInfo.homeInfoText10Child1")}
                  </span>
                  {t("home.homeInfo.homeInfoText10Child2")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
