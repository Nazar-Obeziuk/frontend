import React, { useState } from "react";
import styles from "./CatalogIndividual.module.css";
import CatalogIndividualProduct from "./components/catalog-individual-product/CatalogIndividualProduct";
import CatalogIndividualAbout from "./components/catalog-individual-about/CatalogIndividualAbout";
import CatalogIndividualCharacteristics from "./components/catalog-individual-characteristics/CatalogIndividualCharacteristics";

const CatalogIndividual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "about" | "characteristics" | "reviews"
  >("about");
  return (
    <section className={styles.catalog__individual_section}>
      <div className={styles.container}>
        <div className={styles.catalog__individual_wrapper}>
          <div className={styles.catalog__wrapper_route}>
            <img
              src="../../images/home-icon.svg"
              alt="home icon"
              className={styles.catalog__router_icon}
            />
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.catalog__router_arrow}
            />
            <p className={styles.catalog__router_name}>Каталог</p>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.catalog__router_arrow}
            />
            <p
              className={`${styles.catalog__router_name} ${styles.catalog__router_active}`}
            >
              Індивідуальні ортопедичні устілки
            </p>
          </div>
          <div className={styles.catalog__individual_main}>
            <CatalogIndividualProduct />
            <div className={styles.catalog__main_info}>
              <div className={styles.catalog__info_tabs}>
                <span
                  className={`${styles.catalog__tabs_item} ${
                    activeTab === "about" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("about")}
                >
                  Про товар
                </span>
                <span
                  className={`${styles.catalog__tabs_item} ${
                    activeTab === "characteristics" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("characteristics")}
                >
                  Характеристики
                </span>
                <span
                  className={`${styles.catalog__tabs_item} ${
                    activeTab === "reviews" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Відгуки (0)
                </span>
              </div>
              {activeTab === "about" && <CatalogIndividualAbout />}
              {activeTab === "characteristics" && (
                <CatalogIndividualCharacteristics />
              )}
              {activeTab === "reviews" && <CatalogIndividualCharacteristics />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogIndividual;
