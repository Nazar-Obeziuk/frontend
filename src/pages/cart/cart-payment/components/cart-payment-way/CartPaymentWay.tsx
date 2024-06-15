import React, { useState } from "react";
import styles from "./CartPaymentWay.module.css";

const CartPaymentWay: React.FC = () => {
  const [activePaymentWay, setActivePaymentWay] = useState<
    "privat" | "apple-pay" | "mono-pay" | "iban" | ""
  >("");

  return (
    <div className={styles.cart__main_way}>
      <div className={styles.cart__way_block}>
        <div className={styles.cart__block_payments}>
          <p className={styles.cart__payments_title}>Виберіть спосіб оплати</p>
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
            <p className={styles.cart__info_title}>Реквізити:</p>
            <p className={styles.cart__info_text}>
              <span className={styles.cart__text_gray}>ФОП</span> Стадольська
              Лілія Іванівна <br />
              Код ЄДРПОУ 2826212066 <br />
              <span className={styles.cart__text_gray}>
                Дата реєстрації:
              </span>{" "}
              29.07.2017 №20520000000002678 <br />
              <span className={styles.cart__text_gray}>
                03045, Україна, м. Київ, <br /> вул. Набережно-Корчуватська, 14{" "}
                <br /> (метро Видубичі)
              </span>
            </p>
          </div>
        )}
      </div>
      <div className={styles.cart__way_pib}>
        <p className={styles.cart__pib_text}>
          При здійсненні оплати необхідно вказати в коментарях свої ПІБ
        </p>
      </div>
    </div>
  );
};

export default CartPaymentWay;
