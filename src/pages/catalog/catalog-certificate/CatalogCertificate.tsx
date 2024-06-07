import React from "react";
import styles from "./CatalogCertificate.module.css";
import CatalogCertificateGift from "./components/catalog-certificate-gift/CatalogCertificateGift";
import CatalogCertificateAbout from "./components/catalog-certificate-about/CatalogCertificateAbout";

const CatalogCertificate: React.FC = () => {
  return (
    <section className={styles.catalog__certificate_section}>
      <div className={styles.container}>
        <div className={styles.catalog__certificate_wrapper}>
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
              Подарунковий сертифікат Prostopoo
            </p>
          </div>
          <div className={styles.catalog__certificate_main}>
            <CatalogCertificateGift />
            <div className={styles.catalog__main_info}>
              <div className={styles.catalog__info_tabs}>
                <span
                  className={`${styles.catalog__tabs_item} ${styles.active}`}
                >
                  Про товар
                </span>
                <span className={styles.catalog__tabs_item}>Відгуки (0)</span>
              </div>
              <CatalogCertificateAbout />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogCertificate;
