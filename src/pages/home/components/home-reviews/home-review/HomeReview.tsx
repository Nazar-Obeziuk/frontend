import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./HomeReview.module.css";
import "swiper/css";
import "swiper/css/navigation";

const HomeReview: React.FC = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className={styles.home__reviews_content}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".arrow-right-reviews",
            prevEl: ".arrow-left-reviews",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="reviewsSwiper"
        >
          <SwiperSlide>
            <div className={styles.home__reviews_item}>
              <div className={styles.home__reviews_header}>
                <span className={styles.home__reviews_stars}>
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                </span>
                <h3 className={styles.home__reviews_title}>Коваль Дмитро</h3>
              </div>
              <div className={styles.home__reviews_main}>
                <span className={styles.home__reviews_experience}>
                  Досвід використання:
                </span>
                <p className={styles.home__reviews_text}>
                  Нещодавно я не зміг потрапити до ортопеда на прийом і
                  звернувся до салону Рідні медтехніки, де є послуга
                  виготовлення устілок. Великою перевагою стало, що діагностують
                  тут по технології CAD/CAM.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.home__reviews_item}>
              <div className={styles.home__reviews_header}>
                <span className={styles.home__reviews_stars}>
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                </span>
                <h3 className={styles.home__reviews_title}>Коваль Дмитро</h3>
              </div>
              <div className={styles.home__reviews_main}>
                <span className={styles.home__reviews_experience}>
                  Досвід використання:
                </span>
                <p className={styles.home__reviews_text}>
                  Нещодавно я не зміг потрапити до ортопеда на прийом і
                  звернувся до салону Рідні медтехніки, де є послуга
                  виготовлення устілок. Великою перевагою стало, що діагностують
                  тут по технології CAD/CAM.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.home__reviews_item}>
              <div className={styles.home__reviews_header}>
                <span className={styles.home__reviews_stars}>
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                </span>
                <h3 className={styles.home__reviews_title}>Коваль Дмитро</h3>
              </div>
              <div className={styles.home__reviews_main}>
                <span className={styles.home__reviews_experience}>
                  Досвід використання:
                </span>
                <p className={styles.home__reviews_text}>
                  Нещодавно я не зміг потрапити до ортопеда на прийом і
                  звернувся до салону Рідні медтехніки, де є послуга
                  виготовлення устілок. Великою перевагою стало, що діагностують
                  тут по технології CAD/CAM.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.home__reviews_item}>
              <div className={styles.home__reviews_header}>
                <span className={styles.home__reviews_stars}>
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                  <img
                    src="./images/review-star.svg"
                    alt="review star"
                    className={styles.home__star_icon}
                  />
                </span>
                <h3 className={styles.home__reviews_title}>Коваль Дмитро</h3>
              </div>
              <div className={styles.home__reviews_main}>
                <span className={styles.home__reviews_experience}>
                  Досвід використання:
                </span>
                <p className={styles.home__reviews_text}>
                  Нещодавно я не зміг потрапити до ортопеда на прийом і
                  звернувся до салону Рідні медтехніки, де є послуга
                  виготовлення устілок. Великою перевагою стало, що діагностують
                  тут по технології CAD/CAM.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <span
        onClick={() => swiper && swiper.slidePrev()}
        className={`arrow-left-reviews ${styles.arrow__slide_left} arrow-reviews`}
      >
        <svg
          width="22"
          height="35"
          viewBox="0 0 22 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4434 33L3.88725 17.4434L19.4434 1.8873"
            stroke="#FFED00"
            stroke-width="4"
          />
        </svg>
      </span>
      <span
        onClick={() => swiper && swiper.slideNext()}
        className={`arrow-right-reviews ${styles.arrow__slide_right} arrow-reviews`}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 20 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.55615 2L17.1123 17.5566L1.55615 33.1127"
            stroke="#FFED00"
            stroke-width="4"
          />
        </svg>
      </span>
    </>
  );
};

export default HomeReview;
