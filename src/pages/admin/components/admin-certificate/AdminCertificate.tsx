import React, { useEffect, useState } from "react";
import styles from "./AdminCertificate.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteCertificate,
  getAllCertificates,
} from "../../../../services/gift-certificate/gift-certificate";
import { ICertificate } from "../../../../services/gift-certificate/gift-certificate.interface";
import AdminCertificateTable from "./components/admin-certificate-table/AdminCertificateTable";
import AdminCertificateForm from "./components/admin-certificate-form/AdminCertificateForm";

const AdminCertificate: React.FC = () => {
  const [isAdminCertificateFormOpen, setAdminCertificateFormOpenn] =
    useState(true);
  const [adminCertificates, setAdminCertificates] = useState([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const certificatesData = await getAllCertificates();
    setAdminCertificates(certificatesData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleCertificateForm = () => {
    setAdminCertificateFormOpenn((prevState) => !prevState);
  };

  const onEditCertificate = (certificate: ICertificate) => {
    navigate(`/prostopoo-admin-panel/update-certificate/${certificate.id}`);
  };

  const onDeleteCertificate = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей сертифікат?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteCertificate(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__main_certificate}>
      <div className={styles.admin__certificate_form}>
        {isAdminCertificateFormOpen && (
          <button
            onClick={handleCertificateForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати подарунковий сертифікат
          </button>
        )}
        {!isAdminCertificateFormOpen && (
          <AdminCertificateForm
            getAll={getAll}
            toggleCertificateForm={handleCertificateForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminCertificateTable
        adminCertificates={adminCertificates}
        handleEditCertificate={onEditCertificate}
        handleDeleteCertificate={onDeleteCertificate}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminCertificate;
