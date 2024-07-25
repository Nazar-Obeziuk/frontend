import React, { useState } from "react";
import styles from "./CartPaymentWay.module.css";
import { useTranslation } from "react-i18next";

const CartPaymentWay: React.FC = () => {
  const { t } = useTranslation();
  const [activePaymentWay, setActivePaymentWay] = useState<
    "privat" | "apple-pay" | "mono-pay" | "iban" | ""
  >("");

  return (
    <div className={styles.cart__main_way}>
      <div className={styles.cart__way_block}>
        <div className={styles.cart__block_payments}>
          <p className={styles.cart__payments_title}>
            {t("cart.cartStep3Text1")}
          </p>
          <div className={styles.cart__payments_banks}>
            <div
              onClick={() => setActivePaymentWay("privat")}
              className={`${styles.cart__banks_item} ${
                activePaymentWay === "privat" ? styles.active : ""
              }`}
            >
              <img
                src="../../images/privat-24-icon.svg"
                alt="privat24 icon"
                className={styles.cart__item_icon}
              />
            </div>
            <div
              onClick={() => setActivePaymentWay("apple-pay")}
              className={`${styles.cart__banks_item} ${
                activePaymentWay === "apple-pay" ? styles.active : ""
              }`}
            >
              <img
                src="../../images/apple-pay-icon.svg"
                alt="apple pay icon"
                className={styles.cart__item_icon}
              />
            </div>
            <div
              onClick={() => setActivePaymentWay("mono-pay")}
              className={`${styles.cart__banks_item} ${
                activePaymentWay === "mono-pay" ? styles.active : ""
              }`}
            >
              <img
                src="../../images/mono-pay-icon.svg"
                alt="mono pay icon"
                className={styles.cart__item_icon}
              />
            </div>
            <div
              onClick={() => setActivePaymentWay("iban")}
              className={`${styles.cart__banks_item} ${
                activePaymentWay === "iban" ? styles.active : ""
              }`}
            >
              <img
                src="../../images/iban-pay-icon.svg"
                alt="iban icon"
                className={styles.cart__item_icon}
              />
            </div>
          </div>
        </div>
        {activePaymentWay === "iban" && (
          <div className={styles.cart__block_info}>
            <p className={styles.cart__info_title}>
              {t("cart.cartStep3Text3Title")}
            </p>
            <p className={styles.cart__info_text}>
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text3Child1")}
              </span>
              {t("cart.cartStep3Text3Child2")} <br />
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text4Child1")}
              </span>
              {t("cart.cartStep3Text4Child2")} <br />
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text5Child1")}
              </span>
              {t("cart.cartStep3Text5Child2")} <br />
              {t("cart.cartStep3Text6")} <br />
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text7")} <br />
                {t("cart.cartStep3Text8")} <br />
                {t("cart.cartStep3Text9")}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className={styles.cart__way_pib}>
        <p className={styles.cart__pib_text}>{t("cart.cartStep3Text2")}</p>
      </div>
    </div>
  );
};

export default CartPaymentWay;
