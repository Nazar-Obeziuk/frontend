import React, { useState } from "react";
import styles from "./InsolesNeeds.module.css";
import { useTranslation } from "react-i18next";

const InsolesNeeds: React.FC = () => {
  const [isOpenDetailsBlock, setIsOpenDetailsBlock] = useState(false);
  const { t } = useTranslation();

  const handleInfoBlock = () => {
    setIsOpenDetailsBlock((prevState) => !prevState);
  };

  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesTitleChild1")}
        <span className={styles.home__title_primary}>
          {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesTitleChild2")}
        </span>
        {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesTitleChild3")}
      </h2>
      <div className={styles.home__inner_main}>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/sportman-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesItemText1")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/soldier-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesItemText2")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/pregnant-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesItemText3")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/children-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesItemText4")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/old-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesItemText5")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/everyone-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesItemText6")}
          </p>
        </div>
      </div>
      <div onClick={handleInfoBlock} className={styles.home__inner_details}>
        <p className={styles.home__details_text}>
          {isOpenDetailsBlock
            ? t("details.detailsClose")
            : t("details.detailsOpen")}
        </p>
        <svg
          className={`${styles.home__details_icon} ${
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
        <div className={styles.home__inner_more}>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc1Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc1Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc2Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc2Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc3Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc3Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc4Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhoNeedsInsoles.homeWhoNeedsInsolesDesc4Text")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsolesNeeds;
