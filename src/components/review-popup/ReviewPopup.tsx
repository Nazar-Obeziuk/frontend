import React from "react";
import styles from "./ReviewPopup.module.css";

const ReviewPopup: React.FC = () => {
  return (
    <>
      <div className={styles.review__overlay}></div>
      <div className={styles.popup__review}>
        <div className={styles.popup__review_wrapper}>
          <span className={styles.popup__wrapper_close}>
            <img
              src=""
              alt="popup close icon"
              className={styles.popup__close_icon}
            />
          </span>
          <h2 className={styles.popup__wrapper_title}>Відгук про товар</h2>
          <div className={styles.popup__wrapper_rating}>
            <p className={styles.popup__rating_text}>Поставте оцінку</p>
            <div className={styles.popup__rating_stars}>
              <img
                src=""
                alt="rating star"
                className={styles.popup__stars_item}
              />
            </div>
          </div>
          <div className={styles.popup__wrapper_form}>
            <div className={styles.popup__form_fields}>
              <input
                type="text"
                className={styles.popup__fields_input}
                placeholder="Ваше ім’я"
              />
              <textarea
                placeholder="Ваш відгук"
                className={styles.popup__fields_textarea}
              ></textarea>
              <textarea
                placeholder="Плюси"
                className={styles.popup__fields_textarea}
              ></textarea>
              <textarea
                placeholder="Мінуси"
                className={styles.popup__fields_textarea}
              ></textarea>
            </div>
            <button className={styles.popup__form_button} type="button">
              Залишити відгук
            </button>
          </div>
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
