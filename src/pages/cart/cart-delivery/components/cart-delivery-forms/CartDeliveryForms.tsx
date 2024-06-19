import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./CartDeliveryForms.module.css";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";

interface Props {
  onSubmitFormsData: (data: FormValues) => void;
}

interface FormRef {
  submitForm: () => void;
}

interface FormValues {
  fullName: string;
  phone: string;
  city: string;
  department: string;
  email: string;
  comment: string;
}

const CartDeliveryForms = forwardRef<FormRef, Props>(
  ({ onSubmitFormsData }, ref) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
      onSubmitFormsData(data);
      reset();
    };

    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(onSubmit)(),
    }));

    return (
      <div className={styles.cart__main_forms}>
        <div className={styles.cart__forms_block}>
          <p className={styles.cart__forms_title}>Введіть контактні дані</p>
          <div className={styles.cart__form_item}>
            <div className={styles.cart__item_control}>
              <span className={styles.cart__control_star}>*</span>
              <input
                type="text"
                className={`${styles.cart__forms_field} ${
                  errors.fullName ? styles.form__field_error : ""
                }`}
                placeholder="Прізвище та ім’я"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className={styles.error}>{errors.fullName.message}</span>
              )}
            </div>
            <div className={styles.cart__item_control}>
              <span className={styles.cart__control_star}>*</span>
              <InputMask
                mask="+38 (0__) ___-__-__"
                replacement={{ _: /\d/ }}
                className={`${styles.cart__forms_field} ${
                  errors.phone ? styles.form__field_error : ""
                }`}
                placeholder="+38 (0__) ___-__-__"
                {...register("phone", { required: true })}
              />
              {/* {errors.phone && (
                <span className={styles.error}>{errors.phone.message}</span>
              )} */}
            </div>
            <input
              type="email"
              className={`${styles.cart__forms_field} ${
                errors.email ? styles.form__field_error : ""
              }`}
              placeholder="Електронна пошта"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введіть дійсну електронну пошту",
                },
              })}
            />
            {/* {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )} */}
          </div>
        </div>
        <div className={styles.cart__forms_block}>
          <p className={styles.cart__forms_title}>Вкажіть адресу доставки</p>
          <div className={styles.cart__form_item}>
            <div className={styles.cart__item_control}>
              <span className={styles.cart__control_star}>*</span>
              <input
                type="text"
                className={`${styles.cart__forms_field} ${
                  errors.city ? "form__field_error" : ""
                }`}
                placeholder="Місто"
                {...register("city", { required: true })}
              />
            </div>
            <div className={styles.cart__item_control}>
              <span className={styles.cart__control_star}>*</span>
              <input
                type="text"
                className={`${styles.cart__forms_field} ${
                  errors.department ? "form__field_error" : ""
                }`}
                placeholder="Відділення / поштомат"
                {...register("department", { required: true })}
              />
            </div>
            <textarea
              className={styles.cart__item_textarea}
              placeholder="Коментар до замовлення"
              {...register("comment")}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
);

export default CartDeliveryForms;
