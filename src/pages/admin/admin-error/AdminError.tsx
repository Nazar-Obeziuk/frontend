import React from "react";
import styles from "./AdminError.module.css";

const AdminError: React.FC = () => {
  return (
    <section className={styles.admin__error_section}>
      <div className={styles.container}>
        <div className={styles.admin__error_wrapper}>
          <div className={styles.admin__wrapper_info}>
            <h2 className={styles.admin__info_title}>
              Щось пішло не так, сталася помилка...
            </h2>
            <p className={styles.admin__info_text}>
              Якщо сталася помилка, спробуйте ще раз увійти в систему, якщо
              проблема не вирішиться повідомте будь ласка розробникам про
              проблему!😉
            </p>
            <button className={styles.admin__info_button} type="button">
              Увійти ще раз
            </button>
          </div>
          <div className={styles.admin__wrapper_banner}>
            <img src="../../images/admin-error.svg" alt="astronaut" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminError;
