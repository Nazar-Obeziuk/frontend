import React, { useState } from "react";
import styles from "./AdminWorkersTable.module.css";
import { workersData } from "../../../../../../utils/data/HomeWorkers.data";
import { IWorker } from "../../../../../../services/workers/worker.interface";

const AdminWorkersTable: React.FC = () => {
  const [adminWorkers, setAdminWorkers] = useState<IWorker[]>(workersData);

  return (
    <div className={styles.admin__table_block}>
      <table className={styles.admin__table_item}>
        <thead className={styles.admin__table_head}>
          <tr className={styles.admin__table_tr}>
            <th className={styles.admin__table_th}>Айді</th>
            <th className={styles.admin__table_th}>Зображення</th>
            <th className={styles.admin__table_th}>Ім'я (Укр)</th>
            <th className={styles.admin__table_th}>Ім'я (Англ)</th>
            <th className={styles.admin__table_th}>Напрямок (Укр)</th>
            <th className={styles.admin__table_th}>Напрямок (Англ)</th>
            <th className={styles.admin__table_th}>Перший опис (Укр)</th>
            <th className={styles.admin__table_th}>Перший опис (Англ)</th>
            <th className={styles.admin__table_th}>Другий опис (Укр)</th>
            <th className={styles.admin__table_th}>Другий опис (Англ)</th>
            <th className={styles.admin__table_th}>Третій опис (Укр)</th>
            <th className={styles.admin__table_th}>Третій опис (Англ)</th>
            <th className={styles.admin__table_th}>Дії</th>
          </tr>
        </thead>
        <tbody className={styles.admin__table_body}>
          {adminWorkers.map((adminWorker: IWorker, index) => (
            <tr key={index} className={styles.admin__table_tr}>
              <td className={styles.admin__table_td}>{adminWorker.id}</td>
              <td className={styles.admin__table_td}>
                <img src={adminWorker.worker_image_path} alt="" />
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_title_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_title_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_subtitle_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_subtitle_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_first_text_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_first_text_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_second_text_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_second_text_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_third_text_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.worker_third_text_en}
              </td>
              <td
                className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
              >
                <button className={styles.admin__td_action} type="button">
                  Видалити
                </button>
                <button className={styles.admin__td_action} type="button">
                  Редагувати
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminWorkersTable;
