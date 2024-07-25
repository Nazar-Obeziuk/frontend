import React from "react";
import styles from "./CatalogProductCharacteristics.module.css";
import { IProductDetails } from "../../../../../services/products/product.interface";

interface Props {
  catalogProduct: IProductDetails;
}

const CatalogProductCharacteristics: React.FC<Props> = ({ catalogProduct }) => {
  return (
    <div className={styles.catalog__main_characteristics}>
      <div className={styles.catalog__characteristics_info}>
        <p className={styles.catalog__info_text}>
          {catalogProduct.description_characteristics_ua}
        </p>
      </div>
      <div className={styles.catalog__characteristics_table}>
        <table className={styles.catalog__table_item}>
          <tbody>
            {Object.entries(catalogProduct.characteristics_ua).map(
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
