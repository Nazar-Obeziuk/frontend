import React from "react";
import styles from "./AboutWarranty.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutWarranty: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className={`${styles.about__warranty_section} ${styles.about__warranty_first}`}
      >
        <div className={styles.container}>
          <div className={styles.about__warranty_wrapper}>
            <div className={styles.about__warranty_route}>
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
                  {t("warranty.warrantyRoute1")}
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
                {t("warranty.warrantyRoute2")}
              </p>
            </div>
            <div className={styles.about__warranty_name}>
              <h2 className={styles.about__name_title}>
                {t("warranty.warrantyTitle")}
              </h2>
            </div>
            <div className={styles.about__warranty_header}>
              <h2 className={styles.about__header_title}>
                {t("warranty.warrantyBlock1Title")}
              </h2>
              <p className={styles.about__warranty_text}>
                {t("warranty.warrantyText1Child1")}
                <span className={styles.about__text_bold}>
                  {t("warranty.warrantyText1Child2")}
                </span>
                <a
                  href="../../images/declaration-1.pdf"
                  target="_blank"
                  className={styles.about__header_link}
                >
                  {t("warranty.warrantyText1Child3")}
                </a>
                {t("warranty.warrantyText1Child4")}
              </p>
              <div className={styles.about__header_term}>
                <p className={styles.about__primary_text}>
                  {t("warranty.warrantyText2Child1")}
                  <span className={styles.about__text_bold}>
                    {t("warranty.warrantyText2Child2")}
                  </span>
                </p>
                <p className={styles.about__primary_text}>
                  {t("warranty.warrantyText3Child1")}
                  <span className={styles.about__text_bold}>
                    {t("warranty.warrantyText3Child2")}
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.about__warranty_main}>
              <h2 className={styles.about__main_title}>
                {t("warranty.warrantyBlock2Title")}
              </h2>
              <div className={styles.about__main_info}>
                <p className={styles.about__warranty_text}>
                  {t("warranty.warrantyText4")}
                </p>
                <span className={styles.about__text_bold}>
                  {t("warranty.warrantyList1Title")}
                </span>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Text1")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Text2")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Text3")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Text4")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Text5")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Text6")}
                  </li>
                  <li className={styles.about__list_item}>
                    {t("warranty.warrantyList1Tex7")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.about__warranty_section} ${styles.about__section_second}`}
      >
        <div className={styles.container}>
          <div className={styles.about__warranty_wrapper}>
            <div className={styles.about__wrapper_exchange}>
              <p className={styles.about__text_bold}>
                {t("warranty.warrantyList2Title")}
              </p>
              <ol className={styles.about__exchange_list}>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.</span>
                  {t("warranty.warrantyList2Text1")}
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.</span>
                  {t("warranty.warrantyList2Text2")}
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.</span>
                  {t("warranty.warrantyList2Text3")}
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.</span>
                  {t("warranty.warrantyList2Text4")}
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.</span>
                  {t("warranty.warrantyList2Text5")}
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.</span>
                  {t("warranty.warrantyList2Text6")}
                </li>
              </ol>
            </div>
            <div className={styles.about__wrapper_important}>
              <p className={styles.about__warranty_text}>
                <span className={styles.about__primary_text}>
                  {t("warranty.warrantyText5Child1")}
                </span>
                {t("warranty.warrantyText5Child2")}
              </p>
              <p className={styles.about__warranty_text}>
                {t("warranty.warrantyText6")}
              </p>
              <p className={styles.about__warranty_text}>
                {t("warranty.warrantyText7")}
              </p>
            </div>
            <div className={styles.about__wrapper_consumers}>
              <h2 className={styles.about__consumers_title}>
                {t("warranty.warrantyBlock3Title")}
              </h2>
              <div className={styles.about__consumers_main}>
                <p className={styles.about__text_bold}>
                  {t("warranty.warrantyBlock3Subtitle")}
                </p>
                <p className={styles.about__warranty_text}>
                  {t("warranty.warrantyText8")}
                </p>
              </div>
            </div>
            <div className={styles.about__wrapper_position}>
              <p className={styles.about__position_title}>
                {t("warranty.warrantyText9")}
              </p>
              <div className={styles.about__position_main}>
                <p className={styles.about__primary_text}>
                  {t("warranty.warrantyTextArticle1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>5)</span>
                  {t("warranty.warrantyTextArticle1Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>12)</span>
                  {t("warranty.warrantyTextArticle1Text2")}
                </p>
                <div className={styles.about__position_list}>
                  <p className={styles.about__warranty_text}>
                    a) {t("warranty.warrantyTextArticle1Text3")}
                  </p>
                  <p className={styles.about__warranty_text}>
                    б) {t("warranty.warrantyTextArticle1Text4")}
                  </p>
                  <p className={styles.about__warranty_text}>
                    в) {t("warranty.warrantyTextArticle1Text5")}
                  </p>
                </div>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>13)</span>
                  {t("warranty.warrantyTextArticle1Text6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>15)</span>
                  {t("warranty.warrantyTextArticle1Text7")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>18)</span>
                  {t("warranty.warrantyTextArticle1Text8")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>22)</span>
                  {t("warranty.warrantyTextArticle1Text9")}
                </p>
              </div>
              <div className={styles.about__position_protect}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextArticle2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>5)</span>
                  {t("warranty.warrantyTextArticle2Text1")}
                </p>
              </div>
            </div>
            <div className={styles.about__wrapper_second}>
              <p className={styles.about__position_title}>
                {t("warranty.warrantyTextChart2")}
              </p>
              <p className={styles.about__position_title}>
                {t("warranty.warrantyTextChart2Text1")}
              </p>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextChart2Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>
                  {t("warranty.warrantyTextChart2Text3")}
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>
                    {t("warranty.warrantyTextChart2Text4")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>
                    {t("warranty.warrantyTextChart2Text5")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>3)</span>
                    {t("warranty.warrantyTextChart2Text6")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>4)</span>
                    {t("warranty.warrantyTextChart2Text7")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>5)</span>
                    {t("warranty.warrantyTextChart2Text8")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>6)</span>
                    {t("warranty.warrantyTextChart2Text9")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>7)</span>
                    {t("warranty.warrantyTextChart2Text10")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>
                  {t("warranty.warrantyTextChart2Text11")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span>
                  {t("warranty.warrantyTextChart2Text12")}
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>
                    {t("warranty.warrantyTextChart2Text13")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>
                    {t("warranty.warrantyTextChart2Text14")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>3)</span>
                    {t("warranty.warrantyTextChart2Text15")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>4)</span>
                    {t("warranty.warrantyTextChart2Text16")}
                  </li>
                </ul>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextArticle5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>
                  {t("warranty.warrantyTextArticle5Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>
                  {t("warranty.warrantyTextArticle5Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span>
                  {t("warranty.warrantyTextArticle5Text3")}
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextArticle6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>
                  {t("warranty.warrantyTextArticle6Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>
                  {t("warranty.warrantyTextArticle6Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span>
                  {t("warranty.warrantyTextArticle6Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>6.</span>
                  {t("warranty.warrantyTextArticle6Text4")}
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextArticle7")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>
                  {t("warranty.warrantyTextArticle7Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>
                  {t("warranty.warrantyTextArticle7Text2")}
                </p>
                <p className={styles.about__warranty_text}>
                  {t("warranty.warrantyTextArticle7Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>6.</span>
                  {t("warranty.warrantyTextArticle7Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>7.</span>
                  {t("warranty.warrantyTextArticle7Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>8.</span>
                  {t("warranty.warrantyTextArticle7Text6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>9.</span>
                  {t("warranty.warrantyTextArticle7Text7")}
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextArticle8")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>
                  {t("warranty.warrantyTextArticle8Text1")}
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>
                    {t("warranty.warrantyTextArticle8Text2")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>
                    {t("warranty.warrantyTextArticle8Text3")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>3)</span>
                    {t("warranty.warrantyTextArticle8Text4")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span
                    className={`${styles.about__warranty_text} ${styles.about__text_hidden}`}
                  >
                    5.
                  </span>
                  {t("warranty.warrantyTextArticle8Text5")}
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>
                    {t("warranty.warrantyTextArticle8Text6")}
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>
                    {t("warranty.warrantyTextArticle8Text7")}
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>
                  {t("warranty.warrantyTextArticle8Text8")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span>
                  {t("warranty.warrantyTextArticle8Text9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>4.</span>
                  {t("warranty.warrantyTextArticle8Text10")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>5.</span>
                  {t("warranty.warrantyTextArticle8Text11")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span
                    className={`${styles.about__warranty_text} ${styles.about__text_hidden}`}
                  >
                    5.
                  </span>
                  {t("warranty.warrantyTextArticle8Text12")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>6.</span>
                  {t("warranty.warrantyTextArticle8Text13")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>7.</span>
                  {t("warranty.warrantyTextArticle8Text14")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>9.</span>
                  {t("warranty.warrantyTextArticle8Text15")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>11.</span>
                  {t("warranty.warrantyTextArticle8Text16")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>14.</span>
                  {t("warranty.warrantyTextArticle8Text17")}
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextArticle9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>
                  {t("warranty.warrantyTextArticle9Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>
                  {t("warranty.warrantyTextArticle9Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span>
                  {t("warranty.warrantyTextArticle9Text3")}
                </p>
              </div>
            </div>
            <div className={styles.about__wrapper_second}>
              <p className={styles.about__position_title}>
                {t("warranty.warrantyTextChart5")}
              </p>
              <div className={styles.about__position_five}>
                <p className={styles.about__position_title}>
                  {t("warranty.warrantyTextChart5Text1")}
                </p>
                <div className={styles.about__second_main}>
                  <p className={styles.about__list_numeric}>
                    <span className={styles.about__warranty_text}>1.</span>
                    {t("warranty.warrantyTextChart5Text2")}
                  </p>
                  <p className={styles.about__list_numeric}>
                    <span className={styles.about__warranty_text}>2.</span>
                    {t("warranty.warrantyTextChart5Text3")}
                  </p>
                  <p className={styles.about__list_numeric}>
                    <span className={styles.about__warranty_text}>3.</span>
                    {t("warranty.warrantyTextChart5Text4")}
                  </p>
                  <ul className={styles.about__warranty_list}>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>1)</span>
                      {t("warranty.warrantyTextChart5Text5")}
                    </li>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>2)</span>
                      {t("warranty.warrantyTextChart5Text6")}
                    </li>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>3)</span>
                      {t("warranty.warrantyTextChart5Text7")}
                    </li>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>4)</span>
                      {t("warranty.warrantyTextChart5Text8")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWarranty;
