import React, { useState } from "react";
import styles from "./AboutTechnologies.module.css";

const AboutTechnologies: React.FC = () => {
  const [isOpenDetailsBlock, setIsOpenDetailsBlock] = useState(false);

  const handleInfoBlock = () => {
    setIsOpenDetailsBlock((prevState) => !prevState);
  };

  return (
    <section className={styles.about__technologies_section}>
      <div className={styles.container}>
        <div className={styles.about__technologies_wrapper}>
          <div className={styles.about__wrapper_banner}>
            <img
              src="../../images/about-technologies-banner.jpg"
              alt="about technologies banner"
              className={styles.about__banner_image}
            />
          </div>
          <div className={styles.about__wrapper_info}>
            <h2 className={styles.about__info_title}>
              Матеріали та технології
            </h2>
            <div className={styles.about__info_main}>
              <p className={styles.about__main_text}>
                Ми виготовляємо устілки за сучасною німецькою технологією 3D
                CAD/CAM із використанням безпечних матеріалів.
              </p>
              <p className={styles.about__main_text}>
                Основа устілки виготовлена з якісного матеріалу{" "}
                <span className={styles.about__text_primary}>EVA.</span>
              </p>
              <div className={styles.about__main_for}>
                <p className={styles.about__main_text}>
                  <span className={styles.about__text_primary}>EVA (ЕВА)</span>{" "}
                  — комфортний, універсальний та гіпоалергенний матеріал. Має
                  різну щільність, відповідно до потреби та діагнозу замовника:
                </p>
                <div
                  onClick={handleInfoBlock}
                  className={styles.about__inner_details}
                >
                  <p className={styles.about__details_text}>
                    {isOpenDetailsBlock ? "згорнути" : "детальніше"}
                  </p>
                  <svg
                    className={`${styles.about__details_icon} ${
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
                  <ul className={styles.about__main_list}>
                    <li className={styles.about__list_item}>
                      <span className={styles.about__item_bold}>для дітей</span>{" "}
                      використовують EVA м’якого типу, щоб не травмувати м’які
                      тканини дитячих ніг;
                    </li>
                    <li className={styles.about__list_item}>
                      <span className={styles.about__item_bold}>
                        для людей з діабетом і ревматичними розладами стопи
                      </span>{" "}
                      використовують EVA м’якого типу;
                    </li>
                    <li className={styles.about__list_item}>
                      <span className={styles.about__item_bold}>
                        для спортивних устілок
                      </span>{" "}
                      — комбіновану EVA, вона має в своїй структурі два шари
                      матеріалу, один із яких жорсткіший за інший. Така
                      комбінація сприяє правильному підтриманню та розвантаженню
                      стоп, а також бере участь у амортизації та пом’якшенні під
                      час занять спортом.
                    </li>
                  </ul>
                )}
              </div>
              <p className={styles.about__main_text}>
                Якісне німецьке покриття має широкий вибір матеріалів за
                кольором та призначенням.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTechnologies;
