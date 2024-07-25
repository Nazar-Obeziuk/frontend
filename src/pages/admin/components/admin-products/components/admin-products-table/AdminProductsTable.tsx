import React from "react";
import styles from "./AdminProductsTable.module.css";
import { IProduct } from "../../../../../../services/products/product.interface";

interface Props {
  handleEditProduct: (id: IProduct) => void;
  handleDeleteProduct: (id: number) => void;
  adminProducts: IProduct[];
}

const AdminProductsTable: React.FC<Props> = ({
  handleEditProduct,
  handleDeleteProduct,
  adminProducts,
}) => {
  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
      {adminProducts.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Зображення товарів</th>
              <th className={styles.admin__table_th}>Назва (Укр)</th>
              <th className={styles.admin__table_th}>Назва (Англ)</th>
              <th className={styles.admin__table_th}>Опис (Укр)</th>
              <th className={styles.admin__table_th}>Опис (Англ)</th>
              <th className={styles.admin__table_th}>Ціна</th>
              <th className={styles.admin__table_th}>Артикул товару</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminProducts.map((adminProduct: IProduct, index: number) => (
              <tr key={index} className={styles.admin__table_tr}>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_slider}`}
                >
                  {adminProduct.image_url.map(
                    (image_url: string, index: number) => (
                      <img src={image_url} key={index} alt="product banner" />
                    )
                  )}
                </td>
                <td className={styles.admin__table_td}>
                  {adminProduct.name_ua}
                </td>
                <td className={styles.admin__table_td}>
                  {adminProduct.name_en}
                </td>
                <td className={styles.admin__table_td}>
                  {adminProduct.description_ua}
                </td>
                <td className={styles.admin__table_td}>
                  {adminProduct.description_en}
                </td>
                <td className={styles.admin__table_td}>
                  {adminProduct.base_price}
                </td>
                <td className={styles.admin__table_td}>
                  {adminProduct.article}
                </td>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                >
                  <button
                    onClick={() => handleDeleteProduct(adminProduct.id)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Видалити
                  </button>
                  <button
                    onClick={() => handleEditProduct(adminProduct)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Редагувати
                  </button>
                </td>
              </tr>
            ))}
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

export default AdminProductsTable;
