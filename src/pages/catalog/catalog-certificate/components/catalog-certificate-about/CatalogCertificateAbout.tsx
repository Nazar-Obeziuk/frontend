import React, { useEffect, useState } from "react";
import styles from "./CatalogCertificateAbout.module.css";
import Loader from "../../../../../components/loader/Loader";
import { ICertificate } from "../../../../../services/gift-certificate/gift-certificate.interface";
import { useTranslation } from "react-i18next";

interface Props {
  certificates: ICertificate[];
}

const CatalogCertificateAbout: React.FC<Props> = ({ certificates }) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  if (!certificates[0]) {
    return <Loader />;
  }

  return (
    <div className={styles.catalog__info_main}>
      <div className={styles.catalog__main_about}>
        <p className={styles.catalog__info_text}>
          {activeLanguage === "ua"
            ? certificates[0].first_about_description_ua
            : certificates[0].first_about_description_en}
        </p>
        <p className={styles.catalog__info_text}>
          {activeLanguage === "ua"
            ? certificates[0].second_about_description_ua
            : certificates[0].second_about_description_en}
        </p>
        <p className={styles.catalog__info_text}>
          {activeLanguage === "ua"
            ? certificates[0].third_about_description_ua
            : certificates[0].third_about_description_en}
        </p>
      </div>
      <div className={styles.catalog__main_steps}>
        <p className={styles.catalog__info_primaryBold}>
          {t("certificate.certificateBlock1Title")}
        </p>
        <ul className={styles.catalog__steps_list}>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text1Step1")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text1Child1")}
              <span className={styles.catalog__info_bold}>
                {t("certificate.certificateBlock1Text1Child2")}
              </span>
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text2Step2")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text2")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text3Step3")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text3")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text4Step4")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text4")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text5Step5")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text5")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text6Step6")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text6")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text7Step7")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text7")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text8Step8")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text8")}
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>
              {t("certificate.certificateBlock1Text9Step9")}
            </span>
            <p className={styles.catalog__steps_text}>
              {t("certificate.certificateBlock1Text9")}
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.catalog__main_rules}>
        <p className={styles.catalog__info_primaryBold}>
          {t("certificate.certificateBlock2Title")}
        </p>
        <ul className={styles.catalog__main_list}>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>1.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].first_use_description_ua
                : certificates[0].first_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>2.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].second_about_description_ua
                : certificates[0].second_about_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>3.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].third_use_description_ua
                : certificates[0].third_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>4.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].fourth_use_description_ua
                : certificates[0].fourth_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>5.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].fifth_use_description_ua
                : certificates[0].fifth_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>6.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].sixth_use_description_ua
                : certificates[0].sixth_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>7.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].seventh_use_description_ua
                : certificates[0].seventh_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>8.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].eighth_use_description_ua
                : certificates[0].eighth_use_description_en}
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>9.</span>
            <p className={styles.catalog__info_text}>
              {activeLanguage === "ua"
                ? certificates[0].nineth_use_description_ua
                : certificates[0].nineth_use_description_en}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatalogCertificateAbout;
