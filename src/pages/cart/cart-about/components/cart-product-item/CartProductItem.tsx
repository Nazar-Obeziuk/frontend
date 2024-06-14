import React, { useState } from "react";
import styles from "./CartProductItem.module.css";

const CartProductItem: React.FC = () => {
  const [countOfCertificate, setCountOfCertificate] = useState<number>(1);

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
      <div className={styles.cart__item_main}>
        <div className={styles.cart__main_info}>
          <h2 className={styles.cart__info_title}>
            Індивідуальні ортопедичні устілки
          </h2>
          <p className={styles.cart__info_description}>
            TERMY-TEX, перфарована, бежева
          </p>
        </div>
        <div className={styles.cart__main_actions}>
          <div className={styles.cart__inner_count}>
            <span
              onClick={() => handleCountOfCertificate("decrement")}
              className={styles.cart__count_circle}
            >
              <img
                src="../../images/minus-icon.svg"
                alt="certificate action icon"
                className={styles.cart__circle_icon}
              />
            </span>
            <p className={styles.cart__count_text}>{countOfCertificate}</p>
            <span
              onClick={() => handleCountOfCertificate("increment")}
              className={styles.cart__count_circle}
            >
              <img
                src="../../images/plus-icon.svg"
                alt="certificate action icon"
                className={styles.cart__circle_icon}
              />
            </span>
          </div>
          <div className={styles.cart__item_price}>
            <span className={styles.cart__price_text}>1499 грн</span>
          </div>
        </div>
        <div className={styles.cart__item_close}>
          <img
            src="../../images/cart-close-icon.svg"
            alt="cart close icon"
            className={styles.cart__close_icon}
          />
        </div>
      </div>
    </li>
  );
};

export default CartProductItem;
