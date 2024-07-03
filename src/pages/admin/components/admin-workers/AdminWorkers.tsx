import React, { useEffect, useState } from "react";
import styles from "./AdminWorkers.module.css";
import AdminWorkersForm from "./components/admin-workers-form/AdminWorkersForm";
import AdminWorkersTable from "./components/admin-workers-table/AdminWorkersTable";
import { useNavigate } from "react-router-dom";
import { IWorker } from "../../../../services/workers/worker.interface";
import { useAdminWorkersContext } from "../../../../context/admin-workers/AdminWorkersContext";
import {
  deleteWorker,
  getAllWorkers,
} from "../../../../services/workers/workers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminWorkers: React.FC = () => {
  const [isAdminWorkersFormOpen, setAdminWorkersFormOpen] = useState(true);
  const [adminWorkers, setAdminWorkers] = useState<IWorker[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { setEditWorker } = useAdminWorkersContext();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const workersData = await getAllWorkers();
    setAdminWorkers(workersData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleWorkersForm = () => {
    setAdminWorkersFormOpen((prevState) => !prevState);
  };

  const onEditWorker = (worker: IWorker) => {
    setEditWorker(worker);
    navigate(`/admin/update-worker/${worker.id}`);
  };

  const onDeleteWorker = async (id: number) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deleteWorker(id, token);
      notify(response.message);
      getAll();
    }
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
            getAll={getAll}
            toggleWorkersForm={handleWorkersForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminWorkersTable
        adminWorkers={adminWorkers}
        handleEditWorker={onEditWorker}
        handleDeleteWorker={onDeleteWorker}
        isLoading={isLoading}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminWorkers;
