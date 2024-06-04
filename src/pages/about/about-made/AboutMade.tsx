import React from "react";
import styles from "./AboutMade.module.css";
import AboutMadeSlider from "./components/about-made-slider/AboutMadeSlider";

const AboutMade: React.FC = () => {
  return (
    <React.Fragment>
      <section className={styles.about__made_section}>
        <div className={styles.container}>
          <div className={styles.about__made_wrapper}>
            <div className={styles.about__made_route}>
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
                Виготовлення
              </p>
            </div>
            <div className={styles.about__made_name}>
              <h2 className={styles.about__name_title}>Виготовлення</h2>
            </div>
            <div className={styles.about__made_main}>
              <div className={styles.about__main_info}>
                <h2 className={styles.about__info_title}>
                  Технологія виготовлення індивідуальних устілок передбачає
                  кілька важливих переваг для наших клієнтів:
                </h2>
                <div className={styles.about__info_block}>
                  <span className={styles.about__block_count}>1</span>
                  <p className={styles.about__block_text}>
                    Індивідуальні ортопедичні устілки виготовляють за сучасною
                    німецькою технологією CAD/CAM із використанням безпечних та
                    якісних матеріалів.
                  </p>
                </div>
                <div className={styles.about__info_block}>
                  <span className={styles.about__block_count}>2</span>
                  <p className={styles.about__block_text}>
                    Використання технології{" "}
                    <span className={styles.about__text_primary}>CAD/CAM</span>{" "}
                    у виробництві устілок має безліч переваг.
                  </p>
                </div>
                <ul className={styles.about__info_list}>
                  <li className={styles.about__list_item}>
                    <span className={styles.about__item_bold}>
                      Точність і деталізація
                    </span>
                    : дозволяє створювати 3D моделі, для моделювання устілок.
                  </li>
                  <li className={styles.about__list_item}>
                    <span className={styles.about__item_bold}>
                      Індивідуальний підхід
                    </span>
                    : дозволяє враховувати індивідуальні особливості клієнтів.
                  </li>
                  <li className={styles.about__list_item}>
                    <span className={styles.about__item_bold}>
                      Оптимізація та автоматизація
                    </span>
                    : швидкість проєктування та виготовлення з використанням
                    сучасної технології CAD/CAM та високоякісних матеріалів.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about__galery_section}>
        <div className={styles.container}>
          <div className={styles.about__galery_wrapper}>
            <div className={styles.about__main_galery}>
              <h2 className={styles.about__galery_title}>
                Етапи виготовлення:
              </h2>
              <div className={styles.about__galery_main}>
                <AboutMadeSlider key={"uniq1"} />
              </div>
            </div>
            <p className={styles.about__galery_text}>
              Завдяки сучасній німецькій технології{" "}
              <span className={styles.about__galery_primary}>CAD/CAM</span> ви
              отримаєте ідеально підібрані індивідуальні устілки, які не тільки
              вбережуть ваші ноги від появи або прогресування проблем,
              пов'язаних з опорно-руховим апаратом, а й зроблять ваше життя
              комфортнішим, активнішим і здоровішим.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMade;
