import React from "react";
import styles from "./CartPaymentProducts.module.css";
import CartPaymentProductsItem from "./components/cart-payment-products-item/CartPaymentProductsItem";

const CartPaymentProducts: React.FC = () => {
  return (
    <div className={styles.cart__main_products}>
      <div className={styles.cart__products_main}>
        <ul className={styles.cart__main_list}>
          <CartPaymentProductsItem key={"uniq1"} />
          <CartPaymentProductsItem key={"uniq1"} />
        </ul>
      </div>
      <div className={styles.cart__products_price}>
        <p className={styles.cart__price_text}>Загальна сума: </p>
        <span className={styles.cart__price_item}>1 998 грн</span>
      </div>
    </div>
  );
};

export default CartPaymentProducts;
