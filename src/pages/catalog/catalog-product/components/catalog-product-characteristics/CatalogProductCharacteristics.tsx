import React from "react";
import styles from "./CatalogProductCharacteristics.module.css";

interface Props {
  characteristics: { [key: string]: any };
}

const CatalogProductCharacteristics: React.FC<Props> = ({ characteristics }) => {
  return (
    <div className={styles.catalog__main_characteristics}>
      <div className={styles.catalog__characteristics_info}>
        <p className={styles.catalog__info_text}>
          Покриття устілок виготовлено з м'якого матеріалу, що забезпечує
          додатковий комфорт і стимуляцію моторики пальців стопи. Ортопедичні
          устілки серійної колекції надають профілактичний ефект і впливають на
          правильне позиціонування стопи відносно поверхні, дозволяючи запобігти
          завалювання стопи та деформацій.
        </p>
      </div>
      <div className={styles.catalog__characteristics_table}>
        <table className={styles.catalog__table_item}>
          <tbody>
            {Object.entries(characteristics).map(([key, value]) => (
              <tr className={styles.catalog__item_line} key={key}>
                <th className={styles.catalog__line_key}>{key}</th>
                <td className={styles.catalog__line_value}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatalogProductCharacteristics;
