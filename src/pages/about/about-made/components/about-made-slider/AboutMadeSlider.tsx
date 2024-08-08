import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "../../AboutMade.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const AboutMadeSlider: React.FC = () => {
  const swiper = useSwiper();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.about__made_content}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".arrow-right-made",
            prevEl: ".arrow-left-made",
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
          className="madeSwiper"
        >
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-1.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>1</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText1")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-2.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>2</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText2")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-3.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>3</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText3")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-4.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>4</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText4")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-5.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>5</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText5")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-6.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>6</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText6")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.about__galery_slider}>
              <img
                src="../../images/about-made-7.webp"
                alt="slider banner"
                className={styles.about__slider_image}
              />
              <div className={styles.about__slider_info}>
                <span className={styles.about__block_count}>7</span>
                <p className={styles.about__slider_text}>
                  {t("production.productionStepsText7")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={"https://youtu.be/wzwtNwJ7TLQ"}
              target={"_blank"}
              className={styles.about__galery_slider}
            >
              <img
                src="../../images/about-made-video.webp"
                className={styles.about__slider_image}
                alt=""
              />
              <span className={styles.about__link_circle}>
                <img
                  src="../../images/button-play-video.svg"
                  alt="play video"
                  className={styles.about__circle_play}
                />
              </span>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <span
        onClick={() => swiper && swiper.slidePrev()}
        className={`arrow-left-made ${styles.arrow__slide_left} arrow-made`}
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
            strokeWidth="4"
          />
        </svg>
      </span>
      <span
        onClick={() => swiper && swiper.slideNext()}
        className={`arrow-right-made ${styles.arrow__slide_right} arrow-made`}
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
            strokeWidth="4"
          />
        </svg>
      </span>
    </>
  );
};

export default AboutMadeSlider;
