import React from "react";
import styles from "./AdminFopTable.module.css";
import { IFop } from "../../../../../../services/fop/fop.interface";

interface Props {
  handleEditFop: (id: any) => void;
  handleDeleteFop: (id: number) => void;
  adminFops: IFop[];
}

const AdminFopTable: React.FC<Props> = ({
  adminFops,
  handleEditFop,
  handleDeleteFop,
}) => {
  return (
    <div className={styles.admin__table_block}>
      <p className={styles.admin__block_info}>
        Для того щоб скролити таблицю на Windows потрібно нажати на shift і
        крутити коліщатком
      </p>
      {adminFops.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>
                Перший опис Стадольська
              </th>
              <th className={styles.admin__table_th}>
                Другий опис Стадольською
              </th>
              <th className={styles.admin__table_th}>
                Третій опис Стадольській
              </th>
              <th className={styles.admin__table_th}>
                Четвертий опис Стадольської
              </th>
              <th className={styles.admin__table_th}>
                Перша дата (від 01.06.2010)
              </th>
              <th className={styles.admin__table_th}>
                Друга дата (від 01.06.2010)
              </th>
              <th className={styles.admin__table_th}>Код ЄДРПОУ</th>
              <th className={styles.admin__table_th}>Дата реєстрації</th>
              <th className={styles.admin__table_th}>
                Банк (ПАТ КБ «ПРИВАТБАНК», м. Київ, Україна)
              </th>
              <th className={styles.admin__table_th}>
                Номер (№20520000000002678)
              </th>
              <th className={styles.admin__table_th}>Адреса</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminFops.map((adminFop: IFop, index: number) => (
              <tr key={index} className={styles.admin__table_tr}>
                <td className={styles.admin__table_td}>
                  {adminFop.first_fop_text}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.second_fop_text}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.third_fop_text}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.fourth_fop_text}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.first_date_fop}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.second_date_fop}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.code_edr_fop}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.register_date_fop}
                </td>
                <td className={styles.admin__table_td}>{adminFop.bank_fop}</td>
                <td className={styles.admin__table_td}>
                  {adminFop.number_fop}
                </td>
                <td className={styles.admin__table_td}>
                  {adminFop.address_fop}
                </td>
                <td
                  className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                >
                  <button
                    onClick={() => handleDeleteFop(adminFop.id)}
                    className={styles.admin__td_action}
                    type="button"
                  >
                    Видалити
                  </button>
                  <button
                    onClick={() => handleEditFop(adminFops)}
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
          ФОП текстів ще немає, додайте один щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminFopTable;
