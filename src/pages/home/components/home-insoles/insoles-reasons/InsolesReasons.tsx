import React, { useState } from "react";
import styles from "./InsoleReasons.module.css";
import { useTranslation } from "react-i18next";

const InsolesReasons: React.FC = () => {
  const [isOpenDetailsBlock, setIsOpenDetailsBlock] = useState(false);
  const { t } = useTranslation();

  const handleInfoBlock = () => {
    setIsOpenDetailsBlock((prevState) => !prevState);
  };

  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesTitleChild1")}
        <span className={styles.home__title_primary}>
          {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesTitleChild2")}
        </span>{" "}
        {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesTitleChild3")}
      </h2>
      <div className={styles.home__inner_main}>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/pain-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText1")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/varikoz-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText2")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/flat-foot-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText3")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/work-on-foot-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText4")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/overweight-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText5")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/diabet-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText6")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/diffirent-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText7")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/varusna-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText8")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/foot-hole-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText9")}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/amputation-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesItemText10")}
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
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc1Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc1Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc2Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc2Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc3Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc3Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc4Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc4Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc5Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc5Text")}
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc6Title")}
            </h3>
            <p className={styles.home__more_text}>
              {t("home.homeWhenNeedsInsoles.homeWhenNeedsInsolesDesc6Text")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsolesReasons;
