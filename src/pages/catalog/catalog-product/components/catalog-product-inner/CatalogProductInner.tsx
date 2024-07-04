import React, { useState, useEffect } from "react";
import styles from "./CatalogProductInner.module.css";
import { IProductDetails } from "../../../../../services/products/product.interface";

interface Props {
  catalogProduct: IProductDetails;
}

const CatalogProductInner: React.FC<Props> = ({ catalogProduct }) => {
  const [countOfProduct, setCountOfProduct] = useState<number>(1);
  const [currentProductSize, setCurrentProductSize] = useState<any | undefined>(
    catalogProduct?.variations?.sizes ? catalogProduct.variations.sizes[0] : undefined
  );
  const [currentProductColor, setCurrentProductColor] = useState<any | undefined>(
    catalogProduct?.variations?.colors ? catalogProduct.variations.colors[0] : undefined
  );

  const handleCountOfCertificate = (operation: "increment" | "decrement") => {
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

  const handleProductColor = (productColor: any) => {
    setCurrentProductColor(productColor);
  };

  useEffect(() => {
    if (catalogProduct?.variations?.sizes) {
      setCurrentProductSize(catalogProduct.variations.sizes[0]);
    }
    if (catalogProduct?.variations?.colors) {
      setCurrentProductColor(catalogProduct.variations.colors[0]);
    }
  }, [catalogProduct]);

  if (!catalogProduct) {
    return <div>Loading...</div>;
  }

  const imagesToShow = [
    catalogProduct.image_url[0],
    ...(currentProductColor?.image_url || []).slice(0, 3)
  ].slice(0, 4);

  return (
    <div className={styles.catalog__main_product}>
      <div className={styles.catalog__product_banners}>
        {imagesToShow.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Product banner ${index + 1}`}
            className={styles.catalog__banners_item}
          />
        ))}
      </div>
      <div className={styles.catalog__product_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            {catalogProduct.name_ua}
          </h3>
          <div className={styles.catalog__header_info}>
            <div className={styles.catalog__header_reviews}>
              <img
                src="../../images/review-star.svg"
                alt="review star icon"
                className={styles.catalog__reviews_star}
              />
              <span>{catalogProduct.average_rating} ({catalogProduct.reviews_count} відгуків)</span>
            </div>
            <p className={styles.catalog__header_left}>Залишити відгук</p>
            <p className={styles.catalog__header_code}>
              Код товару:{" "}
              <span className={styles.catalog__code_item}>
                {catalogProduct.article}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <h2 className={styles.catalog__main_price}>
            {catalogProduct.base_price} грн
          </h2>
          <div className={styles.catalog__main_count}>
            <span
              onClick={() => handleCountOfCertificate("decrement")}
              className={styles.catalog__count_button}
            >
              <img
                src="../../images/minus-icon.svg"
                alt="decrease count"
                className={styles.catalog__button_action}
              />
            </span>
            <p className={styles.catalog__count_text}>{countOfProduct}</p>
            <span
              onClick={() => handleCountOfCertificate("increment")}
              className={styles.catalog__count_button}
            >
              <img
                src="../../images/plus-icon.svg"
                alt="increase count"
                className={styles.catalog__button_action}
              />
            </span>
          </div>
        </div>
        <div className={styles.catalog__info_footer}>
          {currentProductSize && (
            <div className={styles.catalog__footer_sizes}>
              <p className={styles.catalog__sizes_title}>
                Оберіть розмір:{" "}
                <span className={styles.catalog__sizes_types}>
                  {currentProductSize.description_en}
                </span>
              </p>
              <div className={styles.catalog__sizes_main}>
                <div className={styles.catalog__block_items}>
                  {catalogProduct.variations.sizes.map(
                    (productSize: any, index: number) => (
                      <span
                        onClick={() => handleProductSize(productSize)}
                        key={index}
                        className={`${styles.catalog__block_circle} ${currentProductSize?.value === productSize.value
                          ? styles.selected
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
          {currentProductColor && (
            <div className={styles.catalog__footer_colors}>
              <p className={styles.catalog__sizes_title}>
                Оберіть колір:{" "}
                <span className={styles.catalog__colors_types}>
                  {currentProductColor.description_en}
                </span>
              </p>
              <div className={styles.catalog__colors_main}>
                <div className={styles.catalog__block_items}>
                  {catalogProduct.variations.colors.map(
                    (productColor: any, index: number) => (
                      <span
                        onClick={() => handleProductColor(productColor)}
                        key={index}
                        className={`${styles.catalog__block_circle} ${currentProductColor?.value === productColor.value
                          ? styles.selected
                          : ""
                          }`}
                      >
                        {productColor.value}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.catalog__footer_info}>
          <p className={styles.catalog__info_text}>
            {catalogProduct.description_ua}
          </p>
        </div>
        <button className={styles.catalog__info_order} type="button">
          ЗАМОВИТИ УСТІЛКИ
        </button>
      </div>
    </div>
  );
};

export default CatalogProductInner;
