import React from "react";
import styles from "./CartPaymentProductsItem.module.css";

const CartPaymentProductsItem: React.FC = () => {
  return (
    <li className={styles.cart__list_item}>
      <div className={styles.cart__item_banners}>
        <img
          src="../../images/individual-product-1.jpg"
          alt="cart product banner"
          className={styles.cart__banners_item}
        />
        <img
          src="../../images/individual-product-2.jpg"
          alt="cart product banner"
          className={styles.cart__banners_item}
        />
      </div>
      <div className={styles.cart__item_info}>
        <h2 className={styles.cart__info_name}>
          Індивідуальні ортопедичні устілки
        </h2>
        <p className={styles.cart__info_description}>
          TERMY-TEX, перфарована, бежева
        </p>
      </div>
    </li>
  );
};

export default CartPaymentProductsItem;
