import React, { useEffect, useState } from "react";
import styles from "./CatalogProductInner.module.css";
import {
  IProductItemDetails,
  IProductItemSizes,
} from "../../../../../services/catalog-products/catalog-products.interface";

interface Props {
  catalogProduct: IProductItemDetails;
}

const CatalogProductInner: React.FC<Props> = ({ catalogProduct }) => {
  const [countOfProduct, setCountOfProduct] = useState<number>(1);
  const [currentProductSize, setCurrentProductSize] = useState<
    IProductItemSizes | undefined
  >(catalogProduct.product_variations.sizes[0]);

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

  const handleProductSize = (productSize: IProductItemSizes) => {
    setCurrentProductSize(productSize);
  };

  useEffect(() => {
    if (!catalogProduct.product_variations.sizes) return;
    const res = catalogProduct.product_image_url;
  });

  return (
    <div className={styles.catalog__main_product}>
      <div className={styles.catalog__product_banners}>
        {/* {res.product_image_url.ma} */}
        <img
          src={catalogProduct.product_image_url}
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
            {catalogProduct.product_name_en}
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
              <span className={styles.catalog__code_item}>
                {currentProductSize?.article}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <h2 className={styles.catalog__main_price}>
            {catalogProduct.product_base_price} грн
          </h2>
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
            <p className={styles.catalog__count_text}>{countOfProduct}</p>
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
                {currentProductSize?.description_en}
              </span>
            </p>
            <div className={styles.catalog__sizes_main}>
              <div className={styles.catalog__block_items}>
                {catalogProduct.product_variations.sizes.map(
                  (productSize: IProductItemSizes, index) => (
                    <span
                      onClick={() => handleProductSize(productSize)}
                      key={index}
                      className={styles.catalog__block_circle}
                    >
                      {productSize.value}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.catalog__footer_info}>
            <p className={styles.catalog__info_text}>
              {catalogProduct.product_description_ua}
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
