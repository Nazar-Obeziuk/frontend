import React from "react";
import styles from "./CartDeliveryForms.module.css";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface FormValues {
  fullName: string;
  phone: string;
  city: string;
  department: string;
  email: string;
  comment: string;
}

const CartDeliveryForms: React.FC = () => {
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate("/home/cart/payment");
    reset();
  };

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
              1998 {t("cart.cartCurrency")}
            </span>
          </div>
          <button className={styles.cart__continue_button} type="submit">
            {t("cart.cartButtonText")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CartDeliveryForms;
