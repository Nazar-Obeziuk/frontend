import React, { useState } from "react";
import styles from "./CatalogIndividualProduct.module.css";

const CatalogIndividualProduct: React.FC = () => {
  const [countOfCertificate, setCountOfCertificate] = useState<number>(1);
  const [activeCoverage, setActiveCoverage] = useState<number>(1);

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

  const handleCoverageClick = (index: number) => {
    setActiveCoverage(index);
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
          <div className={styles.catalog__footer_coverage}>
            <p className={styles.catalog__coverage_title}>
              Виберіть покриття:{" "}
              <span className={styles.catalog__coverage_types}>
                TERMY-TEX, перфороване, бежеве
              </span>
            </p>
            <div className={styles.catalog__coverage_main}>
              <div className={styles.catalog__main_block}>
                <p className={styles.catalog__block_text}>
                  Покриття для дорослих та дітей
                </p>
                <div className={styles.catalog__block_items}>
                  <span
                    className={`${styles.catalog__block_circle} ${styles.active}`}
                  >
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                </div>
              </div>
              <div className={styles.catalog__main_block}>
                <p className={styles.catalog__block_text}>Спортивне покриття</p>
                <div className={styles.catalog__block_items}>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                </div>
              </div>
              <div className={styles.catalog__main_block}>
                <p className={styles.catalog__block_text}>
                  Діабетичне покриття
                </p>
                <div className={styles.catalog__block_items}>
                  <span className={styles.catalog__block_circle}>
                    <img
                      src="../../images/catalog-circle-1.svg"
                      alt="catalog coverage icon"
                      className={styles.catalog__circle_image}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.catalog__info_order} type="button">
            ЗАМОВИТИ УСТІЛКИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogIndividualProduct;
