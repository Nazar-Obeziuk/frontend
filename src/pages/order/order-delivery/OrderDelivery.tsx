import React from "react";
import styles from "./OrderDelivery.module.css";

const OrderDelivery: React.FC = () => {
  return (
    <section className={styles.order__delivery_section}>
      <div className={styles.container}>
        <div className={styles.order__delivery_wrapper}>
          <div className={styles.order__delivery_route}>
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
              Доставка
            </p>
          </div>
          <div className={styles.order__delivery_main}>
            <h2 className={styles.order__main_title}>Доставка</h2>
          </div>
          <div className={styles.order__delivery_main}>
            <img
              src="../../images/nova-poshta-icon.svg"
              alt="nova poshta icon"
              className={styles.order__main_poshta}
            />
            <div className={styles.order__main_nova}>
              <h2 className={styles.order__nova_title}>
                До відділення «Нова пошта»
              </h2>
              <p className={styles.order__main_text}>
                Доставка Новою Поштою в межах України{" "}
                <span className={styles.order__text_bold}>БЕЗКОШТОВНА.</span>{" "}
                <br /> Адресну доставку замовлень здійснюємо за додаткову плату
                (кур’єрські послуги за тарифами Нової Пошти сплачує замовник).
              </p>
              <p className={styles.order__main_text}>
                Терміни доставки до відділення «Нова пошта» 2 - 3 дні після
                підтвердження замовлення.
              </p>
              <p className={styles.order__main_text}>
                Після відправки замовлення ви отримаєте SMS-повідомлення з
                номером експрес-накладної. Уточнити дату отримання вашого
                замовлення ви можете на{" "}
                <span className={styles.order__text_link}>
                  сайті компанії «Нова пошта»
                </span>{" "}
                або в особистому додатку.
              </p>
            </div>
            <div className={styles.order__main_line}></div>
            <div className={styles.order__main_global}>
              <img
                src="../../images/nova-global-icon.svg"
                alt="nova global icon"
                className={styles.order__global_icon}
              />
              <h2 className={styles.order__nova_title}>Міжнародна доставка</h2>
              <p className={styles.order__main_text}>
                Міжнародну доставку здійснюємо за допомогою оператора Нова
                Глобал. Вартість доставки за{" "}
                <span className={styles.order__text_link}>
                  тарифами перевізника
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDelivery;
