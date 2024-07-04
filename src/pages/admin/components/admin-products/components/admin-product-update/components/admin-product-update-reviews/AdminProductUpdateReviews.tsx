import React, { useEffect, useState } from "react";
import styles from "./AdminProductUpdateReviews.module.css";
import {
  IProduct,
  IProductReview,
} from "../../../../../../../../services/products/product.interface";
import AdminProductsReviewsForm from "./components/admin-product-review-form/AdminProductsReviewsForm";
import AdminProductReviewsTable from "./components/admin-products-reviews-table/AdminProductReviewsTable";
import { getAllProductsReviews } from "../../../../../../../../services/reviews/reviews";

interface Props {
  editProduct: IProduct;
}

const AdminProductUpdateReviews: React.FC<Props> = ({ editProduct }) => {
  const [isProductsReviewsFormOpen, setProductsReviewsFormOpen] =
    useState(true);
  const [productReviews, setProductReviews] = useState<IProductReview[]>([]);

  const getAll = async () => {
    const productReviewsData = await getAllProductsReviews(
      editProduct.product_id
    );
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
            productId={editProduct.product_id}
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

export default AdminProductUpdateReviews;
