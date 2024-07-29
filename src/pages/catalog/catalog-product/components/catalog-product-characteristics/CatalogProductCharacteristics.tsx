import React, { useEffect, useState } from "react";
import styles from "./CatalogProductCharacteristics.module.css";
import { IProductDetails } from "../../../../../services/products/product.interface";
import { useTranslation } from "react-i18next";

interface Props {
  catalogProduct: IProductDetails;
}

const CatalogProductCharacteristics: React.FC<Props> = ({ catalogProduct }) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  return (
    <div className={styles.catalog__main_characteristics}>
      <div className={styles.catalog__characteristics_info}>
        <p className={styles.catalog__info_text}>
          {activeLanguage === "ua"
            ? catalogProduct.description_characteristics_ua
            : catalogProduct.description_characteristics_en}
        </p>
      </div>
      <div className={styles.catalog__characteristics_table}>
        <table className={styles.catalog__table_item}>
          <tbody>
            {activeLanguage === "ua"
              ? Object.entries(catalogProduct.characteristics_ua).map(
                  ([key, value]: any) => (
                    <tr className={styles.catalog__item_line} key={key}>
                      <th className={styles.catalog__line_key}>{key}</th>
                      <td className={styles.catalog__line_value}>{value}</td>
                    </tr>
                  )
                )
              : Object.entries(catalogProduct.characteristics_en).map(
                  ([key, value]: any) => (
                    <tr className={styles.catalog__item_line} key={key}>
                      <th className={styles.catalog__line_key}>{key}</th>
                      <td className={styles.catalog__line_value}>{value}</td>
                    </tr>
                  )
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatalogProductCharacteristics;
