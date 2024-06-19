import React, { useState } from "react";
import styles from "./AdminWorkers.module.css";
import AdminWorkersForm from "./components/admin-workers-form/AdminWorkersForm";
import AdminWorkersTable from "./components/admin-workers-table/AdminWorkersTable";

const AdminWorkers: React.FC = () => {
  const [isAdminWorkersFormOpen, setAdminWorkersFormOpen] = useState(false);

  const handleWorkersForm = () => {
    setAdminWorkersFormOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.admin__main_workers}>
      <div className={styles.admin__workers_form}>
        {isAdminWorkersFormOpen && (
          <button
            onClick={handleWorkersForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати працівника
          </button>
        )}
        {!isAdminWorkersFormOpen && (
          <AdminWorkersForm
            toggleWorkersForm={handleWorkersForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminWorkersTable key={"uniq1"} />
    </div>
  );
};

export default AdminWorkers;
