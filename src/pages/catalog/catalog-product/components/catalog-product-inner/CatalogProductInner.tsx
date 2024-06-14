import React, { useState } from "react";
import styles from "./CatalogProductInner.module.css";

const CatalogProductInner: React.FC = () => {
  const [countOfCertificate, setCountOfCertificate] = useState<number>(1);

  const handleCountOfCertificate = (operation: "increment" | "decrement") => {
    setCountOfCertificate((prevCount) => {
      if (operation === "increment") {
        return prevCount + 1;
      } else if (operation === "decrement" && prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <div className={styles.catalog__main_product}>
      <div className={styles.catalog__product_banners}>
        <img
          src="../../images/individual-product-1.jpg"
          alt="certificate gift banner"
          className={styles.catalog__banners_item}
        />
        <img
          src="../../images/individual-product-2.jpg"
          alt="certificate gift banner"
          className={styles.catalog__banners_item}
        />
        <img
          src="../../images/individual-product-3.jpg"
          alt="certificate gift banner"
          className={styles.catalog__banners_item}
        />
        <img
          src="../../images/individual-product-4.jpg"
          alt="certificate gift banner"
          className={styles.catalog__banners_item}
        />
      </div>
      <div className={styles.catalog__product_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            Індивідуальні ортопедичні устілки
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
              <span className={styles.catalog__code_item}>PROSTO-3</span>
            </p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <h2 className={styles.catalog__main_price}>1499 грн</h2>
          <div className={styles.catalog__main_count}>
            <span
              onClick={() => handleCountOfCertificate("decrement")}
              className={styles.catalog__count_button}
            >
              <img
                src="../../images/minus-icon.svg"
                alt="certificate action icon"
                className={styles.catalog__button_action}
              />
            </span>
            <p className={styles.catalog__count_text}>{countOfCertificate}</p>
            <span
              onClick={() => handleCountOfCertificate("increment")}
              className={styles.catalog__count_button}
            >
              <img
                src="../../images/plus-icon.svg"
                alt="certificate action icon"
                className={styles.catalog__button_action}
              />
            </span>
          </div>
        </div>
        <div className={styles.catalog__info_footer}>
          <div className={styles.catalog__footer_sizes}>
            <p className={styles.catalog__sizes_title}>
              Оберіть розмір:{" "}
              <span className={styles.catalog__sizes_types}>
                21 розмір (13,7 см)
              </span>
            </p>
            <div className={styles.catalog__sizes_main}>
              <div className={styles.catalog__block_items}>
                <span className={styles.catalog__block_circle}>21</span>
                <span className={styles.catalog__block_circle}>22</span>
                <span className={styles.catalog__block_circle}>23</span>
                <span className={styles.catalog__block_circle}>24</span>
                <span className={styles.catalog__block_circle}>25</span>
                <span className={styles.catalog__block_circle}>26</span>
                <span className={styles.catalog__block_circle}>27</span>
                <span className={styles.catalog__block_circle}>28</span>
                <span className={styles.catalog__block_circle}>29</span>
                <span className={styles.catalog__block_circle}>30</span>
              </div>
            </div>
          </div>
          <div className={styles.catalog__footer_info}>
            <p className={styles.catalog__info_text}>
              Дитячі ортопедичні устілки призначено для корекції плоскостопості.
            </p>
            <p className={styles.catalog__info_text}>
              Головною особливістю таких ортопедичних устілок є спеціальний
              пружний каркас, який підтримує склепіння стоп у правильному
              положенні. Високий бортик підтримує стопу від завалювання
              (гіперпронаціі) під час ходьби та бігу.
            </p>
          </div>
          <button className={styles.catalog__info_order} type="button">
            ЗАМОВИТИ УСТІЛКИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductInner;
