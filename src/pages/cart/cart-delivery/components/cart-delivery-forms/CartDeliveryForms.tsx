import React from "react";
import styles from "./CartDeliveryForms.module.css";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormValues {
  fullName: string;
  phone: string;
  city: string;
  department: string;
  email: string;
  comment: string;
}

const CartDeliveryForms: React.FC = () => {
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
          Поля із <span className={styles.cart__text_primary}>*</span>{" "}
          обов’язкові для заповнення
        </p>
        <div className={styles.cart__main_forms}>
          <div className={styles.cart__forms_block}>
            <p className={styles.cart__forms_title}>Введіть контактні дані</p>
            <div className={styles.cart__form_item}>
              <div className={styles.cart__item_control}>
                <span className={styles.cart__control_star}>*</span>
                <input
                  type="text"
                  className={styles.cart__forms_field}
                  style={errors.fullName ? { border: "1px solid #EB001B" } : {}}
                  placeholder="Прізвище та ім’я"
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
                  placeholder="Електронна пошта"
                  {...register("email", {
                    required: false,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Введіть дійсну електронну пошту",
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
            <p className={styles.cart__forms_title}>Вкажіть адресу доставки</p>
            <div className={styles.cart__form_item}>
              <div className={styles.cart__item_control}>
                <span className={styles.cart__control_star}>*</span>
                <input
                  type="text"
                  className={styles.cart__forms_field}
                  style={errors.city ? { border: "1px solid #EB001B" } : {}}
                  placeholder="Місто"
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
                  placeholder="Відділення / поштомат"
                  {...register("department", {
                    required: true,
                  })}
                />
              </div>
              <textarea
                className={styles.cart__item_textarea}
                placeholder="Коментар до замовлення"
                {...register("comment", { required: false })}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cart__main_footer}>
        <div className={styles.cart__footer_required}>
          <p className={styles.cart__required_text}>
            Поля із <span className={styles.cart__text_primary}>*</span>{" "}
            обов’язкові для заповнення
          </p>
        </div>
        <div className={styles.cart__footer_continue}>
          <div className={styles.cart__continue_block}>
            <p className={styles.cart__continue_text}>Загальна сума: </p>
            <span className={styles.cart__continue_price}>1998 грн</span>
          </div>
          <button className={styles.cart__continue_button} type="submit">
            ПРОДОВЖИТИ
          </button>
        </div>
      </div>
    </form>
  );
};

export default CartDeliveryForms;
