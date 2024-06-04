import React from "react";
import styles from "./AboutGoal.module.css";

const AboutGoal: React.FC = () => {
  return (
    <section className={styles.about__goal_section}>
      <div className={styles.container}>
        <div className={styles.about__goal_wrapper}>
          <div className={styles.about__wrapper_info}>
            <h2 className={styles.about__info_title}>
              Наша <span className={styles.about__title_upper}>мета</span> та{" "}
              <span className={styles.about__title_upper}>місія</span>
            </h2>
            <p className={styles.about__info_text}>
              Ми поставили собі за мету забезпечити зручність і швидкість
              процесу замовлення та виготовлення індивідуальних устілок у
              будь-якому місці, відповідно високим стандартам якості.
            </p>
            <p className={styles.about__info_text}>
              Ми прагнемо запропонувати винятково доступний та професійний
              сервіс. Допомогти в вирішенні різноманітних проблем стоп.
            </p>
            <p className={styles.about__info_text}>
              Ми робимо все можливе, щоб наші клієнти завжди були задоволені
              якістю устілок та сервісом.
            </p>
          </div>
          <div className={styles.about__wrapper_banner}>
            <img
              src="../images/about-goal-banner.jpg"
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
