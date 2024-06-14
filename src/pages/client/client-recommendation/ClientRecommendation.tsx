import React from "react";
import styles from "./ClientRecomendation.module.css";
import { NavLink } from "react-router-dom";

const ClientRecommendation: React.FC = () => {
  return (
    <>
      <section className={styles.client__recommendation_section}>
        <div className={styles.container}>
          <div className={styles.client__recommendation_wrapper}>
            <div className={styles.client__recommendation_route}>
              <NavLink to={"/"}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  className={styles.client__router_icon}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9412 9.69951C15.61 9.92767 15.2538 9.98393 14.8538 9.96518C14.8507 11.6123 14.8663 13.2251 14.8444 14.866C14.8288 15.7411 14.0819 16.4756 13.207 16.4912C12.332 16.5069 11.454 16.4975 10.5759 16.4944C10.2946 16.4944 10.1071 16.2912 10.1071 15.9911C10.104 15.2504 10.1071 14.5097 10.104 13.7689C10.104 13.2813 10.104 12.7906 10.104 12.3031C10.1009 11.7998 9.78529 11.4779 9.27594 11.4717C8.79783 11.4654 8.31973 11.4654 7.84163 11.4717C7.34478 11.4779 7.02605 11.803 7.02605 12.2999C7.02292 13.5095 7.02292 14.7159 7.02292 15.9255C7.02292 16.3287 6.85418 16.4975 6.44795 16.4975C5.65424 16.4975 4.86053 16.4975 4.06682 16.4975C3.02 16.4944 2.27629 15.763 2.27004 14.7128C2.26379 13.1313 2.26691 11.5467 2.26691 9.96518C0.816983 10.1027 -0.0267248 8.47119 1.01072 7.41789C3.15437 5.2738 5.29801 3.1297 7.44478 0.988734C7.57915 0.848087 7.73539 0.732443 7.90725 0.638678C8.40723 0.388638 9.18532 0.466776 9.66029 0.954354C10.8634 2.18893 12.0914 3.3985 13.3101 4.61744C14.2444 5.55509 15.1725 6.49899 16.1225 7.42414C16.7474 8.03362 16.6881 9.20255 15.9412 9.69951Z"
                    stroke="white"
                    strokeOpacity="0.8"
                  />
                </svg>
              </NavLink>
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
                  <div className={styles.client__galery_line}></div>
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
                  <div className={styles.client__galery_line}></div>
                  <div className={styles.client__galery_item}>
                    <img
                      src="../../images/recommendation-3.svg"
                      alt="recommendation icon"
                      className={`${styles.client__banners_item} ${styles.client__banners_third}`}
                    />
                    <span className={styles.client__count_item}>3</span>
                    <p className={styles.client__info_text}>
                      За потреби — підріжте передню частину
                    </p>
                  </div>
                </div>
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
