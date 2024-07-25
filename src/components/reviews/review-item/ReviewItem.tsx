import React from "react";
import styles from "./ReviewItem.module.css";
import { IProductReview } from "../../../services/products/product.interface";
import { useTranslation } from "react-i18next";

interface IProps {
  review: IProductReview;
}

const ReviewItem: React.FC<IProps> = ({ review }) => {
  const { t } = useTranslation();
  const getReviewsDate = (reviewDate: string) => {
    const date = new Date(reviewDate);
    let day;
    let month;
    let year;

    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else {
      day = `${date.getDate()}`;
    }

    if (date.getMonth() + 1 < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = `${date.getMonth() + 1}`;
    }

    year = `${date.getFullYear()}`;

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  return (
    <li className={styles.review__list_item}>
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
          <p className={styles.review__info_name}>{review.name_ua}</p>
          <p className={styles.review__info_date}>
            {getReviewsDate(review.created_at!)}
          </p>
        </div>
      </div>
      <div className={styles.review__item_main}>
        <div className={styles.review__item_inner}>
          <p className={styles.review__inner_title}>
            {t("products.productsReviewsExperience")}
          </p>
          <p className={styles.review__inner_text}>{review.description_ua}</p>
        </div>
        <div className={styles.review__item_inner}>
          <p className={styles.review__inner_title}>
            {t("products.productsReviewsPluses")}
          </p>
          <p className={styles.review__inner_text}>
            {!review.pluses_ua
              ? t("products.productsReviewsEmpty")
              : review.pluses_ua}
          </p>
        </div>
        <div className={styles.review__item_inner}>
          <p className={styles.review__inner_title}>
            {t("products.productsReviewsMinuses")}
          </p>
          <p className={styles.review__inner_text}>
            {!review.minuses_ua
              ? t("products.productsReviewsEmpty")
              : review.minuses_ua}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
