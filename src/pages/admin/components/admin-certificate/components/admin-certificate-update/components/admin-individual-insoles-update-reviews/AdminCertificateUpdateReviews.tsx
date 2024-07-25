import React, { useEffect, useState } from "react";
import styles from "./AdminCertificateUpdateReviews.module.css";
import { ICertificate } from "../../../../../../../../services/gift-certificate/gift-certificate.interface";
import AdminCertificateReviewsForm from "./components/admin-certificate-review-form/AdminCertificateReviewsForm";
import AdminCertificateReviewsTable from "./components/admin-certificate-reviews-table/AdminCertificateReviewsTable";
import { IProductReview } from "../../../../../../../../services/products/product.interface";
import { getAllCertificateReviews } from "../../../../../../../../services/reviews/reviews";
import { useParams } from "react-router-dom";

interface Props {
  editCertificate: ICertificate;
}

const AdminCertificateUpdateReviews: React.FC<Props> = ({
  editCertificate,
}) => {
  const [isCertificateReviewsFormOpen, setCertificateReviewsFormOpen] =
    useState(true);
  const [certificateReviews, setCertificateReviews] = useState<
    IProductReview[]
  >([]);
  const { id } = useParams();

  const getAll = async () => {
    const certificateReviewsData = await getAllCertificateReviews(+id!);
    setCertificateReviews(certificateReviewsData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleCertificateReviewsForm = () => {
    setCertificateReviewsFormOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.admin__main_reviews}>
      <div className={styles.admin__reviews_form}>
        {isCertificateReviewsFormOpen && (
          <button
            onClick={handleCertificateReviewsForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати відгук сертифікату
          </button>
        )}
        {!isCertificateReviewsFormOpen && (
          <AdminCertificateReviewsForm
            getAll={getAll}
            certificateId={editCertificate.id}
            toggleCertificateReviewsForm={handleCertificateReviewsForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminCertificateReviewsTable
        getAll={getAll}
        certificateReviews={certificateReviews}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminCertificateUpdateReviews;
