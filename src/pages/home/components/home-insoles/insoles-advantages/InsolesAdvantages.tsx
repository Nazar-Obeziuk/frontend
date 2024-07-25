import React from "react";
import styles from "./InsolesAdvantages.module.css";
import { useTranslation } from "react-i18next";

const InsolesAdvantages: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        {t(
          "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesTitleChild1"
        )}
        <span className={styles.home__title_primary}>
          {t(
            "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesTitleChild2"
          )}
        </span>
        {t(
          "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesTitleChild3"
        )}
      </h2>
      <div className={styles.home__inner_main}>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/protect-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t(
              "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesItemText1"
            )}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/deformation-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t(
              "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesItemText2"
            )}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/made-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t(
              "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesItemText3"
            )}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/lost-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t(
              "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesItemText4"
            )}
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/light-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            {t(
              "home.homeAdvantagesNeedsInsoles.homeAdvantagesNeedsInsolesItemText5"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsolesAdvantages;
