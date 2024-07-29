import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
                <NavLink
                  to={"https://t.me/Prostopoo_ua"}
                  target="_blank"
                  className={styles.footer__socials_item}
                >
                  <img
                    src="../../images/telegram.svg"
                    alt="telegram icon"
                    className={styles.footer__socials_icon}
                  />
                </NavLink>
                <NavLink
                  to={
                    "https://invite.viber.com/?g2=AQA2L7uJaplQiFM88BlbNcvdtXVVIYiksKCypmVP66yKz%2FhkCnLr0koTARICgOxP"
                  }
                  target="_blank"
                  className={styles.footer__socials_item}
                >
                  <img
                    src="../../images/viber.svg"
                    alt="viber icon"
                    className="footer__socials_icon"
                  />
                </NavLink>
                <NavLink
                  to={"https://www.tiktok.com/@prostopoo.com.ua?_t=8oLnM81yrrh"}
                  target="_blank"
                  className={styles.footer__socials_item}
                >
                  <img
                    src="../../images/tiktok.svg"
                    alt="tiktok icon"
                    className={styles.footer__socials_icon}
                  />
                </NavLink>
                <NavLink
                  to={
                    "https://www.instagram.com/prostopoo?igsh=MWp5NW90dG9sMWZ2Nw=="
                  }
                  target="_blank"
                  className={styles.footer__socials_item}
                >
                  <img
                    src="../../images/instagram.svg"
                    alt="instagram icon"
                    className={styles.footer__socials_icon}
                  />
                </NavLink>
              </div>
              <div className={styles.footer__info_work}>
                <p className={styles.footer__work_text}>
                  {t("footer.footerWorkScheduleKey")} <br />
                  <span className={styles.footer__work_primary}>
                    {t("footer.footerWorkScheduleValue")}
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
              <p className={styles.footer__menu_title}>
                {t("footer.footerItemLink1Title")}
              </p>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/about"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink1Text1")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/contacts"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink1Text2")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/made"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink1Text3")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/warranty-and-exchange"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink1Text4")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/privacy-policy"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink1Text5")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/prostopoo/public-offer-agreement"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink1Text6")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.footer__menu_item}>
              <p className={styles.footer__menu_title}>
                {t("footer.footerItemLink2Title")}
              </p>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/catalog/individual-orthopedic-insoles"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink2Text1Child1")}
                    <br />
                    {t("footer.footerItemLink2Text1Child2")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/catalog/orthopedic-insoles"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink2Text2")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/catalog/gift-certificate-prostopoo"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink2Text3")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/client/who-need-individual-orthopedic-insoles"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink2Text4Child1")}
                    <br />
                    {t("footer.footerItemLink2Text4Child2")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/client/recommendations"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink2Text5")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.footer__menu_item}>
              <p className={styles.footer__menu_title}>
                {t("footer.footerItemLink3Title")}
              </p>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/order/how-to-make-a-order"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink3Text1Child1")}
                    <br />
                    {t("footer.footerItemLink3Text1Child2")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/order/payment"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink3Text2")}
                  </NavLink>
                </li>
                <li className={styles.footer__list_item}>
                  <NavLink
                    to={"/home/order/delivery"}
                    className={styles.footer__link_item}
                  >
                    {t("footer.footerItemLink3Text3")}
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
