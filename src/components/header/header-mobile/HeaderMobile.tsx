import React, { useEffect, useState } from "react";
import styles from "../Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../services/products/product.interface";
import { getAllProducts } from "../../../services/products/product";

interface Props {
  cartCount: number;
}

const HeaderMobile: React.FC<Props> = ({ cartCount }) => {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [activeLanguage, setActiveLanguage] = useState("ua");

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
    handleBurgerMenu();
  };

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setSearchResults([]);
      return;
    }

    const isUkrainian = /[а-яА-ЯЁёЇїІіЄєҐґ]/.test(term);

    try {
      const products = await getProducts();

      const results = products.filter((product: IProduct) =>
        isUkrainian
          ? product.name_ua.toLowerCase().includes(term.toLowerCase())
          : product.name_en.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRedirectToProduct = (productId: number) => {
    navigate(`/catalog/orthopedic-insoles/${productId}`);
    setSearchResults([]);
    setIsSearchInputOpen((prevState) => !prevState);
  };

  const handleSearchInput = () => {
    setIsSearchInputOpen((prevState) => !prevState);
    setSearchResults([]);
  };

  const activeHeaderItem = {
    color: "#FFED00",
  };

  const handleBurgerMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <React.Fragment>
      <div className={styles.header__wrapper_mobile}>
        <div className={styles.header__info_actions}>
          <span className={styles.header__actions_search}>
            {isSearchInputOpen && (
              <input
                className={styles.header__search_input}
                type="text"
                onChange={handleSearch}
                placeholder={t("header.headerSearchPlaceholder")}
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
            {searchResults.length > 0 && (
              <div className={styles.header__search_result}>
                <ul className={styles.header__result_list}>
                  {searchResults.map((product: IProduct) => (
                    <li
                      onClick={() => handleRedirectToProduct(product.id)}
                      key={product.id}
                      className={styles.header__result_item}
                    >
                      {activeLanguage === "ua"
                        ? product.name_ua
                        : product.name_en}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </span>
          <span className={styles.header__cart_block}>
            <NavLink
              to={"/home/cart"}
              className={styles.header__actions_basket}
            >
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
            </NavLink>
            {cartCount > 0 && (
              <span className={styles.header__cart_count}>{cartCount}</span>
            )}
          </span>
        </div>
        <div
          onClick={handleBurgerMenu}
          className={`${styles.header__mobile_burger} ${
            isMobileMenuOpen ? `${styles.active}` : ""
          }`}
        >
          <span className={styles.header__burger_bar}></span>
          <span className={styles.header__burger_bar}></span>
          <span className={styles.header__burger_bar}></span>
        </div>
      </div>

      <div
        className={`${styles.header__mobile_menu} ${
          isMobileMenuOpen ? `${styles.active}` : ""
        }`}
      >
        <nav className={styles.header__mobile_nav}>
          <ul className={styles.header__nav_list}>
            <li className={styles.header__list_item}>
              <p
                className={`${styles.header__item_link} ${styles.header__link_about}`}
              >
                {t("header.headerItemLink1")}
              </p>
              <ul
                className={`${styles.header__item_list} ${styles.header__item_about}`}
              >
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/prostopoo/about"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink1Child1")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/prostopoo/contacts"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink1Child2")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/prostopoo/made"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink1Child3")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/prostopoo/warranty-and-exchange"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink1Child4")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/prostopoo/privacy-policy"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink1Child5")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/prostopoo/public-offer-agreement"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink1Child6")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.header__list_item}>
              <p
                className={`${styles.header__item_link} ${styles.header__link_client}`}
              >
                {t("header.headerItemLink2")}
              </p>
              <ul
                className={`${styles.header__item_list} ${styles.header__item_client}`}
              >
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/client/who-need-individual-orthopedic-insoles"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink2Child1")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/client/recommendations"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink2Child2")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.header__list_item}>
              <p
                className={`${styles.header__item_link} ${styles.header__link_order}`}
              >
                {t("header.headerItemLink3")}
              </p>
              <ul
                className={`${styles.header__item_list} ${styles.header__item_order}`}
              >
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/order/how-to-make-a-order"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink3Child1")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/order/payment"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink3Child2")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/order/delivery"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink3Child3")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.header__list_item}>
              <p
                className={`${styles.header__item_link} ${styles.header__link_catalog}`}
              >
                {t("header.headerItemLink4")}
              </p>
              <ul
                className={`${styles.header__item_list} ${styles.header__item_catalog}`}
              >
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/catalog/individual-orthopedic-insoles"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink4Child1")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/catalog/orthopedic-insoles"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink4Child2")}
                  </NavLink>
                </li>
                <li className={styles.header__list_item}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeHeaderItem : undefined
                    }
                    onClick={handleBurgerMenu}
                    to={"/home/catalog/gift-certificate-prostopoo"}
                    className={styles.header__link_item}
                  >
                    {t("header.headerItemLink4Child3")}
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className={styles.header__mobile_info}>
          <div className={styles.header__info_phone}>
            <NavLink
              to={"tel:0800500127"}
              className={styles.header__phone_item}
            >
              0 (800) 500 127
            </NavLink>
          </div>
          <div className={styles.header__info_actions}>
            <div className={styles.header__info_languages}>
              <span
                onClick={() => changeLanguage("ua")}
                className={`${styles.header__languages_item} ${
                  activeLanguage === "ua" ? styles.header__language_active : ""
                }`}
              >
                UA
              </span>
              <span className={styles.header__languages_line}></span>
              <span
                onClick={() => changeLanguage("en")}
                className={`${styles.header__languages_item} ${
                  activeLanguage === "en" ? styles.header__language_active : ""
                }`}
              >
                EN
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderMobile;
