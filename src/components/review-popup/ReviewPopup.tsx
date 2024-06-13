import React, { useEffect } from "react";
import styles from "./ReviewPopup.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

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
    };

    console.log(formattedData);
    reset();
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
              <img
                src="../../images/popup-star.svg"
                alt="rating star"
                className={styles.popup__stars_item}
              />
              <img
                src="../../images/popup-star.svg"
                alt="rating star"
                className={styles.popup__stars_item}
              />
              <img
                src="../../images/popup-star.svg"
                alt="rating star"
                className={styles.popup__stars_item}
              />
              <img
                src="../../images/popup-star.svg"
                alt="rating star"
                className={styles.popup__stars_item}
              />
              <img
                src="../../images/popup-star.svg"
                alt="rating star"
                className={styles.popup__stars_item}
              />
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
