import React, { useEffect, useState } from "react";
import styles from "./CartProductItem.module.css";
import { ICart } from "../../../../../services/cart/cart.interface";
import { useTranslation } from "react-i18next";

interface Props {
  cartItem: ICart;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  deleteProduct: (id: string) => void;
}

const CartProductItem: React.FC<Props> = ({
  cartItem,
  quantity,
  onQuantityChange,
  deleteProduct,
}) => {
  const [activeLanguage, setActiveLanguage] = useState("ua");
  const { t, i18n } = useTranslation();

  const handleCountChange = (operation: "increment" | "decrement") => {
    const newQuantity =
      operation === "increment"
        ? quantity + 1
        : quantity > 1
        ? quantity - 1
        : 1;
    onQuantityChange(newQuantity);
  };

  useEffect(() => {
    setActiveLanguage(i18n.language === "ua" ? "ua" : "en");
  }, [i18n.language]);

  return (
    <li className={styles.cart__list_item}>
      <div className={styles.cart__item_banners}>
        {cartItem.productImages!.map((productImage: string, index: number) => (
          <img
            key={index}
            src={productImage}
            alt="cart product banner"
            className={styles.cart__banners_item}
          />
        ))}
      </div>
      <div className={styles.cart__item_main}>
        <div className={styles.cart__main_info}>
          <h2 className={styles.cart__info_title}>
            {activeLanguage === "ua" ? cartItem.name_ua : cartItem.name_en}
          </h2>
          <p className={styles.cart__info_description}>
            {activeLanguage === "ua"
              ? cartItem.sizeDescription_ua
              : cartItem.sizeDescription_en}
          </p>
        </div>
        <div className={styles.cart__main_actions}>
          <div className={styles.cart__inner_count}>
            <span
              onClick={() => handleCountChange("decrement")}
              className={styles.cart__count_circle}
            >
              <img
                src="../../images/minus-icon.svg"
                alt="product action icon"
                className={styles.cart__circle_icon}
              />
            </span>
            <p className={styles.cart__count_text}>{quantity}</p>
            <span
              onClick={() => handleCountChange("increment")}
              className={styles.cart__count_circle}
            >
              <img
                src="../../images/plus-icon.svg"
                alt="product action icon"
                className={styles.cart__circle_icon}
              />
            </span>
          </div>
          <div className={styles.cart__item_price}>
            <span className={styles.cart__price_text}>
              {cartItem.price * quantity} {t("cart.cartCurrency")}
            </span>
          </div>
        </div>
        <div
          onClick={() => deleteProduct(cartItem.id)}
          className={styles.cart__item_close}
        >
          <img
            src="../../images/cart-close-icon.svg"
            alt="cart delete icon"
            className={styles.cart__close_icon}
          />
        </div>
      </div>
    </li>
  );
};

export default CartProductItem;
