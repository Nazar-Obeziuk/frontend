import React, { useState } from "react";
import styles from "./CartDeliveryForms.module.css";
import { useMask } from "@react-input/mask";

const CartDeliveryForms: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useMask({
    mask: "+38 (0__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.cart__main_forms}>
      <div className={styles.cart__forms_block}>
        <p className={styles.cart__forms_title}>Введіть контактні дані</p>
        <div className={styles.cart__form_item}>
          <div className={styles.cart__item_control}>
            <span className={styles.cart__control_star}>*</span>
            <input
              type="text"
              className={styles.cart__forms_field}
              placeholder="Прізвище та ім’я"
            />
          </div>
          <div className={styles.cart__item_control}>
            <span className={styles.cart__control_star}>*</span>
            <input
              ref={inputRef}
              className={styles.cart__forms_field}
              placeholder="+38 (0__) ___-__-__"
            />
          </div>
          <input
            type="email"
            className={styles.cart__forms_field}
            placeholder="Електронна пошта"
          />
        </div>
      </div>
      <div className={styles.cart__forms_block}>
        <p className={styles.cart__forms_title}>Вкажіть адресу доставки</p>
        <div className={styles.cart__form_item}>
          <div className={styles.cart__item_control}>
            {inputValue === "" && (
              <span className={styles.cart__control_star}>*</span>
            )}
            <input
              type="text"
              className={styles.cart__forms_field}
              placeholder="Місто"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.cart__item_control}>
            <span className={styles.cart__control_star}>*</span>
            <input
              type="text"
              className={styles.cart__forms_field}
              placeholder="Відділення / поштомат"
            />
          </div>
          <textarea
            className={styles.cart__item_textarea}
            placeholder="Коментар до замовлення"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CartDeliveryForms;
