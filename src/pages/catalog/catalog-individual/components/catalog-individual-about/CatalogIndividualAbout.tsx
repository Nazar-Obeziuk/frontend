import React, { useEffect, useState } from "react";
import styles from "./CatalogIndividualAbout.module.css";
import {
  IIndividualInsole,
  IIndividualVariation,
} from "../../../../../services/individual-insoles/individualInsoles.interface";
import Loader from "../../../../../components/loader/Loader";
import { useTranslation } from "react-i18next";

interface Props {
  individualInsoles: IIndividualInsole[];
  activeCoverage: IIndividualVariation;
}

const CatalogIndividualAbout: React.FC<Props> = ({
  individualInsoles,
  activeCoverage,
}) => {
  const [activeLanguage, setActiveLanguage] = useState("ua");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else if (i18n.language === "en") {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  if (!individualInsoles[0]) {
    return <Loader />;
  }

  return (
    <div className={styles.catalog__info_about}>
      <p className={styles.catalog__about_text}>
        {/* {activeLanguage === "ua"
          ? activeCoverage
            ? activeCoverage.first_about_description_ua
            : individualInsoles[0].first_about_description_ua
          : activeCoverage
          ? activeCoverage.first_about_description_en
          : individualInsoles[0].first_about_description_en} */}
        {activeLanguage === "ua"
          ? individualInsoles[0].first_about_description_ua
          : individualInsoles[0].first_about_description_en}
      </p>
      <p className={styles.catalog__about_text}>
        {activeCoverage
          ? activeCoverage.second_about_description_ua
          : individualInsoles[0].second_about_description_ua}
      </p>
      <p className={styles.catalog__about_text}>
        {activeCoverage
          ? activeCoverage.third_about_description_ua
          : individualInsoles[0].third_about_description_ua}
      </p>
      <p className={styles.catalog__about_text}>
        {activeCoverage
          ? activeCoverage.fourth_about_description_ua
          : individualInsoles[0].fourth_about_description_ua}
      </p>
    </div>
  );
};

export default CatalogIndividualAbout;
