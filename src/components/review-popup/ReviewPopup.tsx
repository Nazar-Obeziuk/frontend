import React, { useEffect, useState } from "react";
import styles from "./ReviewPopup.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { IReview } from "../../services/reviews/review.interface";
import { useTranslation } from "react-i18next";

interface ReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  getReviews: () => void;
  createReviews: (formData: FormData, id: number) => void;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({
  isOpen,
  onClose,
  getReviews,
  createReviews,
}) => {
  const defaultRatingValue = 5;
  const [rating, setRating] = useState<number | null>(defaultRatingValue);
  const { id } = useParams();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReview>();

  const onSubmit: SubmitHandler<IReview> = async (data) => {
    const formData = new FormData();
    formData.append("name_ua", data.name_ua);
    formData.append("description_ua", data.description_ua || "");
    formData.append("pluses_ua", data.pluses_ua || "");
    formData.append("minuses_ua", data.minuses_ua || "");
    formData.append("product_id", id!);
    if (rating !== null) {
      formData.append("stars", rating.toString());
    }

    createReviews(formData, +id!);
    resetForm();
  };

  const resetForm = () => {
    reset();
    setRating(defaultRatingValue);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div onClick={onClose} className={styles.review__overlay}></div>
      <div className={styles.popup__review}>
        <div className={styles.popup__review_wrapper}>
          <span onClick={onClose} className={styles.popup__wrapper_close}>
            <img
              src="../../images/close-icon.svg"
              alt="popup close icon"
              className={styles.popup__close_icon}
            />
          </span>
          <h2 className={styles.popup__wrapper_title}>
            {t("popupReviews.popupReviewsTitle")}
          </h2>
          <div className={styles.popup__wrapper_rating}>
            <p className={styles.popup__rating_text}>
              {t("popupReviews.popupReviewsRating")}
            </p>
            <div className={styles.popup__rating_stars}>
              <Stack spacing={1}>
                <Rating
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  name="user-rating"
                  value={rating}
                  defaultValue={defaultRatingValue}
                  precision={1}
                />
              </Stack>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.popup__wrapper_form}
          >
            <div className={styles.popup__form_fields}>
              <div className={styles.popup__fields_control}>
                <input
                  type="text"
                  className={styles.popup__fields_input}
                  style={
                    errors["name_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder={t("popupReviews.popupReviewsPlaceholder1")}
                  {...register("name_ua", { required: true })}
                />
                {errors.name_ua && (
                  <p className={styles.popup__input_error}>
                    {errors.name_ua.message}
                  </p>
                )}
              </div>
              <div className={styles.popup__fields_control}>
                <textarea
                  placeholder={t("popupReviews.popupReviewsPlaceholder2")}
                  style={
                    errors["description_ua"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  className={`${styles.popup__fields_input} ${
                    errors.description_ua ? styles.inputError : ""
                  }`}
                  {...register("description_ua", {
                    required: true,
                  })}
                ></textarea>
                {errors.description_ua && (
                  <p className={styles.popup__input_error}>
                    {errors.description_ua.message}
                  </p>
                )}
              </div>
              <textarea
                placeholder={t("popupReviews.popupReviewsPlaceholder3")}
                className={styles.popup__fields_textarea}
                {...register("pluses_ua")}
              ></textarea>
              <textarea
                placeholder={t("popupReviews.popupReviewsPlaceholder4")}
                className={styles.popup__fields_textarea}
                {...register("minuses_ua")}
              ></textarea>
            </div>
            <button className={styles.popup__form_button} type="submit">
              {t("popupReviews.popupReviewsButtonText")}
            </button>
          </form>
          <p className={styles.popup__wrapper_info}>
            {t("popupReviews.popupReviewsInfo")}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewPopup;
