import React from "react";
import styles from "./AdminCertificateReviewsTable.module.css";
import { toast } from "react-toastify";
import { IProductReview } from "../../../../../../../../../../services/products/product.interface";
import { deleteReview } from "../../../../../../../../../../services/reviews/reviews";
import { useNavigate } from "react-router-dom";

interface Props {
  certificateReviews: IProductReview[];
  getAll: () => void;
}

const AdminCertificateReviewsTable: React.FC<Props> = ({
  certificateReviews,
  getAll,
}) => {
  const notify = (message: string) => toast(message);
  const navigate = useNavigate();

  const handleEditProductReview = (review_id: number) => {
    navigate(`/prostopoo-admin-panel/product-review-update/${review_id}`);
  };

  const handleDeleteProductReview = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей відгук?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteReview(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__table_block}>
      {certificateReviews.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Рейтинг</th>
              <th className={styles.admin__table_th}>Назва (Укр)</th>
              <th className={styles.admin__table_th}>Назва (Англ)</th>
              <th className={styles.admin__table_th}>Опис (Укр)</th>
              <th className={styles.admin__table_th}>Опис (Англ)</th>
              <th className={styles.admin__table_th}>Плюси (Укр)</th>
              <th className={styles.admin__table_th}>Плюси (Англ)</th>
              <th className={styles.admin__table_th}>Мінуси (Укр)</th>
              <th className={styles.admin__table_th}>Мінуси (Англ)</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {certificateReviews.map(
              (adminProductReview: IProductReview, index: number) => {
                const starsArray = [];

                for (let i = 1; i <= adminProductReview.stars; i++) {
                  starsArray.push(i);
                }

                return (
                  <tr key={index} className={styles.admin__table_tr}>
                    <td className={styles.admin__table_td}>
                      {starsArray.map((index: number) => (
                        <img
                          key={index}
                          className={styles.admin__table_star}
                          src="../../images/review-star.svg"
                          alt="star icon"
                        />
                      ))}
                      ({starsArray.length > 0 && adminProductReview.stars})
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.name_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.name_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.description_ua
                        ? adminProductReview.description_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.description_en
                        ? adminProductReview.description_en
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.pluses_ua
                        ? adminProductReview.pluses_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.pluses_en
                        ? adminProductReview.pluses_en
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.minuses_ua
                        ? adminProductReview.minuses_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.minuses_en
                        ? adminProductReview.minuses_en
                        : "Немає"}
                    </td>
                    <td
                      className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                    >
                      <button
                        onClick={() =>
                          handleDeleteProductReview(adminProductReview.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() =>
                          handleEditProductReview(adminProductReview.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Редагувати
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Відгуків ще немає, додайте одиного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminCertificateReviewsTable;
