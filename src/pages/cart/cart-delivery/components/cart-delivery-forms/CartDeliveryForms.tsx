import React, { useState } from "react";
import styles from "./CartDeliveryForms.module.css";
import { InputMask, useMask } from "@react-input/mask";
import { useForm } from "react-hook-form";

interface Props {
  onSubmitFormsData: () => void;
}

interface FormValues {
  fullName: string;
  phone: string;
  city: string;
  department: string;
}

const CartDeliveryForms: React.FC<Props> = ({ onSubmitFormsData }) => {
  const [inputValue, setInputValue] = useState("");
  // const inputRef = useMask({
  //   mask: "+38 (0__) ___-__-__",
  //   replacement: { _: /\d/ },
  // });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // const onSubmitFormsData = () => {}

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
              {...register("fullName", { required: "Це поле обов'язкове" })}
            />
          </div>
          <div className={styles.cart__item_control}>
            <span className={styles.cart__control_star}>*</span>
            <InputMask
              mask="+38 (0__) ___-__-__"
              replacement="{ _: /\d/ }"
              className={styles.cart__forms_field}
              placeholder="+38 (0__) ___-__-__"
              {...register("phone", { required: "Це поле обов'язкове" })}
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
              {...register("department", { required: "Це поле обов'язкове" })}
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
