import React from "react";
import styles from "./ClientRecomendation.module.css";

const ClientRecommendation: React.FC = () => {
  return (
    <>
      <section className={styles.client__recommendation_section}>
        <div className={styles.container}>
          <div className={styles.client__recommendation_wrapper}>
            <div className={styles.client__recommendation_route}>
              <img
                src="../../images/home-icon.svg"
                alt="home icon"
                className={styles.client__router_icon}
              />
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.client__router_arrow}
              />
              <p className={styles.client__router_name}>Клієнтам</p>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.client__router_arrow}
              />
              <p
                className={`${styles.client__router_name} ${styles.client__router_active}`}
              >
                Рекомендації
              </p>
            </div>
            <div className={styles.client__recommendation_name}>
              <h2 className={styles.client__name_title}>Рекомендації</h2>
            </div>
            <div className={styles.client__recommendation_info}>
              <h3 className={styles.client__info_title}>
                Рекомендації щодо застосування устілок:
              </h3>
              <ul className={styles.client__info_list}>
                <li className={styles.client__list_item}>
                  використовуйте устілки у взутті з закритою п’ятою;
                </li>
                <li className={styles.client__list_item}>
                  під час підбору передбачайте, що устілки додають об’єму
                  всередині взуття;
                </li>
                <li className={styles.client__list_item}>
                  можливе самостійне підрізання в передній частині за допомогою
                  звичайних ножиць. Підрізання задньої частини устілки
                  недопустиме;
                </li>
                <li className={styles.client__list_item}>
                  можливе тимчасове виникнення відчуття дискомфорту після
                  початку використання устілок;
                </li>
                <li className={styles.client__list_item}>
                  з метою зменшення відчуття дискомфорту рекомендовано
                  використовувати устілки до двох годин на день протягом першого
                  тижня, після чого час використання варто поступово
                  збільшувати;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.client__recommendation_section} ${styles.client__main_section}`}
      >
        <div className={styles.container}>
          <div className={styles.client__recommendation_wrapper}>
            <div className={styles.client__wrapper_galery}>
              <div className={styles.client__galery_block}>
                <div className={styles.client__galery_banners}>
                  <div className={styles.client__galery_item}>
                    <img
                      src="../../images/recommendation-1.svg"
                      alt="recommendation icon"
                      className={styles.client__banners_item}
                    />
                    <span className={styles.client__count_item}>1</span>
                    <p className={styles.client__info_text}>
                      Дістаньте стару устілку
                    </p>
                  </div>
                  <div className={styles.client__galery_item}>
                    <img
                      src="../../images/recommendation-2.svg"
                      alt="recommendation icon"
                      className={styles.client__banners_item}
                    />
                    <span className={styles.client__count_item}>2</span>
                    <p className={styles.client__info_text}>
                      Розмістіть устілку{" "}
                      <span className={styles.client__text_bold}>
                        Prostopoo
                      </span>
                    </p>
                  </div>
                  <div className={styles.client__galery_item}>
                    <img
                      src="../../images/recommendation-3.svg"
                      alt="recommendation icon"
                      className={styles.client__banners_item}
                    />
                    <span className={styles.client__count_item}>3</span>
                    <p className={styles.client__info_text}>
                      За потреби — підріжте передню частину
                    </p>
                  </div>
                </div>
                {/* <div className={styles.client__galery_count}>
                  <div className={styles.client__count_line}></div>
                  
                  <div className={styles.client__count_line}></div>
                </div>
                <div className={styles.client__galery_info}>
                  
                  <p className={styles.client__info_text}>
                    Розмістіть устілку
                    <span className={styles.client__text_bold}>Prostopoo</span>
                  </p>
                </div> */}
              </div>
            </div>
            <div className={styles.client__wrapper_main}>
              <div className={styles.client__main_remember}>
                <h2 className={styles.client__main_title}>
                  Під час використання устілок, треба пам’ятати:
                </h2>
                <ul className={styles.client__info_list}>
                  <li className={styles.client__list_item}>
                    моделювання устілок під взуття неможливе;
                  </li>
                  <li className={styles.client__list_item}>
                    устілка моделюється під стопу користувача.
                  </li>
                </ul>
              </div>
              <div className={styles.client__main_care}>
                <h2 className={styles.client__main_title}>
                  Рекомендації з догляду за устілками:
                </h2>
                <ul className={styles.client__info_list}>
                  <li className={styles.client__list_item}>
                    протирайте устілки за допомогою вологої губки або серветки;
                  </li>
                  <li className={styles.client__list_item}>
                    не сушіть на нагрівальних приладах, в мікрохвильовій печі та
                    не піддавайте обробці паром.
                  </li>
                </ul>
                <div className={styles.client__care_banners}>
                  <img
                    src="../../images/ban-1-icon.svg"
                    alt="care icon"
                    className={styles.client__care_icon}
                  />
                  <img
                    src="../../images/ban-2-icon.svg"
                    alt="care icon"
                    className={styles.client__care_icon}
                  />
                  <img
                    src="../../images/ban-3-icon.svg"
                    alt="care icon"
                    className={styles.client__care_icon}
                  />
                  <img
                    src="../../images/ban-4-icon.svg"
                    alt="care icon"
                    className={styles.client__care_icon}
                  />
                </div>
              </div>
              <div className={styles.client__main_save}>
                <h2 className={styles.client__main_title}>Умови зберігання:</h2>
                <div className={styles.client__save_block}>
                  <ul className={styles.client__info_list}>
                    <li className={styles.client__list_item}>
                      температура повітря від +5 до +35°C;
                    </li>
                    <li className={styles.client__list_item}>
                      вологість повітря 15-70%.
                    </li>
                  </ul>
                  <img
                    src="../../images/tempurature-icon.svg"
                    alt=""
                    className={styles.client__save_icon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientRecommendation;
