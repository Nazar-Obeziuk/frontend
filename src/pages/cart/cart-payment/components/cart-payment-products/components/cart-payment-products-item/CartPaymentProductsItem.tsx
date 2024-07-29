import React, { useEffect, useState } from "react";
import styles from "./CartPaymentProductsItem.module.css";
import { useTranslation } from "react-i18next";
import { ICart } from "../../../../../../../services/cart/cart.interface";

interface Props {
  cartProduct: ICart;
}

const CartPaymentProductsItem: React.FC<Props> = ({ cartProduct }) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  return (
    <li className={styles.cart__list_item}>
      <div className={styles.cart__item_banners}>
        {cartProduct.productImages!.map(
          (productImage: string, index: number) => (
            <img
              key={index}
              src={productImage}
              alt="cart product banner"
              className={styles.cart__banners_item}
            />
          )
        )}
      </div>
      <div className={styles.cart__item_info}>
        <h2 className={styles.cart__info_name}>
          {activeLanguage === "ua" ? cartProduct.name_ua : cartProduct.name_en}
        </h2>
        <p className={styles.cart__info_description}>
          {activeLanguage === "ua"
            ? cartProduct.sizeDescription_ua
            : cartProduct.sizeDescription_en}
        </p>
      </div>
    </li>
  );
};

export default CartPaymentProductsItem;
