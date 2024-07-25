import React from "react";
import styles from "./AboutPolicy.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className={`${styles.about__policy_section} ${styles.about__policy_first}`}
      >
        <div className={styles.container}>
          <div className={styles.about__policy_wrapper}>
            <div className={styles.about__policy_route}>
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
                  {t("privacy.privacyRoute1")}
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
                {t("privacy.privacyRoute2")}
              </p>
            </div>
            <div className={styles.about__policy_name}>
              <h2 className={styles.about__name_title}>
                {t("privacy.privacyMainTitle")}
              </h2>
            </div>
            <div className={styles.about__policy_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>1.</span>
                  {t("privacy.privacyBlock1Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.1.</span>
                  {t("privacy.privacyBlock1Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.2.</span>
                  {t("privacy.privacyBlock1Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.3.</span>
                  {t("privacy.privacyBlock1Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.4.</span>
                  {t("privacy.privacyBlock1Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.5.</span>
                  {t("privacy.privacyBlock1Text6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.6.</span>
                  {t("privacy.privacyBlock1Text7")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.7.</span>
                  {t("privacy.privacyBlock1Text8")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>1.7.1.</span>
                    {t("privacy.privacyBlock1Text9")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>1.7.2.</span>
                    {t("privacy.privacyBlock1Text10")}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.about__policy_section} ${styles.about__section_second}`}
      >
        <div className={styles.container}>
          <div className={styles.about__main_wrapper}>
            <div className={styles.about__policy_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>2.</span>
                  {t("privacy.privacyBlock2Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.1.</span>
                  {t("privacy.privacyBlock2Text2")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>3.</span>
                  {t("privacy.privacyBlock3Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.1.</span>
                  {t("privacy.privacyBlock3Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.2.</span>
                  {t("privacy.privacyBlock3Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.3.</span>
                  {t("privacy.privacyBlock3Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.4.</span>
                  {t("privacy.privacyBlock3Text5")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>4.</span>
                  {t("privacy.privacyBlock4Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.1.</span>
                  {t("privacy.privacyBlock4Text2")}
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock4Text3")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock4Text4")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.2.</span>
                  {t("privacy.privacyBlock4Text5")}
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock4Text6")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock4Text7")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock4Text8")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock4Text9")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.3.</span>
                  {t("privacy.privacyBlock4Text10")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>5.</span>
                  {t("privacy.privacyBlock5Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.1.</span>
                  {t("privacy.privacyBlock5Text2")}
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock5Text3")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock5Text4")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock5Text5")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock5Text6")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock5Text7")}
                  </li>
                </ul>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>6.</span>
                  {t("privacy.privacyBlock6Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.1.</span>
                  {t("privacy.privacyBlock6Text2")}
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text3")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text4")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text5")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text6")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text7")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text8")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock6Text9")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.2.</span>
                  {t("privacy.privacyBlock6Text10")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>7.</span>
                  {t("privacy.privacyBlock7Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.1.</span>
                  {t("privacy.privacyBlock7Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.2.</span>
                  {t("privacy.privacyBlock7Text3")}
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock7Text4")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock7Text5")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock7Text6")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock7Text7")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock7Text8")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.3.</span>
                  {t("privacy.privacyBlock7Text9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.4.</span>
                  {t("privacy.privacyBlock7Text10")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.5.</span>
                  {t("privacy.privacyBlock7Text11")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>8.</span>
                  {t("privacy.privacyBlock8Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.1.</span>
                  {t("privacy.privacyBlock8Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.2.</span>
                  {t("privacy.privacyBlock8Text3")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>9.</span>
                  {t("privacy.privacyBlock9Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.1.</span>
                  {t("privacy.privacyBlock9Text2")}
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock9Text3")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock9Text4")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock9Text5")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock9Text6")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock9Text7")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("privacy.privacyBlock9Text8")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.2.</span>
                  {t("privacy.privacyBlock9Text9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.3.</span>
                  {t("privacy.privacyBlock9Text10")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>10.</span>
                  {t("privacy.privacyBlock10Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>10.1.</span>
                  {t("privacy.privacyBlock10Text2")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>11.</span>
                  {t("privacy.privacyBlock11Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>11.1.</span>
                  {t("privacy.privacyBlock11Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>11.2.</span>
                  {t("privacy.privacyBlock11Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>11.3.</span>
                  {t("privacy.privacyBlock11Text4")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>12.</span>
                  {t("privacy.privacyBlock12Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>12.1.</span>
                  {t("privacy.privacyBlock12Text2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPolicy;
