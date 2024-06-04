import React from "react";
import styles from "./InsolesAdvantages.module.css";

const InsolesAdvantages: React.FC = () => {
  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        ПЕРЕВАГИ{" "}
        <span className={styles.home__title_primary}>ОРТОПЕДИЧНИХ</span> УСТІЛОК
        НА ЗАМОВЛЕННЯ
      </h2>
      <div className={styles.home__inner_main}>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/protect-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            Захищають від ударних хвиль при фізичній активності
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/deformation-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>Корегують деформації стоп</p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/made-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            Виготовлені з екологічного матеріалу
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/lost-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            Компенсують втрачені частини стопи
          </p>
        </div>
        <div className={styles.home__insole_item}>
          <img
            src="../../images/light-icon.svg"
            alt="insole item icon"
            className={styles.home__item_image}
          />
          <p className={styles.home__item_text}>
            Мають легку та м’яку структуру
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsolesAdvantages;
