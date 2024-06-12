import React, { useState } from "react";
import styles from "./Header.module.css";
import HeaderMobile from "./header-mobile/HeaderMobile";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);

  const activeHeaderItem = {
    color: "#FFED00",
  };

  const handleSearchInput = () => {
    setIsSearchInputOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <section className={styles.header__section}>
        <div className={styles.header__container}>
          <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper_logo}>
              <NavLink to={"/"}>
                <img
                  src="../../images/logo.png"
                  alt="header logo"
                  className={styles.header__logo_item}
                />
              </NavLink>
            </div>

            <nav className={styles.header__wrapper_nav}>
              <ul className={styles.header__nav_list}>
                <li className={styles.header__list_item}>
                  <p
                    className={`${styles.header__item_link} ${styles.header__link_about}`}
                  >
                    ПРО PROSTOPOO
                  </p>
                  <ul
                    className={`${styles.header__item_list} ${styles.header__item_about}`}
                  >
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/prostopoo/about"}
                        className={styles.header__link_item}
                      >
                        Про нас
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/prostopoo/contacts"}
                        className={styles.header__link_item}
                      >
                        Контакти
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/prostopoo/made"}
                        className={styles.header__link_item}
                      >
                        Виготовлення
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/prostopoo/warranty-and-exchange"}
                        className={styles.header__link_item}
                      >
                        Гарантії та обмін
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/prostopoo/privacy-policy"}
                        className={styles.header__link_item}
                      >
                        Політика конфідеційності
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/prostopoo/public-offer-agreement"}
                        className={styles.header__link_item}
                      >
                        Договір публічної оферти
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className={styles.header__list_item}>
                  <p
                    className={`${styles.header__item_link} ${styles.header__link_client}`}
                  >
                    Клієнтам
                  </p>
                  <ul
                    className={`${styles.header__item_list} ${styles.header__item_client}`}
                  >
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={
                          "/home/client/who-need-individual-orthopedic-insoles"
                        }
                        className={styles.header__link_item}
                      >
                        Кому потрібні індивідуальні ортопедичні устілки
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/client/recommendations"}
                        className={styles.header__link_item}
                      >
                        Рекомендації до застосування
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className={styles.header__list_item}>
                  <p
                    className={`${styles.header__item_link} ${styles.header__link_order}`}
                  >
                    Як замовити
                  </p>
                  <ul
                    className={`${styles.header__item_list} ${styles.header__item_order}`}
                  >
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/order/how-to-make-a-order"}
                        className={styles.header__link_item}
                      >
                        Як зробити замовлення
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/order/payment"}
                        className={styles.header__link_item}
                      >
                        Оплата
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/order/delivery"}
                        className={styles.header__link_item}
                      >
                        Доставка
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className={styles.header__list_item}>
                  <p
                    className={`${styles.header__item_link} ${styles.header__link_catalog}`}
                  >
                    Каталог
                  </p>
                  <ul
                    className={`${styles.header__item_list} ${styles.header__item_catalog}`}
                  >
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/catalog/individual-orthopedic-insoles"}
                        className={styles.header__link_item}
                      >
                        Індивідуальні <br /> ортопедичні устілки
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/catalog/orthopedic-insoles"}
                        className={styles.header__link_item}
                      >
                        Ортопедичні устілки
                      </NavLink>
                    </li>
                    <li className={styles.header__list_item}>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeHeaderItem : undefined
                        }
                        to={"/home/catalog/gift-certificate-prostopoo"}
                        className={styles.header__link_item}
                      >
                        Подарунковий сертифікат
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className={styles.header__wrapper_info}>
              <div className={styles.header__info_phone}>
                <span className={styles.header__phone_item}>
                  0 (800) 500 127
                </span>
              </div>
              <div className={styles.header__info_actions}>
                <span className={styles.header__actions_search}>
                  {isSearchInputOpen && (
                    <input
                      className={styles.header__search_input}
                      type="text"
                      placeholder="Ввести"
                    />
                  )}
                  <svg
                    onClick={handleSearchInput}
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className={styles.header__search_icon}
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6807 20.0385L15.5038 14.5928C16.8349 12.9924 17.5642 10.9788 17.5642 8.88249C17.5642 3.98476 13.6245 0 8.7821 0C3.93973 0 0 3.98476 0 8.88249C0 13.7802 3.93973 17.765 8.7821 17.765C10.6 17.765 12.3324 17.2104 13.8135 16.1576L19.0297 21.6447C19.2477 21.8737 19.5409 22 19.8552 22C20.1526 22 20.4348 21.8853 20.649 21.6768C21.1042 21.2338 21.1187 20.4992 20.6807 20.0385ZM8.7821 2.31717C12.3614 2.31717 15.2732 5.2623 15.2732 8.88249C15.2732 12.5027 12.3614 15.4478 8.7821 15.4478C5.20282 15.4478 2.29098 12.5027 2.29098 8.88249C2.29098 5.2623 5.20282 2.31717 8.7821 2.31717Z"
                      fill="#fff"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className={styles.header__actions_basket}>
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className={styles.header__basket_icon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.896356C0 0.401311 0.406286 0 0.90747 0H2.98037C4.11277 0 5.12692 0.692399 5.52711 1.73875L6.00527 2.98892C6.01973 2.98822 6.03437 2.98787 6.04901 2.98785L20.2725 2.97591C22.2126 2.97428 23.5317 4.92052 22.7909 6.69172L20.4502 12.2884C20.1752 12.946 19.5807 13.4203 18.872 13.5476L11.0275 14.9564C9.73455 15.1886 8.45823 14.4753 7.99378 13.261L3.82928 2.3723C3.69589 2.02351 3.35784 1.79271 2.98037 1.79271H0.90747C0.406286 1.79271 0 1.3914 0 0.896356ZM6.69029 4.78003L9.6916 12.6274C9.84641 13.0322 10.2719 13.27 10.7029 13.1926L18.5473 11.7838C18.6486 11.7656 18.7335 11.6978 18.7728 11.6039L21.1135 6.0072C21.3605 5.41686 20.9208 4.76808 20.274 4.76862L6.69029 4.78003Z"
                      fill="#fff"
                    />
                    <path
                      d="M8 20C9.10457 20 10 19.1046 10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 16.8954 6 18C6 19.1046 6.89543 20 8 20Z"
                      fill="#fff"
                    />
                    <path
                      d="M19 20C20.1046 20 21 19.1046 21 18C21 16.8954 20.1046 16 19 16C17.8954 16 17 16.8954 17 18C17 19.1046 17.8954 20 19 20Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </div>
              <div className={styles.header__info_languages}>
                <span
                  className={`${styles.header__languages_item} ${styles.header__language_active}`}
                >
                  UA
                </span>
                <span className={styles.header__languages_line}></span>
                <span className={styles.header__languages_item}>EN</span>
              </div>
            </div>

            <HeaderMobile />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
