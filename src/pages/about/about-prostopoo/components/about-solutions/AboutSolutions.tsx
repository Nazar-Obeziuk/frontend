import React from "react";
import styles from "./AboutSolutions.module.css";

const AboutSolutions: React.FC = () => {
  return (
    <section className={styles.about__solutions_section}>
      <div className={styles.container}>
        <div className={styles.about__solutions_wrapper}>
          <div className={styles.about__wrapper_info}>
            <h2 className={styles.about__info_title}>
              Пропонуємо просте рішення
            </h2>
            <p className={styles.about__info_text}>
              Замовити свої устілки{" "}
              <span className={styles.about__text_primary}>PROSTOPOO</span> ви
              можете, не виходячи з дому, у нас на сайті, або за номером
              телефону. Якнайшвидше ви отримаєте пінобокс для виготовлення
              відбитку стопи. Зробіть відтиск стопи та відправте за зворотною
              адресою. Доставку по Україні ми забезпечуємо{" "}
              <span className={styles.about__text_primary}>безкоштовно.</span>
            </p>
            <p className={styles.about__info_text}>
              Окрім якісного продукту ми надаємо безкоштовну консультацію
              фізичного терапевта, за результатом сканування та щодо подальших
              дій для покращення стану стоп. Після уточнення всіх деталей,
              протягом{" "}
              <span className={styles.about__text_primary}>24 годин</span>,
              устілки буде виготовлено.
            </p>
          </div>
          <div className={styles.about__wrapper_banner}>
            <img
              src="../../images/about-solutions-banner.jpg"
              alt="about solutions banner"
              className={styles.about__banner_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolutions;
