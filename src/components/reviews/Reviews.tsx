import React, { useState } from "react";
import { CertificateReview } from "../../services/certificate-reviews/certificateReviews.interface";
import ReviewItem from "./review-item/ReviewItem";
import styles from "./Reviews.module.css";
import { catalogCertificateReviews } from "../../utils/data/Reviews.data";

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState(catalogCertificateReviews);

  //   const getCatalogReviews = () => {
  //       const reviewsData = catalogCertificateReviews;
  //       setReviews(reviewsData);
  //   }

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
              Відгуків про даний товар поки що немає. Залиште відгук першими.
            </p>
          </div>
          <button className={styles.catalog__empty_button} type="button">
            Залишити відгук
          </button>
        </div>
      )}
      {reviews.length !== 0 && (
        <>
          <button className={styles.catalog__full_button} type="button">
            Залишити відгук
          </button>
          <ul className={styles.catalog__reviews_list}>
            {reviews.map((review: CertificateReview) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Reviews;
