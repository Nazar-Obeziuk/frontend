import React from "react";
import styles from "./AdminIndividualInsolesTable.module.css";
import { IIndividualInsole } from "../../../../../../services/individual-insoles/individualInsoles.interface";

interface Props {
  handleEditIndividual: (id: any) => void;
  handleDeleteIndividual: (id: number) => void;
  adminIndividuals: any[];
}

const AdminIndividualInsolesTable: React.FC<Props> = ({
  adminIndividuals,
  handleEditIndividual,
  handleDeleteIndividual,
}) => {
  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
      {adminIndividuals.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>
                Зображення індивідуальних устілок
              </th>
              <th className={styles.admin__table_th}>Назва (Укр)</th>
              <th className={styles.admin__table_th}>Назва (Англ)</th>
              <th className={styles.admin__table_th}>Артикул товару</th>
              <th className={styles.admin__table_th}>Ціна</th>
              <th className={styles.admin__table_th}>
                Перший опис про товар (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Перший опис про товар (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Другий опис про товар (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Другий опис про товар (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Третій опис про товар (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Третій опис про товар (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Четвертий опис про товар (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Четвертий опис про товар (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Підзаголовок характеристики товар (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Підзаголовок характеристики (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Опис характеристики (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Опис характеристики (Англ)
              </th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminIndividuals.map(
              (adminIndividual: IIndividualInsole, index: number) => (
                <tr key={index} className={styles.admin__table_tr}>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_slider}`}
                  >
                    {adminIndividual.image_url.map(
                      (image_url: string, index: number) => (
                        <img src={image_url} key={index} alt="product banner" />
                      )
                    )}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.name_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.name_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.article}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.base_price}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.first_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.first_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.second_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.second_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.third_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.third_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.fourth_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.fourth_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.characteristics_subtitle_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.characteristics_subtitle_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.characteristics_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminIndividual.characteristics_description_en}
                  </td>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                  >
                    <button
                      onClick={() => handleDeleteIndividual(adminIndividual.id)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Видалити
                    </button>
                    <button
                      onClick={() => handleEditIndividual(adminIndividual)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Редагувати
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Продуктів ще немає, додайте одиного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminIndividualInsolesTable;
