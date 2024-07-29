import React, { useEffect, useState } from "react";
import styles from "./AdminIndividualInsolesUpdateReviews.module.css";
import { IProductReview } from "../../../../../../../../services/products/product.interface";
import AdminProductsReviewsForm from "./components/admin-individual-insoles-review-form/AdminIndividualInsolesReviewsForm";
import AdminProductReviewsTable from "./components/admin-individual-insoles-reviews-table/AdminIndividualInsolesReviewsTable";
import { getAllIndividualReviews } from "../../../../../../../../services/reviews/reviews";
import { IIndividualInsole } from "../../../../../../../../services/individual-insoles/individualInsoles.interface";

interface Props {
  editIndividual: IIndividualInsole;
}

const AdminIndividualInsolesUpdateReviews: React.FC<Props> = ({
  editIndividual,
}) => {
  const [isProductsReviewsFormOpen, setProductsReviewsFormOpen] =
    useState(true);
  const [productReviews, setProductReviews] = useState<IProductReview[]>([]);

  const getAll = async () => {
    const productReviewsData = await getAllIndividualReviews(editIndividual.id);
    setProductReviews(productReviewsData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleProductReviewsForm = () => {
    setProductsReviewsFormOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.admin__main_reviews}>
      <div className={styles.admin__reviews_form}>
        {isProductsReviewsFormOpen && (
          <button
            onClick={handleProductReviewsForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати відгук продукту
          </button>
        )}
        {!isProductsReviewsFormOpen && (
          <AdminProductsReviewsForm
            getAll={getAll}
            individualId={editIndividual.id}
            toggleProductReviewsForm={handleProductReviewsForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminProductReviewsTable
        getAll={getAll}
        productReviews={productReviews}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminIndividualInsolesUpdateReviews;
