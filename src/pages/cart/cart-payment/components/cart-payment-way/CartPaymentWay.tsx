import React, { useEffect, useState } from "react";
import styles from "./CartPaymentWay.module.css";
import { useTranslation } from "react-i18next";
import { IFop } from "../../../../../services/fop/fop.interface";
import { getAllFops } from "../../../../../services/fop/fop";
import Loader from "../../../../../components/loader/Loader";
import {
  getPaymentLinkMono,
  getPaymentLinkPrivat,
} from "../../../../../services/payment/payment";
import { ICart } from "../../../../../services/cart/cart.interface";

const CartPaymentWay: React.FC = () => {
  const [activePaymentWay, setActivePaymentWay] = useState<
    "privat" | "mono-pay" | "iban" | ""
  >("");
  const { t, i18n } = useTranslation();
  const [cartFops, setCartFops] = useState<IFop[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string>("uk");

  const getFops = async () => {
    try {
      const response = await getAllFops(i18n.language);
      if (Array.isArray(response)) {
        setCartFops(response);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching FOPs data:", error);
    }
  };

  const paymentPrivat = async () => {
    const amount = localStorage.getItem("checkoutAmount");
    const products = JSON.parse(localStorage.getItem("cart") || "[]");
    let description = "";

    if (amount) {
      try {
        const formData = new FormData();

        products.forEach((product: ICart) => {
          if (i18n.language === "ua") {
            description += product.name_ua + " = " + product.price + "грн + ";
          } else {
            description += product.name_en + " = " + product.price + "UAH + ";
          }
        });

        formData.append("amount", amount);
        formData.append("language", activeLanguage);
        formData.append("description", description.slice(0, -2));

        const response = await getPaymentLinkPrivat(formData);

        window.open(response.link);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const paymentMono = async () => {
    const amount = localStorage.getItem("checkoutAmount");

    if (amount) {
      try {
        const formData = new FormData();

        formData.append("amount", amount);

        if (i18n.language === "ua") {
          formData.append("ccy", "980");
        } else {
          formData.append("ccy", "840");
        }

        formData.append("webHookUrl", "");
        formData.append("redirectUrl", "https://prostopoo.com.ua");

        const response = await getPaymentLinkMono(formData);

        window.open(response.payment.pageUrl);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getFops();

    if (i18n.language === "ua") {
      setActiveLanguage("uk");
    } else {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  if (!cartFops) {
    return <Loader />;
  }

  return (
    <div className={styles.cart__main_way}>
      <div className={styles.cart__way_block}>
        <div className={styles.cart__block_payments}>
          <p className={styles.cart__payments_title}>
            {t("cart.cartStep3Text1")}
          </p>
          <div className={styles.cart__payments_banks}>
            <div
              onClick={() => {
                setActivePaymentWay("privat");
                paymentPrivat();
              }}
              className={`${styles.cart__banks_item} ${
                activePaymentWay === "privat" ? styles.active : ""
              }`}
            >
              <img
                src="../../images/privat-24-icon.svg"
                alt="privat24 icon"
                className={styles.cart__item_icon}
              />
            </div>
            <div
              onClick={() => {
                setActivePaymentWay("mono-pay");
                paymentMono();
              }}
              className={`${styles.cart__banks_item} ${
                activePaymentWay === "mono-pay" ? styles.active : ""
              }`}
            >
              <img
                src="../../images/mono-pay-icon.svg"
                alt="mono pay icon"
                className={styles.cart__item_icon}
              />
            </div>
            <div
              onClick={() => setActivePaymentWay("iban")}
              className={`${styles.cart__banks_item} ${
                styles.cart__banks_iban
              } ${activePaymentWay === "iban" ? styles.active : ""}`}
            >
              <img
                src="../../images/iban-pay-icon.svg"
                alt="iban icon"
                className={styles.cart__item_icon}
              />
            </div>
          </div>
        </div>
        {activePaymentWay === "iban" && (
          <div className={styles.cart__block_info}>
            <p className={styles.cart__info_title}>
              {t("cart.cartStep3Text3Title")}
            </p>
            <p className={styles.cart__info_text}>
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text3Child1")}
              </span>
              {cartFops[0]?.first_fop_text} <br />
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text4Child1")}
              </span>
              {cartFops[0]?.code_edr_fop} <br />
              <span className={styles.cart__text_gray}>
                {t("cart.cartStep3Text5Child1")}
              </span>
              {cartFops[0]?.register_date_fop} <br />
              {cartFops[0]?.number_fop} <br />
              <span className={styles.cart__text_gray}>
                {cartFops[0]?.address_fop} <br />
              </span>
            </p>
          </div>
        )}
      </div>
      <div className={styles.cart__way_pib}>
        <p className={styles.cart__pib_text}>{t("cart.cartStep3Text2")}</p>
      </div>
    </div>
  );
};

export default CartPaymentWay;
