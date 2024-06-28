import React, { useState } from "react";
import styles from "./AdminWorkers.module.css";
import AdminWorkersForm from "./components/admin-workers-form/AdminWorkersForm";
import AdminWorkersTable from "./components/admin-workers-table/AdminWorkersTable";
import { useNavigate } from "react-router-dom";

const AdminWorkers: React.FC = () => {
  const [isAdminWorkersFormOpen, setAdminWorkersFormOpen] = useState(false);
  const navigate = useNavigate();

  const handleWorkersForm = () => {
    setAdminWorkersFormOpen((prevState) => !prevState);
  };

  const onEditWorker = (workerId: number) => {
    navigate(`/admin/update-worker/${workerId}`);
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
      <AdminWorkersTable handleEditWorker={onEditWorker} key={"uniq1"} />
    </div>
  );
};

export default AdminWorkers;
