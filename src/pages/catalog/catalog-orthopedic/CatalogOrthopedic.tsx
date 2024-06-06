import React from "react";
import styles from "./CatalogOrthopedic.module.css";

const CatalogOrthopedic: React.FC = () => {
  return (
    <section className={styles.catalog__orthopedic_section}>
      <div className={styles.container}>
        <div className={styles.catalog__orthopedic_wrapper}>
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
              Ортопедичні устілки
            </p>
          </div>
          <div className={styles.catalog__wrapper_main}>
            <div className={styles.catalog__main_item}>
              <div className={styles.catalog__item_banner}>
                <img
                  src="../../images/reviews-product-1.jpg"
                  alt="product banner"
                  className={styles.catalog__banner_image}
                />
              </div>
              <div className={styles.catalog__item_info}>
                <div className={styles.catalog__info_header}>
                  <h3 className={styles.catalog__header_title}>
                    Універсальні ортопедичні устілки
                  </h3>
                  <div className={styles.catalog__info_reviews}>
                    <div className={styles.catalog__reviews_stars}>
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                    </div>
                    <span className={styles.catalog__reviews_count}>(2)</span>
                  </div>
                  <div className={styles.catalog__header_left}>
                    <p className={styles.catalog__left_review}>
                      Залишити відгук
                    </p>
                  </div>
                </div>
                <div className={styles.catalog__info_main}>
                  <p className={styles.catalog__main_description}>
                    Лікування та профілактика плоскостопості, вальгусної та
                    варусної деформації
                  </p>
                </div>
                <div className={styles.catalog__info_footer}>
                  <h2 className={styles.catalog__footer_price}>699 грн</h2>
                  <button
                    className={styles.catalog__footer_button}
                    type="button"
                  >
                    Купити
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.catalog__main_item}>
              <div className={styles.catalog__item_banner}>
                <img
                  src="../../images/reviews-product-2.jpg"
                  alt="product banner"
                  className={styles.catalog__banner_image}
                />
              </div>
              <div className={styles.catalog__item_info}>
                <div className={styles.catalog__info_header}>
                  <h3 className={styles.catalog__header_title}>
                    Дитячі ортопедичні устілки
                  </h3>
                  <div className={styles.catalog__info_reviews}>
                    <div className={styles.catalog__reviews_stars}>
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                    </div>
                    <span className={styles.catalog__reviews_count}>(2)</span>
                  </div>
                  <div className={styles.catalog__header_left}>
                    <p className={styles.catalog__left_review}>
                      Залишити відгук
                    </p>
                  </div>
                </div>
                <div className={styles.catalog__info_main}>
                  <p className={styles.catalog__main_description}>
                    Лікування та профілактика плоскостопості, правильне
                    позиціонування стоп, амортизація
                  </p>
                </div>
                <div className={styles.catalog__info_footer}>
                  <h2 className={styles.catalog__footer_price}>499 грн</h2>
                  <button
                    className={styles.catalog__footer_button}
                    type="button"
                  >
                    Купити
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.catalog__main_item}>
              <div className={styles.catalog__item_banner}>
                <img
                  src="../../images/reviews-product-3.jpg"
                  alt="product banner"
                  className={styles.catalog__banner_image}
                />
              </div>
              <div className={styles.catalog__item_info}>
                <div className={styles.catalog__info_header}>
                  <h3 className={styles.catalog__header_title}>
                    Діабетичні ортопедичні устілки
                  </h3>
                  <div className={styles.catalog__info_reviews}>
                    <div className={styles.catalog__reviews_stars}>
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                    </div>
                    <span className={styles.catalog__reviews_count}>(2)</span>
                  </div>
                  <div className={styles.catalog__header_left}>
                    <p className={styles.catalog__left_review}>
                      Залишити відгук
                    </p>
                  </div>
                </div>
                <div className={styles.catalog__info_main}>
                  <p className={styles.catalog__main_description}>
                    Лікування та профілактика ускладнень стану стоп при
                    захворюванні на цукровий діабет
                  </p>
                </div>
                <div className={styles.catalog__info_footer}>
                  <h2 className={styles.catalog__footer_price}>699 грн</h2>
                  <button
                    className={styles.catalog__footer_button}
                    type="button"
                  >
                    Купити
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.catalog__main_item}>
              <div className={styles.catalog__item_banner}>
                <img
                  src="../../images/reviews-product-4.jpg"
                  alt="product banner"
                  className={styles.catalog__banner_image}
                />
              </div>
              <div className={styles.catalog__item_info}>
                <div className={styles.catalog__info_header}>
                  <h3 className={styles.catalog__header_title}>
                    Спортивні ортопедичні устілки
                  </h3>
                  <div className={styles.catalog__info_reviews}>
                    <div className={styles.catalog__reviews_stars}>
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                      <img
                        src="../../images/review-star.svg"
                        alt="reivews star icon"
                        className={styles.catalog__stars_item}
                      />
                    </div>
                    <span className={styles.catalog__reviews_count}>(2)</span>
                  </div>
                  <div className={styles.catalog__header_left}>
                    <p className={styles.catalog__left_review}>
                      Залишити відгук
                    </p>
                  </div>
                </div>
                <div className={styles.catalog__info_main}>
                  <p className={styles.catalog__main_description}>
                    Лікування та профілактика плоскостопості, амортизація,
                    підвищення витривалості під час занять спортом
                  </p>
                </div>
                <div className={styles.catalog__info_footer}>
                  <h2 className={styles.catalog__footer_price}>599 грн</h2>
                  <button
                    className={styles.catalog__footer_button}
                    type="button"
                  >
                    Купити
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogOrthopedic;
