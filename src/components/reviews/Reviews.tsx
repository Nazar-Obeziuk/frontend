import React from "react";
import ReviewItem from "./review-item/ReviewItem";
import styles from "./Reviews.module.css";
import { IProductReview } from "../../services/products/product.interface";
import { useTranslation } from "react-i18next";

interface ReviewsProps {
  onOpenReviewPopup: () => void;
  reviews: IProductReview[];
}

const Reviews: React.FC<ReviewsProps> = ({ onOpenReviewPopup, reviews }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.catalog__main_reviews}>
      {reviews.length === 0 && (
        <div className={styles.catalog__reviews_empty}>
          <div className={styles.catalog__empty_info}>
            <img
              src="../../images/review-icon.svg"
              alt="catalog info icon"
              className={styles.catalog__info_icon}
            />
            <p className={styles.catalog__info_text}>
              {t("products.productsReviewText")}
            </p>
          </div>
          <button
            onClick={onOpenReviewPopup}
            className={styles.catalog__empty_button}
            type="button"
          >
            {t("products.productsButtonReview")}
          </button>
        </div>
      )}
      {reviews.length !== 0 && (
        <>
          <button
            onClick={onOpenReviewPopup}
            className={styles.catalog__empty_button}
            type="button"
          >
            {t("products.productsButtonReview")}
          </button>
          <ul className={styles.catalog__reviews_list}>
            {reviews.map((review: IProductReview) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Reviews;
