import React, { useEffect, useState } from "react";
import styles from "./AdminReviews.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminReviewsForm from "./components/admin-reviews-form/AdminReviewsForm";
import AdminReviewsTable from "./components/admin-reviews-table/AdminReviewsTable";
import {
  deleteReview,
  getAllCertificateReviews,
  getAllGeneralReviews,
  getAllIndividualReviews,
} from "../../../../services/reviews/reviews";
import { IReview } from "../../../../services/reviews/review.interface";
import AdminReviewsCertificateTable from "./components/admin-reviews-certificate-table/AdminReviewsCertificateTable";

const AdminReviews: React.FC = () => {
  const [isAdminReviewsFormOpen, setAdminReviewsFormOpen] = useState(true);
  const [adminReviews, setAdminReviews] = useState<IReview[]>([]);
  const [adminCertificateReviews, setAdminCertificateReviews] = useState<
    IReview[]
  >([]);
  const [adminIndividualReviews, setAdminIndividualReviews] = useState<
    IReview[]
  >([]);
  const [activeTab, setActiveTab] = useState<
    "general" | "certificate" | "individual"
  >("general");
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const reviewData = await getAllGeneralReviews();
    setAdminReviews(reviewData);
  };

  // const getAllCertificate = async () => {
  //   const reviewCertificateData = await getAllCertificateReviews();
  //   setAdminCertificateReviews(reviewCertificateData);
  // };

  // const getAllIndividual = async () => {
  //   const reviewIndividualData = await getAllIndividualReviews();
  //   setAdminIndividualReviews(reviewIndividualData);
  // };

  useEffect(() => {
    getAll();
  }, []);

  const handleReviewsForm = () => {
    setAdminReviewsFormOpen((prevState) => !prevState);
  };

  const onEditReview = (review: any) => {
    navigate(`/admin/update-general-review/${review.id}`);
  };

  const onDeleteReview = async (id: number) => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deleteReview(id, token);
      notify(response.message);
      getAll();
    }
  };

  return (
    <div className={styles.admin__main_reviews}>
      <div className={styles.admin__reviews_form}>
        {isAdminReviewsFormOpen && (
          <button
            onClick={handleReviewsForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати відгук
          </button>
        )}
        {!isAdminReviewsFormOpen && (
          <AdminReviewsForm
            getAll={getAll}
            toggleReviewsForm={handleReviewsForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminReviewsTable
        adminReviews={adminReviews}
        handleEditReview={onEditReview}
        handleDeleteReview={onDeleteReview}
        key={"uniq1"}
      />
      {/* <div className={styles.admin__main_tabs}>
        <button
          onClick={() => setActiveTab("general")}
          className={`${styles.admin__tabs_button} ${
            activeTab === "general" ? styles.admin__tabs_active : {}
          }`}
          type="button"
        >
          Головні відгуки
        </button>
        <button
          onClick={() => setActiveTab("certificate")}
          className={`${styles.admin__tabs_button} ${
            activeTab === "certificate" ? styles.admin__tabs_active : {}
          }`}
          type="button"
        >
          Відгуки сертифікату
        </button>
        <button
          onClick={() => setActiveTab("individual")}
          className={`${styles.admin__tabs_button} ${
            activeTab === "individual" ? styles.admin__tabs_active : {}
          }`}
          type="button"
        >
          Відгуки індивідуальні
        </button>
      </div> */}
      {/* {activeTab === "general" && (
        <AdminReviewsTable
          adminReviews={adminReviews}
          handleEditReview={onEditReview}
          handleDeleteReview={onDeleteReview}
          key={"uniq1"}
        />
      )}
      {activeTab === "certificate" && (
        <AdminReviewsCertificateTable
          adminCertificateReviews={adminCertificateReviews}
          handleEditReview={onEditReview}
          handleDeleteReview={onDeleteReview}
          key={"uniq2"}
        />
      )} */}
    </div>
  );
};

export default AdminReviews;
