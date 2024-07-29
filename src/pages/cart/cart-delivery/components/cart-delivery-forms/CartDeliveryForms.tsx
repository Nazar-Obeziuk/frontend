import React, { useEffect, useState } from "react";
import styles from "./CartDeliveryForms.module.css";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sendMessage } from "../../../../../api/telegram";
import { ICart } from "../../../../../services/cart/cart.interface";

interface FormValues {
  fullName: string;
  phone: string;
  city: string;
  department: string;
  email: string;
  comment: string;
}

const CartDeliveryForms: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [checkoutAmount, setCheckoutAmount] = useState<number>(0);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = async ({
    fullName,
    phone,
    email,
    city,
    department,
    comment,
  }: FormValues): Promise<void> => {
    try {
      const checkoutAmount = localStorage.getItem("checkoutAmount");
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      if (checkoutAmount && cart) {
        const itemsDetails = cart
          .map(
            (item: ICart) =>
              `Назва товару - ${item.name_ua}, Опис товару - ${item.sizeDescription_ua}, Ціна товару - ${item.price}, Кількість - ${item.quantity}`
          )
          .join("\n");

        const message = `
          Прізвище та ім'я: ${fullName}
          Телефон: ${phone}
          Електронна пошта: ${email}
          Місто: ${city}
          Відділення/поштомат: ${department}
          Коментар до замовлення: ${comment}
          Товари: ${itemsDetails}
          Сума замовлення: ${checkoutAmount}
        `;

        await sendMessage(message);
      }

      navigate("/home/cart/payment");
      reset();
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    const checkoutAmount = localStorage.getItem("checkoutAmount");

    if (checkoutAmount) {
      setCheckoutAmount(+checkoutAmount);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.cart__wrapper_main}
    >
      <div className={styles.cart__main_data}>
        <p className={styles.cart__data_text}>
          {t("cart.cartStep2Text1Child1")}
          <span className={styles.cart__text_primary}>
            {t("cart.cartStep2Text1Child2")}
          </span>
          {t("cart.cartStep2Text1Child3")}
        </p>
        <div className={styles.cart__main_forms}>
          <div className={styles.cart__forms_block}>
            <p className={styles.cart__forms_title}>
              {t("cart.cartStep2Block1Text1")}
            </p>
            <div className={styles.cart__form_item}>
              <div className={styles.cart__item_control}>
                <span className={styles.cart__control_star}>*</span>
                <input
                  type="text"
                  className={styles.cart__forms_field}
                  style={errors.fullName ? { border: "1px solid #EB001B" } : {}}
                  placeholder={t("cart.cartStep2Block1Text2")}
                  {...register("fullName", {
                    required: true,
                  })}
                />
              </div>
              <div className={styles.cart__item_control}>
                <span className={styles.cart__control_star}>*</span>
                <InputMask
                  mask="+38 (0__) ___-__-__"
                  replacement={{ _: /\d/ }}
                  className={styles.cart__forms_field}
                  style={errors.phone ? { border: "1px solid #EB001B" } : {}}
                  placeholder="+38 (0__) ___-__-__"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className={styles.cart__forms_control}>
                <input
                  type="email"
                  className={`${styles.cart__forms_field} ${
                    errors.email ? styles.form__field_error : ""
                  }`}
                  placeholder={t("cart.cartStep2Block1Text3")}
                  {...register("email", {
                    required: false,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("cart.cartStep2Block1EmailText"),
                    },
                  })}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.cart__forms_block}>
            <p className={styles.cart__forms_title}>
              {t("cart.cartStep2Block2Text1")}
            </p>
            <div className={styles.cart__form_item}>
              <div className={styles.cart__item_control}>
                <span className={styles.cart__control_star}>*</span>
                <input
                  type="text"
                  className={styles.cart__forms_field}
                  style={errors.city ? { border: "1px solid #EB001B" } : {}}
                  placeholder={t("cart.cartStep2Block2Text2")}
                  {...register("city", { required: true })}
                />
              </div>
              <div className={styles.cart__item_control}>
                <span className={styles.cart__control_star}>*</span>
                <input
                  type="text"
                  className={styles.cart__forms_field}
                  style={
                    errors.department ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder={t("cart.cartStep2Block2Text3")}
                  {...register("department", {
                    required: true,
                  })}
                />
              </div>
              <textarea
                className={styles.cart__item_textarea}
                placeholder={t("cart.cartStep2Block2Text4")}
                {...register("comment", { required: false })}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cart__main_footer}>
        <div className={styles.cart__footer_required}>
          <p className={styles.cart__required_text}>
            {t("cart.cartStep2Text1Child1")}
            <span className={styles.cart__text_primary}>
              {t("cart.cartStep2Text1Child2")}
            </span>
            {t("cart.cartStep2Text1Child3")}
          </p>
        </div>
        <div className={styles.cart__footer_continue}>
          <div className={styles.cart__continue_block}>
            <p className={styles.cart__continue_text}>
              {t("cart.cartAmmount")}
            </p>
            <span className={styles.cart__continue_price}>
              {checkoutAmount} {t("cart.cartCurrency")}
            </span>
          </div>
          <div className={styles.cart__continue_actions}>
            <button className={styles.cart__continue_button} type="submit">
              {t("cart.cartButtonText")}
            </button>
            {isError && (
              <span className={styles.cart__actions_error}>
                {t("cart.cartErrorText")}
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartDeliveryForms;
