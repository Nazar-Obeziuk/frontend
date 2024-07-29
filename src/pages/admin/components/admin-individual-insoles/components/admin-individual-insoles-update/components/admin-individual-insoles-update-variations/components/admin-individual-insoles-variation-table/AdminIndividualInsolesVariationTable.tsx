import React from "react";
import styles from "./AdminIndividualInsolesVariationTable.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IIndividualVariation } from "../../../../../../../../../../services/individual-insoles/individualInsoles.interface";
import { deleteIndividualVariation } from "../../../../../../../../../../services/individual-insoles/individualInsoles";

interface Props {
  getAll: () => void;
  individualVariation: IIndividualVariation[];
}

const AdminIndividualInsolesVariationTable: React.FC<Props> = ({
  getAll,
  individualVariation,
}) => {
  const notify = (message: string) => toast(message);
  const navigate = useNavigate();

  const handleEditIndividualVariation = (id: number) => {
    navigate(
      `/prostopoo-admin-panel/individual-insoles-variation-update/${id}`
    );
  };

  const handleDeleteIndividualVariation = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити варіацію?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteIndividualVariation(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__table_block}>
      {individualVariation.length > 0 ? (
        <div className={styles.admin__main_table}>
          <table className={styles.admin__table_item}>
            <thead className={styles.admin__table_head}>
              <tr className={styles.admin__table_tr}>
                <th className={styles.admin__table_th}>
                  Зображення індивідуальних устілок
                </th>
                <th className={styles.admin__table_th}>Зображення покриття</th>
                <th className={styles.admin__table_th}>Тип варіації</th>
                <th className={styles.admin__table_th}>Значення варіації</th>
                <th className={styles.admin__table_th}>Артикул товару</th>
                <th className={styles.admin__table_th}>
                  Артикул варіації (Укр)
                </th>
                <th className={styles.admin__table_th}>
                  Артикул варіації (Англ)
                </th>
                <th className={styles.admin__table_th}>Ціна товару</th>
                <th className={styles.admin__table_th}>Категорія варіації</th>
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
              {individualVariation.map(
                (adminVariation: IIndividualVariation, index: number) => (
                  <tr key={index} className={styles.admin__table_tr}>
                    <td className={styles.admin__table_td}>
                      {adminVariation.image_url.map(
                        (image: string, index: number) => (
                          <img
                            className={styles.admin__td_icon}
                            key={index}
                            src={image}
                            alt="individual variation banner"
                          />
                        )
                      )}
                    </td>
                    <td className={styles.admin__table_td}>
                      <img
                        className={styles.admin__td_icon}
                        src={adminVariation.image}
                        alt="individual variation banner"
                      />
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.variation_type}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.variation_value}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.article}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.variation_description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.variation_description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.additional_price}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.category}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.first_about_description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.first_about_description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.second_about_description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.second_about_description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.third_about_description_ua
                        ? adminVariation.third_about_description_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.third_about_description_en
                        ? adminVariation.third_about_description_en
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.fourth_about_description_ua
                        ? adminVariation.fourth_about_description_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.fourth_about_description_en
                        ? adminVariation.fourth_about_description_en
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.characteristics_subtitle_ua
                        ? adminVariation.characteristics_subtitle_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.characteristics_subtitle_en
                        ? adminVariation.characteristics_subtitle_en
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.characteristics_description_ua
                        ? adminVariation.characteristics_description_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.characteristics_description_en
                        ? adminVariation.characteristics_description_en
                        : "Немає"}
                    </td>
                    <td
                      className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                    >
                      <button
                        onClick={() =>
                          handleDeleteIndividualVariation(adminVariation.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() =>
                          handleEditIndividualVariation(adminVariation.id)
                        }
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
        </div>
      ) : (
        <p className={styles.admin__table_empty}>
          Варіацій ще немає, додайте одиного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminIndividualInsolesVariationTable;
