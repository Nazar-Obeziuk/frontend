import React from "react";
import styles from "./CatalogIndividualCharacteristics.module.css";

const CatalogIndividualCharacteristics: React.FC = () => {
  return (
    <div className={styles.catalog__main_characteristics}>
      <div className={styles.catalog__characteristics_info}>
        <p className={styles.catalog__characteristics_title}>
          <span className={styles.catalog__title_upper}>
            УНІВЕРСАЛЬНЕ ПОКРИТТЯ
          </span>{" "}
          <span
            className={`${styles.catalog__title_upper} ${styles.catalog__upper_primary}`}
          >
            THERMY-TEX
          </span>{" "}
          — перфороване, бежеве
        </p>
        <p className={styles.catalog__info_text}>
          Індивідуальні ортопедичні устілки з універсальним покриттям —
          вирішення багатьох ортопедичних проблем. Такі устілки надають:
          правильний розподіл навантажень під час руху, підтримання склепінь
          стопи, розвантаження больових зон, попередження багатьох захворювань.
        </p>
      </div>
      <div className={styles.catalog__characteristics_table}>
        <table className={styles.catalog__table_item}>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Тип виробу</th>
            <td className={styles.catalog__line_value}>
              Індивідуальні ортопедичні устілки
            </td>
          </tr>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Бренд</th>
            <td className={styles.catalog__line_value}>Prostopoo</td>
          </tr>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Країна виробник</th>
            <td className={styles.catalog__line_value}>Україна</td>
          </tr>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Призначення</th>
            <td className={styles.catalog__line_value}>
              плоскостопість (поздовжня, поперечна), вальгусна і варусна стопа,
              варикоз і набряклість, діабетична стопа, п'яткова шпора, натоптні
              й мозолі, робота на ногах, втома ніг під час вагітності, травми й
              пошкодження кісток стопи та інше.
            </td>
          </tr>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Матеріал основи</th>
            <td className={styles.catalog__line_value}>EVA, 40-50 Shr</td>
          </tr>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Матеріал покриття</th>
            <td className={styles.catalog__line_value}>
              замінник шкіри, бежевий, перфорований
            </td>
          </tr>
          <tr className={styles.catalog__item_line}>
            <th className={styles.catalog__line_key}>Розмір</th>
            <td className={styles.catalog__line_value}>від 18 до 50</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CatalogIndividualCharacteristics;
