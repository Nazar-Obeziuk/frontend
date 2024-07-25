import React from "react";
import styles from "./AdminCertificateTable.module.css";
import { ICertificate } from "../../../../../../services/gift-certificate/gift-certificate.interface";

interface Props {
  handleEditCertificate: (id: any) => void;
  handleDeleteCertificate: (id: number) => void;
  adminCertificates: ICertificate[];
}

const AdminCertificateTable: React.FC<Props> = ({
  adminCertificates,
  handleEditCertificate,
  handleDeleteCertificate,
}) => {
  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
      {adminCertificates.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Зображення сертифікату</th>
              <th className={styles.admin__table_th}>Назва (Укр)</th>
              <th className={styles.admin__table_th}>Назва (Англ)</th>
              <th className={styles.admin__table_th}>Опис (Укр)</th>
              <th className={styles.admin__table_th}>Опис (Англ)</th>
              <th className={styles.admin__table_th}>Артикул сертифікату</th>
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
                Перший опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Перший опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Другий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Другий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Третій опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Третій опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Четвертий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Четвертий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                П'ятий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                П'ятий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Шостий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Шостий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Сьомий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Сьомий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Восьмий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Восьмий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>
                Дев'ятий опис використання (Укр)
              </th>
              <th className={styles.admin__table_th}>
                Дев'ятий опис використання (Англ)
              </th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminCertificates.map(
              (adminCertificate: ICertificate, index: number) => (
                <tr key={index} className={styles.admin__table_tr}>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_slider}`}
                  >
                    {adminCertificate.image_url.map(
                      (image_url: string, index: number) => (
                        <img
                          src={image_url}
                          key={index}
                          alt="certificate banner"
                        />
                      )
                    )}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.name_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.name_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.article}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.base_price}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.first_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.first_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.second_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.second_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.third_about_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.third_about_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.first_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.first_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.second_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.second_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.third_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.third_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.fourth_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.fourth_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.fifth_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.fifth_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.sixth_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.sixth_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.seventh_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.seventh_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.eighth_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.eighth_use_description_en}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.nineth_use_description_ua}
                  </td>
                  <td className={styles.admin__table_td}>
                    {adminCertificate.nineth_use_description_en}
                  </td>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                  >
                    <button
                      onClick={() =>
                        handleDeleteCertificate(adminCertificate.id)
                      }
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Видалити
                    </button>
                    <button
                      onClick={() => handleEditCertificate(adminCertificate)}
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
          Сертифікатів ще немає, додайте один щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminCertificateTable;
