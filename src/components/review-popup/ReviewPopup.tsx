import React from "react";
import styles from "./ReviewPopup.module.css";

interface ReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({ isOpen, onClose }) => {
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
