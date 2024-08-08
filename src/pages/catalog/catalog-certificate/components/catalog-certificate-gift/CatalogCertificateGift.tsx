import React, { useEffect, useState } from "react";
import styles from "./CatalogCertificateGift.module.css";
import { IReview } from "../../../../../services/reviews/review.interface";
import { ICertificate } from "../../../../../services/gift-certificate/gift-certificate.interface";
import Loader from "../../../../../components/loader/Loader";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../../../../../context/cart/CartContext";
import { toast } from "react-toastify";

interface Props {
  certificateReviews: IReview[];
  onOpenReviewPopup: () => void;
  certificates: ICertificate[];
}

const CatalogCertificateGift: React.FC<Props> = ({
  certificateReviews,
  onOpenReviewPopup,
  certificates,
}) => {
  const [countOfCertificate, setCountOfCertificate] = useState(1);
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();

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

  const notify = () => {
    toast.success(t("cart.cartAddText"), {
      autoClose: 1000,
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: uuidv4(),
      productImages: [
        certificates[0].image_url[0],
        certificates[0].image_url[1],
      ],
      name_en: certificates[0].name_en,
      name_ua: certificates[0].name_ua,
      price: certificates[0].base_price,
      quantity: countOfCertificate,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    addToCart(cartItem);
    notify();
  };

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  if (!certificates[0]) {
    return <Loader />;
  }

  return (
    <div className={styles.catalog__main_gift}>
      <div className={styles.catalog__gift_banners}>
        {certificates[0].image_url.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt="certificate gift banner"
            className={styles.catalog__banners_item}
          />
        ))}
      </div>
      <div className={styles.catalog__gift_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            {activeLanguage === "ua"
              ? certificates[0].name_ua
              : certificates[0].name_en}
          </h3>
          <div className={styles.catalog__header_info}>
            {certificateReviews.length > 0 ? (
              <div className={styles.catalog__header_reviews}>
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <span className={styles.admin__reviews_count}>
                  (
                  {certificateReviews.length === 1
                    ? certificateReviews.length +
                      t("products.productsReviewSingle")
                    : certificateReviews.length +
                      t("products.productsReviewMulti")}
                  )
                </span>
              </div>
            ) : (
              <p
                onClick={onOpenReviewPopup}
                className={styles.catalog__header_left}
              >
                {t("products.productsLeftReview")}
              </p>
            )}
            <p className={styles.catalog__header_code}>
              {t("products.productsCode")}
              <span className={styles.catalog__code_item}>
                {certificates[0].article}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <h2 className={styles.catalog__main_price}>
            {certificates[0].base_price}{" "}
            {activeLanguage === "ua" ? "грн" : "UAH"}
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
          <p className={styles.catalog__info_text}>
            {activeLanguage === "ua"
              ? certificates[0].description_ua
              : certificates[0].description_en}
          </p>
          <button
            onClick={handleAddToCart}
            className={styles.catalog__info_order}
            type="button"
          >
            {t("certificate.certificateButtonText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogCertificateGift;
