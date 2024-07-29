import React, { useEffect, useState } from "react";
import styles from "./AdminReviews.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminReviewsForm from "./components/admin-reviews-form/AdminReviewsForm";
import AdminReviewsTable from "./components/admin-reviews-table/AdminReviewsTable";
import {
  deleteReview,
  getAllGeneralReviews,
} from "../../../../services/reviews/reviews";
import { IReview } from "../../../../services/reviews/review.interface";

const AdminReviews: React.FC = () => {
  const [isAdminReviewsFormOpen, setAdminReviewsFormOpen] = useState(true);
  const [adminReviews, setAdminReviews] = useState<IReview[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const reviewData = await getAllGeneralReviews();
    setAdminReviews(reviewData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleReviewsForm = () => {
    setAdminReviewsFormOpen((prevState) => !prevState);
  };

  const onEditReview = (review: any) => {
    navigate(`/prostopoo-admin-panel/update-general-review/${review.id}`);
  };

  const onDeleteReview = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей відгук?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await deleteReview(id, token);
        notify(response.message);
        getAll();
      }
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
    </div>
  );
};

export default AdminReviews;
