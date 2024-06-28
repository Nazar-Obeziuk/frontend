import React, { useEffect, useState } from "react";
import styles from "./AdminWorkersTable.module.css";
import { IWorker } from "../../../../../../services/workers/worker.interface";
import { getAllWorkers } from "../../../../../../services/workers/workers";

interface Props {
  handleEditWorker: (id: number) => void;
}

const AdminWorkersTable: React.FC<Props> = ({ handleEditWorker }) => {
  const [adminWorkers, setAdminWorkers] = useState<IWorker[]>([]);

  const getAll = async () => {
    const workersData = await getAllWorkers();
    setAdminWorkers(workersData);
    console.log(adminWorkers);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
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
            <th className={styles.admin__table_th}>Слайдер зображення</th>
            <th className={styles.admin__table_th}>Дії</th>
          </tr>
        </thead>
        <tbody className={styles.admin__table_body}>
          {adminWorkers.map((adminWorker: IWorker, index) => (
            <tr key={index} className={styles.admin__table_tr}>
              <td className={styles.admin__table_td}>{adminWorker.id}</td>
              <td className={styles.admin__table_td}>
                <img src={adminWorker.image_url} alt="worker banner" />
              </td>
              <td className={styles.admin__table_td}>{adminWorker.name_ua}</td>
              <td className={styles.admin__table_td}>{adminWorker.name_en}</td>
              <td className={styles.admin__table_td}>
                {adminWorker.subtitle_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.subtitle_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.first_description_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.first_description_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.second_description_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.second_description_en}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.third_description_ua}
              </td>
              <td className={styles.admin__table_td}>
                {adminWorker.third_description_en}
              </td>
              {/* <td className={styles.admin__table_td}>
                {adminWorker.slider_images.map((sliderImage: string) => (
                  <img src={sliderImage} alt="" />
                ))}
              </td> */}
              <td
                className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
              >
                <button className={styles.admin__td_action} type="button">
                  Видалити
                </button>
                <button
                  onClick={() => handleEditWorker(adminWorker.id)}
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
    </div>
  );
};

export default AdminWorkersTable;
