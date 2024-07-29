import React, { useEffect, useState } from "react";
import styles from "./CatalogProductItem.module.css";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../services/products/product.interface";
import { useTranslation } from "react-i18next";

interface Props {
  product: IProduct;
}

const CatalogProductItem: React.FC<Props> = ({ product }) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const buyProduct = () => {
    navigate(`/catalog/orthopedic-insoles/${product.id}`);
  };

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  return (
    <div className={styles.catalog__main_item}>
      <div className={styles.catalog__item_banner}>
        <img
          src={product.image_url[0]}
          alt="product banner"
          className={styles.catalog__banner_image}
        />
      </div>
      <div className={styles.catalog__item_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            {activeLanguage === "ua" ? product.name_ua : product.name_en}
          </h3>
          {product.reviews_count > 0 ? (
            <div className={styles.catalog__info_reviews}>
              <div className={styles.catalog__reviews_stars}>
                <img
                  src="../../images/review-star.svg"
                  alt="reivews star icon"
                  className={styles.catalog__stars_item}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="reivews star icon"
                  className={styles.catalog__stars_item}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="reivews star icon"
                  className={styles.catalog__stars_item}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="reivews star icon"
                  className={styles.catalog__stars_item}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="reivews star icon"
                  className={styles.catalog__stars_item}
                />
              </div>
              <span className={styles.catalog__reviews_count}>
                ({product.reviews_count})
              </span>
            </div>
          ) : (
            <div className={styles.catalog__header_left}>
              <p className={styles.catalog__left_review}>
                {t("products.productsLeftReview")}
              </p>
            </div>
          )}
        </div>
        <div className={styles.catalog__info_main}>
          <p className={styles.catalog__main_description}>
            {activeLanguage === "ua"
              ? product.description_ua
              : product.description_en}
          </p>
        </div>
        <div className={styles.catalog__info_footer}>
          <h2 className={styles.catalog__footer_price}>
            {product.base_price} {activeLanguage === "ua" ? "грн" : "UAH"}
          </h2>
          <button
            onClick={buyProduct}
            className={styles.catalog__footer_button}
            type="button"
          >
            {t("products.productsBuy")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductItem;
