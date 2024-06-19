import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./CartDelivery.module.css";
import CartDeliveryForms from "./components/cart-delivery-forms/CartDeliveryForms";

const CartDelivery: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<any>(null);

  const handleCartNextStep = (data: any) => {
    console.log(data);
    navigate("/home/cart/payment");
  };

  const handleContinueClick = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  return (
    <section className={styles.cart__section}>
      <div className={styles.container}>
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__made_route}>
            <NavLink to={"/"}>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                className={styles.cart__router_icon}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9412 9.69951C15.61 9.92767 15.2538 9.98393 14.8538 9.96518C14.8507 11.6123 14.8663 13.2251 14.8444 14.866C14.8288 15.7411 14.0819 16.4756 13.207 16.4912C12.332 16.5069 11.454 16.4975 10.5759 16.4944C10.2946 16.4944 10.1071 16.2912 10.1071 15.9911C10.104 15.2504 10.1071 14.5097 10.104 13.7689C10.104 13.2813 10.104 12.7906 10.104 12.3031C10.1009 11.7998 9.78529 11.4779 9.27594 11.4717C8.79783 11.4654 8.31973 11.4654 7.84163 11.4717C7.34478 11.4779 7.02605 11.803 7.02605 12.2999C7.02292 13.5095 7.02292 14.7159 7.02292 15.9255C7.02292 16.3287 6.85418 16.4975 6.44795 16.4975C5.65424 16.4975 4.86053 16.4975 4.06682 16.4975C3.02 16.4944 2.27629 15.763 2.27004 14.7128C2.26379 13.1313 2.26691 11.5467 2.26691 9.96518C0.816983 10.1027 -0.0267248 8.47119 1.01072 7.41789C3.15437 5.2738 5.29801 3.1297 7.44478 0.988734C7.57915 0.848087 7.73539 0.732443 7.90725 0.638678C8.40723 0.388638 9.18532 0.466776 9.66029 0.954354C10.8634 2.18893 12.0914 3.3985 13.3101 4.61744C14.2444 5.55509 15.1725 6.49899 16.1225 7.42414C16.7474 8.03362 16.6881 9.20255 15.9412 9.69951Z"
                  stroke="white"
                  strokeOpacity="0.8"
                />
              </svg>
            </NavLink>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.cart__router_arrow}
            />
            <NavLink to={"/home/cart"} className={styles.cart__router_name}>
              Корзина
            </NavLink>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.cart__router_arrow}
            />
            <p
              className={`${styles.cart__router_name} ${styles.cart__router_active}`}
            >
              Контактні дані та адреса доставки
            </p>
          </div>
          <div className={styles.cart__wrapper_inner}>
            <div className={styles.cart__inner_block}>
              <span className={styles.cart__block_circle}>
                <img
                  src="../../images/cart-icon.svg"
                  alt="cart icon"
                  className={styles.cart__circle_icon}
                />
              </span>
              <p className={styles.cart__block_text}>Корзина</p>
            </div>
            <div className={styles.cart__inner_line}></div>
            <div
              className={`${styles.cart__inner_block} ${styles.cart__block_active}`}
            >
              <span className={styles.cart__block_circle}>
                <img
                  src="../../images/map-icon.svg"
                  alt="cart icon"
                  className={styles.cart__circle_icon}
                />
              </span>
              <p className={styles.cart__block_text}>
                Контактні дані та адреса доставки
              </p>
            </div>
            <div className={styles.cart__inner_line}></div>
            <div className={styles.cart__inner_block}>
              <span className={styles.cart__block_circle}>
                <img
                  src="../../images/payment-icon.svg"
                  alt="cart icon"
                  className={styles.cart__circle_icon}
                />
              </span>
              <p className={styles.cart__block_text}>Вибір способу оплати</p>
            </div>
          </div>
          <div className={styles.cart__wrapper_main}>
            <div className={styles.cart__main_data}>
              <p className={styles.cart__data_text}>
                Поля із <span className={styles.cart__text_primary}>*</span>{" "}
                обов’язкові для заповнення
              </p>
              <CartDeliveryForms
                ref={formRef}
                onSubmitFormsData={handleCartNextStep}
              />
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
                <button
                  onClick={handleContinueClick}
                  className={styles.cart__continue_button}
                  type="button"
                >
                  ПРОДОВЖИТИ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDelivery;
