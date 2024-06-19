import React from "react";
import styles from "./AdminWorkersForm.module.css";

interface Props {
  toggleWorkersForm: () => void;
}

const AdminWorkersForm: React.FC<Props> = ({ toggleWorkersForm }) => {
  return (
    <form className={styles.admin__form_block}>
      <div className={styles.admin__block_control}>
        <label htmlFor="worker-image" className={styles.admin__control_label}>
          Зображення працівника
        </label>
        <input
          type="file"
          name="worker-image"
          className={styles.admin__control_field}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="worker-name-ua" className={styles.admin__control_label}>
          Ім'я та прізвище працівника (Укр)
        </label>
        <input
          type="text"
          name="worker-name-ua"
          className={styles.admin__control_field}
          placeholder="Ім'я та прізвище працівника (Укр)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="worker-name-en" className={styles.admin__control_label}>
          Ім'я та прізвище працівника (Англ)
        </label>
        <input
          type="text"
          name="worker-name-en"
          className={styles.admin__control_field}
          placeholder="Ім'я та прізвище працівника (Англ)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-subtitle-ua"
          className={styles.admin__control_label}
        >
          Напрямок працівника (Укр)
        </label>
        <input
          type="text"
          name="worker-subtitle-ua"
          className={styles.admin__control_field}
          placeholder="Напрямок працівника (Укр)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-subtitle-en"
          className={styles.admin__control_label}
        >
          Напрямок працівника (Англ)
        </label>
        <input
          type="text"
          name="worker-subtitle-en"
          className={styles.admin__control_field}
          placeholder="Напрямок працівника (Англ)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-1-ua"
          className={styles.admin__control_label}
        >
          Перший опис працівника (Укр)
        </label>
        <input
          type="text"
          name="worker-desc-1-ua"
          className={styles.admin__control_field}
          placeholder="Перший опис працівника (Укр)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-1-en"
          className={styles.admin__control_label}
        >
          Перший опис працівника (Англ)
        </label>
        <input
          type="text"
          name="worker-desc-1-en"
          className={styles.admin__control_field}
          placeholder="Перший опис працівника (Англ)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-2-ua"
          className={styles.admin__control_label}
        >
          Другий опис працівника (Укр)
        </label>
        <input
          type="text"
          name="worker-desc-2-ua"
          className={styles.admin__control_field}
          placeholder="Другий опис працівника (Укр)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-2-en"
          className={styles.admin__control_label}
        >
          Другий опис працівника (Англ)
        </label>
        <input
          type="text"
          name="worker-desc-2-en"
          className={styles.admin__control_field}
          placeholder="Другий опис працівника (Англ)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-3-ua"
          className={styles.admin__control_label}
        >
          Третій опис працівника (Укр)
        </label>
        <input
          type="text"
          name="worker-desc-3-ua"
          className={styles.admin__control_field}
          placeholder="Третій опис працівника (Укр)"
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-3-en"
          className={styles.admin__control_label}
        >
          Третій опис працівника (Англ)
        </label>
        <input
          type="text"
          name="worker-desc-3-en"
          className={styles.admin__control_field}
          placeholder="Третій опис працівника (Англ)"
        />
      </div>
      <div className={styles.admin__block_actions}>
        <button className={styles.admin__actions_button} type="button">
          Підтвердити
        </button>
        <button
          onClick={toggleWorkersForm}
          className={styles.admin__actions_button}
          type="button"
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default AdminWorkersForm;
