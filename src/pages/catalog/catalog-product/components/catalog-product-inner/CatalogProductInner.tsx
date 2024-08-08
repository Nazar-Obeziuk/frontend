import React, { useEffect, useState } from "react";
import styles from "./CatalogProductInner.module.css";
import { IProductDetails } from "../../../../../services/products/product.interface";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { useCart } from "../../../../../context/cart/CartContext";
import { toast } from "react-toastify";

interface Props {
  catalogProduct: IProductDetails;
}

const CatalogProductInner: React.FC<Props> = ({ catalogProduct }) => {
  const [countOfProduct, setCountOfProduct] = useState<number>(1);
  const [currentProductSize, setCurrentProductSize] = useState<
    any | undefined
  >();
  const [productIsNotVariated, setProductIsNotVariated] = useState(true);
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();

  useEffect(() => {
    if (catalogProduct.variations.sizes.length > 0) {
      setProductIsNotVariated(false);
      setCurrentProductSize(catalogProduct.variations.sizes[0]);
    }
  }, []);

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  const handleCountOfProduct = (operation: "increment" | "decrement") => {
    setCountOfProduct((prevCount) => {
      if (operation === "increment") {
        return prevCount + 1;
      } else if (operation === "decrement" && prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  const handleProductSize = (productSize: any) => {
    setCurrentProductSize(productSize);
  };

  const notify = () => {
    toast.success(t("cart.cartAddText"), {
      autoClose: 1000,
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: uuidv4(),
      productImages: [catalogProduct.image_url[0], catalogProduct.image_url[2]],
      name_en: catalogProduct.name_en,
      name_ua: catalogProduct.name_ua,
      price: catalogProduct.base_price,
      quantity: countOfProduct,
      sizeDescription_ua: currentProductSize.description_ua,
      sizeDescription_en: currentProductSize.description_en,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    addToCart(cartItem);
    notify();
  };

  const avarageRatings = [];

  for (let i = 1; i <= catalogProduct.average_rating; i++) {
    avarageRatings.push(
      <img
        key={i}
        src="../../images/review-star.svg"
        alt="review star icon"
        className={styles.catalog__reviews_star}
      />
    );
  }

  return (
    <div className={styles.catalog__main_product}>
      <div className={styles.catalog__product_banners}>
        {catalogProduct.image_url.map((image_url: string, index: number) => (
          <img
            src={image_url}
            key={index}
            alt="product banner"
            className={styles.catalog__banners_item}
          />
        ))}
      </div>
      <div className={styles.catalog__product_info}>
        <div className={styles.catalog__info_inner}>
          <div className={styles.catalog__info_header}>
            <h3 className={styles.catalog__header_title}>
              {activeLanguage === "ua"
                ? catalogProduct.name_ua
                : catalogProduct.name_en}
            </h3>
            <div className={styles.catalog__header_info}>
              {avarageRatings.length > 0 ? (
                <div className={styles.catalog__header_reviews}>
                  {avarageRatings}{" "}
                  <span className={styles.admin__reviews_count}>
                    (
                    {catalogProduct.reviews_count === 1
                      ? catalogProduct.reviews_count +
                        t("products.productsReviewSingle")
                      : catalogProduct.reviews_count +
                        t("products.productsReviewMulti")}
                    )
                  </span>
                </div>
              ) : (
                <p className={styles.catalog__header_left}>
                  {t("products.productsLeftReview")}
                </p>
              )}
              <p className={styles.catalog__header_code}>
                {t("products.productsCode")}
                <span className={styles.catalog__code_item}>
                  {currentProductSize
                    ? currentProductSize?.article
                    : catalogProduct.article}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.catalog__info_main}>
            <h2 className={styles.catalog__main_price}>
              {catalogProduct.base_price}{" "}
              {activeLanguage === "ua" ? "грн" : "UAH"}
            </h2>
            <div className={styles.catalog__main_count}>
              <span
                onClick={() => handleCountOfProduct("decrement")}
                className={styles.catalog__count_button}
              >
                <img
                  src="../../images/minus-icon.svg"
                  alt="certificate action icon"
                  className={styles.catalog__button_action}
                />
              </span>
              <p className={styles.catalog__count_text}>{countOfProduct}</p>
              <span
                onClick={() => handleCountOfProduct("increment")}
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
            {!productIsNotVariated && (
              <div className={styles.catalog__footer_sizes}>
                <p className={styles.catalog__sizes_title}>
                  {t("catalogProduct.catalogProductChooseSize")}
                  <span className={styles.catalog__sizes_types}>
                    {activeLanguage === "ua"
                      ? currentProductSize?.description_ua
                      : currentProductSize?.description_en}
                  </span>
                </p>
                <div className={styles.catalog__sizes_main}>
                  <div className={styles.catalog__block_items}>
                    {catalogProduct.variations.sizes.map(
                      (productSize: any, index: number) => (
                        <span
                          onClick={() => handleProductSize(productSize)}
                          key={index}
                          className={`${styles.catalog__block_circle} ${
                            currentProductSize === productSize
                              ? styles.active
                              : ""
                          }`}
                        >
                          {productSize.value}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className={styles.catalog__footer_info}>
              <p className={styles.catalog__info_text}>
                {activeLanguage === "ua"
                  ? catalogProduct.description_details_ua
                  : catalogProduct.description_details_en}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className={styles.catalog__info_order}
          type="button"
        >
          {t("catalogProduct.catalogProductButtonText")}
        </button>
      </div>
    </div>
  );
};

export default CatalogProductInner;
