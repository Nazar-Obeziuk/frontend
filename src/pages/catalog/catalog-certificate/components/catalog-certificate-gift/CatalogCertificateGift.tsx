import React from "react";
import styles from "./CatalogCertificateGift.module.css";

const CatalogCertificateGift: React.FC = () => {
  return (
    <div className={styles.catalog__main_gift}>
      <div className={styles.catalog__gift_banners}>
        <img
          src="../../images/gift-card.jpg"
          alt="certificate gift banner"
          className={styles.catalog__banners_item}
        />
        <img
          src="../../images/gift-image.jpg"
          alt="certificate gift banner"
          className={styles.catalog__banners_item}
        />
      </div>
      <div className={styles.catalog__gift_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            Подарунковий сертифікат Prostopoo
          </h3>
          <div className={styles.catalog__header_info}>
            <div className={styles.catalog__header_reviews}>
              <img
                src="../../images/review-star.svg"
                alt="review star icon"
                className={styles.catalog__reviews_star}
              />
            </div>
            <p className={styles.catalog__header_left}>Залишити відгук</p>
            <p className={styles.catalog__header_code}>
              Код товару:{" "}
              <span className={styles.catalog__code_item}>PROSTO-GIFT</span>
            </p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <h2 className={styles.catalog__main_price}>1499 грн</h2>
          <div className={styles.catalog__main_count}>
            <span className={styles.catalog__count_button}>
              <img
                src="../../images/minus-icon.svg"
                alt="certificate action icon"
                className={styles.catalog__button_action}
              />
            </span>
            <p className={styles.catalog__count_text}>1</p>
            <span className={styles.catalog__count_button}>
              <img
                src="../../images/plus-icon.svg"
                alt="certificate action icon"
                className={styles.catalog__button_action}
              />
            </span>
          </div>
        </div>
        <div className={styles.catalog__info_footer}>
          <p className={styles.catalog__info_text}>
            Подарунковий сертифікат надає право отримати 1 пару індивідуальних
            ортопедичних устілок бренда Prostopoo.
          </p>
          <button className={styles.catalog__info_order} type="button">
            ЗАМОВИТИ СЕРТИФІКАТ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogCertificateGift;
