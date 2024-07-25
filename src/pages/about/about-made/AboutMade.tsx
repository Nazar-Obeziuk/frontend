import React from "react";
import styles from "./AboutMade.module.css";
import AboutMadeSlider from "./components/about-made-slider/AboutMadeSlider";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutMade: React.FC = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className={styles.about__made_section}>
        <div className={styles.container}>
          <div className={styles.about__made_wrapper}>
            <div className={styles.about__made_route}>
              <NavLink to={"/"}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  className={styles.about__router_icon}
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
                className={styles.about__router_arrow}
              />
              <NavLink to={"/home/prostopoo/about"}>
                <p className={styles.about__router_name}>
                  {t("production.productionRoute1")}
                </p>
              </NavLink>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.about__router_arrow}
              />
              <p
                className={`${styles.about__router_name} ${styles.about__router_active}`}
              >
                {t("production.productionRoute2")}
              </p>
            </div>
            <div className={styles.about__made_name}>
              <h2 className={styles.about__name_title}>
                {t("production.productionTitle")}
              </h2>
            </div>
            <div className={styles.about__made_main}>
              <div className={styles.about__main_info}>
                <h2 className={styles.about__info_title}>
                  {t("production.productionSubtitle")}
                </h2>
                <div className={styles.about__info_block}>
                  <span className={styles.about__block_count}>1</span>
                  <p className={styles.about__block_text}>
                    {t("production.productionText1")}
                  </p>
                </div>
                <div className={styles.about__info_block}>
                  <span className={styles.about__block_count}>2</span>
                  <p className={styles.about__block_text}>
                    {t("production.productionText2Child1")}
                    <span className={styles.about__text_primary}>
                      {t("production.productionText2Child2")}
                    </span>
                    {t("production.productionText2Child3")}
                  </p>
                </div>
                <ul className={styles.about__info_list}>
                  <li className={styles.about__list_item}>
                    <span className={styles.about__item_bold}>
                      {t("production.productionText3Child1")}
                    </span>
                    {t("production.productionText3Child2")}
                  </li>
                  <li className={styles.about__list_item}>
                    <span className={styles.about__item_bold}>
                      {t("production.productionText4Child1")}
                    </span>
                    {t("production.productionText4Child2")}
                  </li>
                  <li className={styles.about__list_item}>
                    <span className={styles.about__item_bold}>
                      {t("production.productionText5Child1")}
                    </span>
                    {t("production.productionText5Child2")}
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
                {t("production.productionStepsTitle")}
              </h2>
              <div className={styles.about__galery_main}>
                <AboutMadeSlider key={"uniq1"} />
              </div>
            </div>
            <p className={styles.about__galery_text}>
              {t("production.productionText6Child1")}
              <span className={styles.about__galery_primary}>
                {t("production.productionText6Child2")}
              </span>
              {t("production.productionText6Child3")}
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMade;
