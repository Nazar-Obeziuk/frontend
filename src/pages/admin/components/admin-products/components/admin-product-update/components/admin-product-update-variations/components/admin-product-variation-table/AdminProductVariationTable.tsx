import React from "react";
import styles from "./AdminProductVariationTable.module.css";
import { IProductVariation } from "../../../../../../../../../../services/products/product.interface";
import { toast } from "react-toastify";
import { deleteProductVariation } from "../../../../../../../../../../services/products/product";
import { useNavigate } from "react-router-dom";

interface Props {
  getAll: () => void;
  productVariation: IProductVariation[];
}

const AdminProductVariationTable: React.FC<Props> = ({
  getAll,
  productVariation,
}) => {
  const notify = (message: string) => toast(message);
  const navigate = useNavigate();

  const handleEditProductVariation = (id: number) => {
    navigate(`/admin/product-variation-update/${id}`);
  };

  const handleDeleteProductVariation = async (id: number) => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deleteProductVariation(id, token);
      notify(response.message);
      getAll();
    }
  };

  return (
    <div className={styles.admin__table_block}>
      {productVariation.length > 0 ? (
        <div className={styles.admin__main_table}>
          <table className={styles.admin__table_item}>
            <thead className={styles.admin__table_head}>
              <tr className={styles.admin__table_tr}>
                {/* <th className={styles.admin__table_th}>
                  Зображення варіації товарів
                </th> */}
                <th className={styles.admin__table_th}>Тип варіації</th>
                <th className={styles.admin__table_th}>Значення варіації</th>
                <th className={styles.admin__table_th}>Ціна</th>
                <th className={styles.admin__table_th}>Артикул варіації</th>
                <th className={styles.admin__table_th}>Опис (Укр)</th>
                <th className={styles.admin__table_th}>Опис (Англ)</th>
                <th className={styles.admin__table_th}>Дії</th>
              </tr>
            </thead>
            <tbody className={styles.admin__table_body}>
              {productVariation.map(
                (adminVariation: IProductVariation, index: number) => (
                  <tr key={index} className={styles.admin__table_tr}>
                    {/* <td className={styles.admin__table_td}>
                      {adminVariation.image_url.map(
                        (image: string, index: number) => (
                          <img
                            className={styles.admin__td_icon}
                            key={index}
                            src={image}
                            alt="product variation banner"
                          />
                        )
                      )}
                    </td> */}
                    <td className={styles.admin__table_td}>
                      {adminVariation.variation_type}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.variation_value}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.additional_price}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.article}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminVariation.description_en}
                    </td>
                    <td
                      className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                    >
                      <button
                        onClick={() =>
                          handleDeleteProductVariation(adminVariation.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() =>
                          handleEditProductVariation(adminVariation.id)
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

export default AdminProductVariationTable;
