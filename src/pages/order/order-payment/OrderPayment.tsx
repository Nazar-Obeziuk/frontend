import React from "react";
import styles from "./OrderPayment.module.css";

const OrderPayment: React.FC = () => {
  return (
    <section className={styles.order__payment_section}>
      <div className={styles.container}>
        <div className={styles.order__payment_wrapper}>
          <div className={styles.order__payment_route}>
            <img
              src="../../images/home-icon.svg"
              alt="home icon"
              className={styles.order__router_icon}
            />
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.order__router_arrow}
            />
            <p className={styles.order__router_name}>Як замовити</p>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.order__router_arrow}
            />
            <p
              className={`${styles.order__router_name} ${styles.order__router_active}`}
            >
              Оплата
            </p>
          </div>
          <div className={styles.order__payment_main}>
            <h2 className={styles.order__main_title}>Оплата</h2>
          </div>
          <div className={styles.order__payment_main}>
            <div className={styles.order__main_block}>
              <img
                src="../../images/order-payment-lock-icon.svg"
                alt="payment banner"
                className={styles.order__block_image}
              />
              <div className={styles.order__block_info}>
                <h3 className={styles.order__info_title}>
                  Онлайн-оплата{" "}
                  <span className={styles.order__title_link}>ТУТ</span>
                </h3>
                <p className={styles.order__main_text}>
                  Під час оформлення замовлення з будь-якого міста України ви
                  можете оплатити через:
                </p>
                <div className={styles.order__main_payments}>
                  <img
                    src="../../images/order-p-24-icon.svg"
                    alt="payment icon"
                    className={styles.order__payments_icon}
                  />
                  <img
                    src="../../images/order-apple-pay-icon.svg"
                    alt="payment icon"
                    className={styles.order__payments_icon}
                  />
                  <img
                    src="../../images/order-mono-pay-icon.svg"
                    alt="payment icon"
                    className={styles.order__payments_icon}
                  />
                </div>
                <p className={styles.order__main_text}>
                  Квитанцію з нашими реквізитами можна роздрукувати після
                  оформлення замовлення на сайті.
                </p>
              </div>
            </div>
            <div
              className={`${styles.order__main_block} ${styles.order__second_block}`}
            >
              <img
                src="../../images/order-payment-iban-icon.svg"
                alt="payment banner"
                className={styles.order__block_image}
              />
              <div className={styles.order__block_info}>
                <h3 className={styles.order__info_title}>
                  Оплата за реквізитами
                </h3>
                <p className={styles.order__main_text}>
                  ПАТ КБ «ПРИВАТБАНК», м. Київ, Україна <br /> ФОП Стадольська
                  Лілія Іванівна <br /> Код ЄДРПОУ 2826212066 <br /> Дата
                  реєстрації: 29.07.2017 <br />
                  №20520000000002678
                </p>
                <p className={styles.order__main_text}>
                  У призначенні платежу необхідно вказати ПІБ та номер телефону.
                </p>
              </div>
            </div>
            <div className={styles.order__main_info}>
              <p className={styles.order__main_text}>
                Після відправлення товару ви отримаєте номер експрес-накладної
                вашого замовлення. Під час отримання товару у відділенні
                необхідно показати свій паспорт або інший документ, що посвідчує
                особу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPayment;
