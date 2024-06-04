import React from "react";
import styles from "./AboutContacts.module.css";

const AboutContacts: React.FC = () => {
  return (
    <section className={styles.about__contacts_section}>
      <div className={styles.container}>
        <div className={styles.about__contacts_wrapper}>
          <div className={styles.about__contacts_route}>
            <img
              src="../../images/home-icon.svg"
              alt="home icon"
              className={styles.about__router_icon}
            />
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.about__router_arrow}
            />
            <p className={styles.about__router_name}>ПРО PROSTOPOO</p>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.about__router_arrow}
            />
            <p
              className={`${styles.about__router_name} ${styles.about__router_active}`}
            >
              Контакти
            </p>
          </div>
          <div className={styles.about__contacts_name}>
            <h2 className={styles.about__name_title}>Контакти</h2>
          </div>
          <div className={styles.about__contacts_main}>
            <h2 className={styles.about__main_title}>
              Інтернет-магазин{" "}
              <span className={styles.about__title_upper}>Prostopoo</span>
            </h2>
            <div className={styles.about__main_info}>
              <div className={styles.about__info_location}>
                <img
                  src="../../images/about-contacts-location.svg"
                  alt=""
                  className={styles.about__location_icon}
                />
                <p className={styles.about__info_text}>
                  03045, Україна, м. Київ, вул. Набережно-Корчуватська, 14
                  prostopoo.com.ua
                </p>
              </div>
              <div className={styles.about__info_location}>
                <img
                  src="../../images/about-contacts-phone.svg"
                  alt=""
                  className={styles.about__location_icon}
                />
                <p className={styles.about__info_text}>
                  0 (800) 500 127 <br /> 0 (800) 500 128
                </p>
              </div>
            </div>
            <p className={styles.about__main_text}>
              <span className={styles.about__text_primary}>*</span> дзвінки по
              Україні{" "}
              <span className={styles.about__text_bold}>БЕЗКОШТОВНІ</span>
            </p>
            <div className={styles.about__main_payment}>
              <span className={styles.about__text_primary}>Реквізити:</span>
              <p className={styles.about__info_text}>
                ФОП Стадольська Лілія Іванівна <br /> Код ЄДРПОУ 2826212066{" "}
                <br /> Дата реєстрації: 29.07.2017 <br /> №20520000000002678{" "}
                <br /> 03045, Україна, м. Київ, <br /> вул.
                Набережно-Корчуватська, 14 <br /> (метро Видубичі)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContacts;
