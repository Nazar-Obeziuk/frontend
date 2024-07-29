import React, { useEffect, useState } from "react";
import styles from "./CartPaymentProducts.module.css";
import CartPaymentProductsItem from "./components/cart-payment-products-item/CartPaymentProductsItem";
import { useTranslation } from "react-i18next";
import { ICart } from "../../../../../services/cart/cart.interface";

const CartPaymentProducts: React.FC = () => {
  const [checkoutAmount, setCheckoutAmount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<ICart[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const checkoutAmount = localStorage.getItem("checkoutAmount");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (checkoutAmount && cart) {
      setCheckoutAmount(+checkoutAmount);
      setCartProducts(cart);
    }
  }, []);

  return (
    <div className={styles.cart__main_products}>
      <div className={styles.cart__products_main}>
        <ul className={styles.cart__main_list}>
          {cartProducts.map((cartProduct: ICart, index: number) => (
            <CartPaymentProductsItem cartProduct={cartProduct} key={index} />
          ))}
        </ul>
      </div>
      <div className={styles.cart__products_price}>
        <p className={styles.cart__price_text}>{t("cart.cartAmmount")}</p>
        <span className={styles.cart__price_item}>
          {checkoutAmount} {t("cart.cartCurrency")}
        </span>
      </div>
    </div>
  );
};

export default CartPaymentProducts;
