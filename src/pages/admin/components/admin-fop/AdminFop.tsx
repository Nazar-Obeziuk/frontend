import React, { useEffect, useState } from "react";
import styles from "./AdminFop.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminFopForm from "./components/admin-fop-form/AdminFopForm";
import AdminFopTable from "./components/admin-fop-table/AdminFopTable";
import { deleteFop, getAllFops } from "../../../../services/fop/fop";
import { IFop } from "../../../../services/fop/fop.interface";

const AdminFop: React.FC = () => {
  const [isAdminFopFormOpen, setAdminFopFormOpen] = useState(true);
  const [adminFops, setAdminFops] = useState<IFop[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const fopsDataUA = await getAllFops("ua");
    const fopsDataEN = await getAllFops("en");

    const combinedFopsData = [...fopsDataUA, ...fopsDataEN];

    setAdminFops(combinedFopsData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleFopForm = () => {
    setAdminFopFormOpen((prevState) => !prevState);
  };

  const onEditFop = (fop: IFop) => {
    navigate(`/prostopoo-admin-panel/update-fop/${fop.id}`);
  };

  const onDeleteFop = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей текст ФОП-а?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteFop(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__main_certificate}>
      <div className={styles.admin__certificate_form}>
        {isAdminFopFormOpen && (
          <button
            onClick={handleFopForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати фоп
          </button>
        )}
        {!isAdminFopFormOpen && (
          <AdminFopForm
            getAll={getAll}
            toggleFopsForm={handleFopForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminFopTable
        adminFops={adminFops}
        handleEditFop={onEditFop}
        handleDeleteFop={onDeleteFop}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminFop;
