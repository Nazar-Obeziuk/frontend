import React, { useEffect, useState } from "react";
import styles from "./ReviewPopup.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

interface ReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  review: string;
  pluses: string;
  minuses: string;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({ isOpen, onClose }) => {
  const defaultRatingValue = 4.5;
  const [rating, setRating] = useState<number | null>(defaultRatingValue);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formattedData = {
      ...data,
      review: data.review === "" ? null : data.review,
      pluses: data.pluses === "" ? null : data.pluses,
      minuses: data.minuses === "" ? null : data.minuses,
      rating: rating,
    };

    console.log(formattedData);
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
          <h2 className={styles.popup__wrapper_title}>Відгук про товар</h2>
          <div className={styles.popup__wrapper_rating}>
            <p className={styles.popup__rating_text}>Поставте оцінку</p>
            <div className={styles.popup__rating_stars}>
              <Stack spacing={1}>
                <Rating
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  name="user-rating"
                  value={rating}
                  defaultValue={defaultRatingValue}
                  precision={0.5}
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
                  className={`${styles.popup__fields_input} ${
                    errors.name ? styles.inputError : ""
                  }`}
                  placeholder="Ваше ім’я"
                  {...register("name", { required: "Це поле обов'язкове" })}
                />
                {errors.name && (
                  <p className={styles.popup__input_error}>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <textarea
                placeholder="Ваш відгук"
                className={styles.popup__fields_textarea}
                {...register("review")}
              ></textarea>
              <textarea
                placeholder="Плюси"
                className={styles.popup__fields_textarea}
                {...register("pluses")}
              ></textarea>
              <textarea
                placeholder="Мінуси"
                className={styles.popup__fields_textarea}
                {...register("minuses")}
              ></textarea>
            </div>
            <button className={styles.popup__form_button} type="submit">
              Залишити відгук
            </button>
          </form>
          <p className={styles.popup__wrapper_info}>
            Відправляючи коментар / відгук на сайті ви погоджуєтеся з правилами
            модерації коментарів і відгуків
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewPopup;
