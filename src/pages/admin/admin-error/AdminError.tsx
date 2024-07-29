import React from "react";
import styles from "./AdminError.module.css";
import { useNavigate } from "react-router-dom";

const AdminError: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHomeAdmin = () => {
    navigate("/prostopoo-admin-panel");
  };

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
            <button
              onClick={handleBackToHomeAdmin}
              className={styles.admin__info_button}
              type="button"
            >
              Повернутися на головну
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
