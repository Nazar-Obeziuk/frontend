import React from "react";
import styles from "../admin-reviews-table/AdminReviewsTable.module.css";
import { IReview } from "../../../../../../services/reviews/review.interface";

interface Props {
  handleEditReview: (id: IReview) => void;
  handleDeleteReview: (id: number) => void;
  adminCertificateReviews: IReview[];
}

const AdminReviewsCertificateTable: React.FC<Props> = ({
  handleDeleteReview,
  handleEditReview,
  adminCertificateReviews,
}) => {
  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
      {adminCertificateReviews.length > 0 ? (
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
            {adminCertificateReviews.map(
              (adminCertificateReview: IReview, index: number) => {
                const starsArray = [];

                for (let i = 1; i <= adminCertificateReview.stars; i++) {
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
                      ({starsArray.length > 0 && adminCertificateReview.stars})
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.name_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.name_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.pluses_ua
                        ? adminCertificateReview.pluses_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.pluses_en
                        ? adminCertificateReview.pluses_en
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.minuses_ua
                        ? adminCertificateReview.minuses_ua
                        : "Немає"}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminCertificateReview.minuses_en
                        ? adminCertificateReview.minuses_en
                        : "Немає"}
                    </td>
                    <td
                      className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                    >
                      <button
                        onClick={() =>
                          handleDeleteReview(adminCertificateReview.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() => handleEditReview(adminCertificateReview)}
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

export default AdminReviewsCertificateTable;
