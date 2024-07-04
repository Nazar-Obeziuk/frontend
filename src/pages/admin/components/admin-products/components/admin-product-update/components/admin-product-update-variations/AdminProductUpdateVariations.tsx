import React, { useEffect, useState } from "react";
import styles from "./AdminProductUpdateVariations.module.css";
import {
  IProduct,
  IProductVariation,
} from "../../../../../../../../services/products/product.interface";
import AdminError from "../../../../../../admin-error/AdminError";
import {
  deleteProductVariation,
  getAllProductsVariations,
} from "../../../../../../../../services/products/product";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  //   variations: IProductVariation[];
  editProduct: IProduct;
}

const AdminProductUpdateVariations: React.FC<Props> = ({ editProduct }) => {
  const [variations, setVariations] = useState<IProductVariation[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAllVariations = async () => {
    try {
      const response = await getAllProductsVariations(id!);
      setVariations(response);
      console.log(variations);
    } catch (error) {
      console.log("variation error", error);
    }
  };

  useEffect(() => {
    getAllVariations();
  }, []);

  const onDeleteProductVariation = async (variationId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await deleteProductVariation(variationId, token);
        notify(response.message);
        getAllVariations();
      } else {
        return <AdminError />;
      }
    } catch (error) {
      console.log("delete variation", error);
    }
  };

  const onEditVariation = (adminVariation: IProductVariation) => {
    navigate(`/admin/product-variation-update/${editProduct!.product_id}`);
  };

  return (
    <>
      {variations.length > 0 ? (
        <div className={styles.admin__main_table}>
          <table className={styles.admin__table_item}>
            <thead className={styles.admin__table_head}>
              <tr className={styles.admin__table_tr}>
                <th className={styles.admin__table_th}>
                  Зображення варіації товарів
                </th>
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
              {variations.map(
                (adminVariation: IProductVariation, index: number) => (
                  <tr key={index} className={styles.admin__table_tr}>
                    <td className={styles.admin__table_td}>
                      <img
                        src={adminVariation.image_url[0]}
                        alt="product variation banner"
                      />
                    </td>
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
                          onDeleteProductVariation(adminVariation.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() => onEditVariation(adminVariation)}
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
          Для данного продукту варіацій ще немає!
        </p>
      )}
    </>
  );
};

export default AdminProductUpdateVariations;
