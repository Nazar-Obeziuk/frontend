import React from "react";
import styles from "./ReviewItem.module.css";
import { ICertificateReview } from "../../../services/certificate-reviews/certificateReviews.interface";

interface IProps {
  review: ICertificateReview;
}

const ReviewItem: React.FC<IProps> = ({ review }) => {
  return (
    <div className={styles.review__list_item}>
      <div className={styles.review__item_header}>
        <div className={styles.review__header_stars}>
          {Array(review.stars)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src="../../images/review-star.svg"
                alt="review star"
                className={styles.review__stars_item}
              />
            ))}
        </div>
        <div className={styles.review__header_info}>
          <p className={styles.review__info_name}>Коваль Дмитро</p>
          <p className={styles.review__info_date}>21.04.2023</p>
        </div>
      </div>
      <div className={styles.review__item_main}>
        <div className={styles.review__item_inner}>
          <p className={styles.review__inner_title}>Досвід використання:</p>
          <p className={styles.review__inner_text}>
            Нещодавно я не зміг потрапити до ортопеда на прийом і звернувся до
            салону Рідні медтехніки, де є послуга виготовлення устілок. Великою
            перевагою стало, що діагностують тут по технології CAD/CAM.
          </p>
        </div>
        <div className={styles.review__item_inner}>
          <p className={styles.review__inner_title}>Плюси:</p>
          <p className={styles.review__inner_text}>Якісні устілки</p>
        </div>
        <div className={styles.review__item_inner}>
          <p className={styles.review__inner_title}>Мінуси:</p>
          <p className={styles.review__inner_text}>Немає</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
