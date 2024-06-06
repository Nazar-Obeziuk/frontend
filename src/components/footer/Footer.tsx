import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__section}>
        <div className={styles.footer__container}>
          <div className={styles.footer__wrapper}>
            <div className={styles.footer__wrapper_info}>
              <div className={styles.footer__info_logo}>
                <NavLink to={"/"}>
                  <img
                    src="../../images/logo.png"
                    alt="footer logo"
                    className={styles.footer__logo_item}
                  />
                </NavLink>
              </div>
              <div className={styles.footer__info_socials}>
                <span className={styles.footer__socials_item}>
                  <img
                    src="../../images/telegram.svg"
                    alt="telegram icon"
                    className={styles.footer__socials_icon}
                  />
                </span>
                <span className={styles.footer__socials_item}>
                  <img
                    src="../../images/viber.svg"
                    alt="viber icon"
                    className="footer__socials_icon"
                  />
                </span>
                <span className={styles.footer__socials_item}>
                  <img
                    src="../../images/tiktok.svg"
                    alt="tiktok icon"
                    className={styles.footer__socials_icon}
                  />
                </span>
                <span className={styles.footer__socials_item}>
                  <img
                    src="../../images/instagram.svg"
                    alt="instagram icon"
                    className={styles.footer__socials_icon}
                  />
                </span>
              </div>
              <div className={styles.footer__info_work}>
                <p className={styles.footer__work_text}>
                  Графік роботи call-центру: <br />
                  <span className={styles.footer__work_primary}>
                    8:00 - 20:00 пн-нд
                  </span>
                </p>
              </div>
              <div className={styles.footer__info_payment}>
                <span className={styles.footer__payment_item}>
                  <img
                    src="../../images/payment-visa.svg"
                    alt="visa payment"
                    className={styles.footer__payment_icon}
                  />
                </span>
                <span className={styles.footer__payment_item}>
                  <img
                    src="../../images/payment-mastercard.svg"
                    alt="mastercard payment"
                    className={styles.footer__payment_icon}
                  />
                </span>
              </div>
            </div>
            <div className={styles.footer__menu_item}>
              <p className={styles.footer__menu_title}>ПРО PROSTOPOO</p>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo"}
                    className={styles.footer__link_item}
                  >
                    Про нас
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/contacts"}
                    className={styles.footer__link_item}
                  >
                    Контакти
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/made"}
                    className={styles.footer__link_item}
                  >
                    Виготовлення
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/warranty-and-exchange"}
                    className={styles.footer__link_item}
                  >
                    Гарантії та обмін
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/privacy-policy"}
                    className={styles.footer__link_item}
                  >
                    Політика конфідеційності
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/public-offer-agreement"}
                    className={styles.footer__link_item}
                  >
                    Договір публічної оферти
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.footer__menu_item}>
              <p className={styles.footer__menu_title}>Клієнтам</p>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/catalog/individual-orthopedic-insoles"}
                    className={styles.footer__link_item}
                  >
                    Індивідуальні ортопедичні устілки
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/catalog/orthopedic-insoles"}
                    className={styles.footer__link_item}
                  >
                    Ортопедичні устілки
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/catalog/gift-certificate-prostopoo"}
                    className={styles.footer__link_item}
                  >
                    Подарунковий сертифікат
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/client/who-need-individual-orthopedic-insoles"}
                    className={styles.footer__link_item}
                  >
                    Кому потрібні індивідуальні <br /> ортопедичні устілки
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/client/recommendations"}
                    className={styles.footer__link_item}
                  >
                    Рекомендації до застосування
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.footer__menu_item}>
              <p className={styles.footer__menu_title}>Як замовити</p>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/order/how-to-make-a-order"}
                    className={styles.footer__link_item}
                  >
                    Як зробити <br /> замовлення
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/order/payment"}
                    className={styles.footer__link_item}
                  >
                    Оплата
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/order/delivery"}
                    className={styles.footer__link_item}
                  >
                    Доставка
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
