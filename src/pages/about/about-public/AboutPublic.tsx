import React, { useEffect, useState } from "react";
import styles from "./AboutPublic.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/loader/Loader";
import { getAllFops } from "../../../services/fop/fop";
import { IFop } from "../../../services/fop/fop.interface";

const AboutPublic: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [policyFops, setPolicyFops] = useState<IFop[]>([]);

  const getFops = async () => {
    try {
      const response = await getAllFops(i18n.language);
      if (Array.isArray(response)) {
        setPolicyFops(response);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching FOPs data:", error);
    }
  };

  useEffect(() => {
    getFops();
  }, [i18n.language]);

  if (!policyFops) {
    return <Loader />;
  }

  return (
    <>
      <section
        className={`${styles.about__public_section} ${styles.about__public_first}`}
      >
        <div className={styles.container}>
          <div className={styles.about__public_wrapper}>
            <div className={styles.about__public_route}>
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
                  {t("public.publicRoute1")}
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
                {t("public.publicRoute2")}
              </p>
            </div>
            <div className={styles.about__public_name}>
              <h2 className={styles.about__name_title}>
                {t("public.publicMainTitle")}
              </h2>
            </div>
            <div className={styles.about__public_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__public_text}>
                  {t("public.publicText1Child1")}
                  {policyFops[0]?.second_fop_text}
                  {t("public.publicText1Child2")}
                </p>
                <p className={styles.about__public_text}>
                  {t("public.publicText2")}
                </p>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>1.</span>
                  {t("public.publicBlock1Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.1.</span>
                  {t("public.publicBlock1Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.2.</span>
                  {t("public.publicBlock1Text3Child1")}
                  {policyFops[0]?.first_fop_text}
                  {t("public.publicBlock1Text3Child2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.3.</span>
                  {t("public.publicBlock1Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.4.</span>
                  {t("public.publicBlock1Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.5.</span>
                  {t("public.publicBlock1Text6")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.about__public_section} ${styles.about__section_second}`}
      >
        <div className={styles.container}>
          <div className={styles.about__main_wrapper}>
            <div className={styles.about__public_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>2.</span>
                  {t("public.publicBlock2Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.1.</span>
                  {t("public.publicBlock2Text2Child1")}
                  {policyFops[0]?.fourth_fop_text}
                  {t("public.publicBlock2Text2Child2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.2.</span>
                  {t("public.publicBlock2Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.3.</span>
                  {t("public.publicBlock2Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.4.</span>
                  {t("public.publicBlock2Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.5.</span>
                  {t("public.publicBlock2Text6")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock2Text7Child1")}
                    </span>
                    {t("public.publicBlock2Text7Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock2Text8Child1")}
                    </span>
                    {t("public.publicBlock2Text8Child2")}
                  </li>
                </ol>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>3.</span>
                  {t("public.publicBlock3Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.1.</span>
                  {t("public.publicBlock3Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.2.</span>
                  {t("public.publicBlock3Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.3.</span>
                  {t("public.publicBlock3Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.4.</span>
                  {t("public.publicBlock3Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.5.</span>
                  {t("public.publicBlock3Text6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.6.</span>
                  {t("public.publicBlock3Text7")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.7.</span>
                  {t("public.publicBlock3Text8")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.8.</span>
                  {t("public.publicBlock3Text9")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>4.</span>
                  {t("public.publicBlock4Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.1.</span>
                  {t("public.publicBlock4Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.2.</span>
                  {t("public.publicBlock4Text3")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.1</span>
                    {t("public.publicBlock4Text4")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.2</span>
                    {t("public.publicBlock4Text5")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.3</span>
                    {t("public.publicBlock4Text6")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.4</span>
                    {t("public.publicBlock4Text7")}
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.3.</span>
                  {t("public.publicBlock4Text8")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.4.</span>
                  {t("public.publicBlock4Text9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.5.</span>
                  {t("public.publicBlock4Text10")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.6.</span>
                  {t("public.publicBlock4Text11")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.7.</span>
                  {t("public.publicBlock4Text12")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>5.</span>
                  {t("public.publicBlock5Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.1.</span>
                  {t("public.publicBlock5Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.2.</span>
                  {t("public.publicBlock5Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.3.</span>
                  {t("public.publicBlock5Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.4.</span>
                  {t("public.publicBlock5Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.5.</span>
                  {t("public.publicBlock5Text6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.6.</span>
                  {t("public.publicBlock5Text7")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>6.</span>
                  {t("public.publicBlock6Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.1.</span>
                  {t("public.publicBlock6Text2")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text3Child1")}
                    </span>
                    {t("public.publicBlock6Text3Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text4Child1")}
                    </span>
                    {t("public.publicBlock6Text4Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text5Child1")}
                    </span>
                    {t("public.publicBlock6Text5Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text6Child1")}
                    </span>
                    {t("public.publicBlock6Text6Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text7Child1")}
                    </span>
                    {t("public.publicBlock6Text7Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text8Child1")}
                    </span>
                    {t("public.publicBlock6Text8Child2")}
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.2.</span>
                  {t("public.publicBlock6Text9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.3.</span>
                  {t("public.publicBlock6Text10")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text11Child1")}
                    </span>
                    {t("public.publicBlock6Text11Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text12Child1")}
                    </span>
                    {t("public.publicBlock6Text12Child2")}
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.4.</span>
                  {t("public.publicBlock6Text13")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text14Child1")}
                    </span>
                    {t("public.publicBlock6Text14Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text15Child1")}
                    </span>
                    {t("public.publicBlock6Text15Child2")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>
                      {t("public.publicBlock6Text16Child1")}
                    </span>
                    {t("public.publicBlock6Text16Child2")}
                  </li>
                </ol>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>7.</span>
                  {t("public.publicBlock7Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.1.</span>
                  {t("public.publicBlock7Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.2.</span>
                  {t("public.publicBlock7Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.3.</span>
                  {t("public.publicBlock7Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.4.</span>У разі
                  {t("public.publicBlock7Text5")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.5.</span>
                  {t("public.publicBlock7Text6")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.6.</span>
                  {t("public.publicBlock7Text7")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.7.</span>
                  {t("public.publicBlock7Text8")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.8.</span>У разі
                  {t("public.publicBlock7Text9")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.9.</span>З більш
                  {t("public.publicBlock7Text10")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>8.</span>
                  {t("public.publicBlock8Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.1.</span>
                  {t("public.publicBlock8Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.2.</span>
                  {t("public.publicBlock8Text3")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.3.</span>
                  {t("public.publicBlock8Text4")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.4.</span>
                  {t("public.publicBlock8Text5")}
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.1</span>
                    {t("public.publicBlock8Text6")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.2</span>
                    {t("public.publicBlock8Text7")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.3</span>
                    {t("public.publicBlock8Text8")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.4</span>
                    {t("public.publicBlock8Text9")}
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.5</span>
                    {t("public.publicBlock8Text10")}
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.5.</span>
                  {t("public.publicBlock8Text11")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.6.</span>
                  {t("public.publicBlock8Text12")}
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>9.</span>
                  {t("public.publicBlock9Text1")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.1.</span>
                  {t("public.publicBlock9Text2")}
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.2.</span>
                  {t("public.publicBlock9Text3")}
                </p>
              </div>
              <div className={styles.about__main_footer}>
                <p className={styles.about__primary_text}>
                  {t("public.publicText3")}
                </p>
                <p className={styles.about__primary_text}>
                  {policyFops[0]?.first_fop_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPublic;
