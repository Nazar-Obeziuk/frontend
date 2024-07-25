import React from "react";
import styles from "./AdminReviewsTable.module.css";
import { IReview } from "../../../../../../services/reviews/review.interface";

interface Props {
  handleEditReview: (id: IReview) => void;
  handleDeleteReview: (id: number) => void;
  adminReviews: IReview[];
}

const AdminReviewsTable: React.FC<Props> = ({
  handleEditReview,
  handleDeleteReview,
  adminReviews,
}) => {
  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
      {adminReviews.length > 0 ? (
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
            {adminReviews.map((adminReview: IReview, index: number) => {
              const starsArray = [];

              for (let i = 1; i <= adminReview.stars; i++) {
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
                    ({starsArray.length > 0 && adminReview.stars})
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.name_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.name_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.pluses_ua ? adminReview.pluses_ua : "Немає"}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.pluses_en ? adminReview.pluses_en : "Немає"}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.minuses_ua ? adminReview.minuses_ua : "Немає"}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminReview.minuses_en ? adminReview.minuses_en : "Немає"}
                  </td>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                  >
                    <button
                      onClick={() => handleDeleteReview(adminReview.id)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Видалити
                    </button>
                    <button
                      onClick={() => handleEditReview(adminReview)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Редагувати
                    </button>
                  </td>
                </tr>
              );
            })}
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

export default AdminReviewsTable;
