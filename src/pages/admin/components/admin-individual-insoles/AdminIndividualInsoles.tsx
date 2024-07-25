import React, { useEffect, useState } from "react";
import styles from "./AdminIndividualInsoles.module.css";
import AdminIndividualInsolesForm from "./components/admin-individual-insoles-form/AdminIndividualInsolesForm";
import AdminIndividualInsolesTable from "./components/admin-individual-insoles-table/AdminIndividualInsolesTable";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteIndividualInsole,
  getAllIndividualInsoles,
} from "../../../../services/individual-insoles/individualInsoles";
import { IIndividualInsole } from "../../../../services/individual-insoles/individualInsoles.interface";

const AdminIndividualInsoles: React.FC = () => {
  const [isAdminIndividualFormOpen, setAdminIndividualFormOpenn] =
    useState(true);
  const [adminIndividuals, setAdminIndividuals] = useState([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const individualsData = await getAllIndividualInsoles();
    setAdminIndividuals(individualsData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleIndividualForm = () => {
    setAdminIndividualFormOpenn((prevState) => !prevState);
  };

  const onEditIndividual = (individual: IIndividualInsole) => {
    navigate(`/admin/update-individual/${individual.id}`);
  };

  const onDeleteIndividual = async (id: number) => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deleteIndividualInsole(id, token);
      notify(response.message);
      getAll();
    }
  };

  return (
    <div className={styles.admin__main_individual}>
      <div className={styles.admin__individual_form}>
        {isAdminIndividualFormOpen && (
          <button
            onClick={handleIndividualForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати індивідуальні устілки
          </button>
        )}
        {!isAdminIndividualFormOpen && (
          <AdminIndividualInsolesForm
            getAll={getAll}
            toggleIndividualForm={handleIndividualForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminIndividualInsolesTable
        adminIndividuals={adminIndividuals}
        handleEditIndividual={onEditIndividual}
        handleDeleteIndividual={onDeleteIndividual}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminIndividualInsoles;
