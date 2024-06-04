import React from "react";
import styles from "./HomeMade.module.css";

const HomeMade: React.FC = () => {
  return (
    <section className={styles.home__made_section}>
      <div className={styles.home__made_container}>
        <div className={styles.home__made_wrapper}>
          <div className={styles.home__made_info}>
            <h1 className={styles.home__info_title}>
              <span className={styles.home__title_small}>ЗРОБИ СВОЇ</span>{" "}
              <br />
              ІНДИВІДУАЛЬНІ <br /> ОРТОПЕДИЧНІ УСТІЛКИ <br />
              <span className={styles.home__title_small}>ВДОМА</span>
            </h1>
            <div className={styles.home__info_free}>
              <h3 className={styles.home__free_title}>Безкоштовно</h3>
              <div className={styles.home__free_block}>
                <span className={styles.home__free_item}>3D сканування</span>
                <span className={styles.home__free_item}>
                  консультація ерготерапевта
                </span>
              </div>
              <div className={styles.home__free_block}>
                <span className={styles.home__free_delivery}>
                  доставка до Вашого віділення Нової Пошти
                </span>
              </div>
            </div>
            <button className={styles.home__info_button} type="button">
              ЗАМОВИТИ УСТІЛКИ
            </button>
          </div>
          <div className={styles.home__made_insoles}>
            <img
              src="../images/home-insoles.png"
              alt="home made banner"
              className={styles.home__insoles_banner}
            />
          </div>
          <button className={styles.home__mobile_button} type="button">
            ЗАМОВИТИ УСТІЛКИ
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMade;
