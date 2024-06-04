import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeWorker.module.css";
import { Worker } from "../../../../../services/workers/worker.interface";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

interface WorkerProps {
  worker: Worker;
}

const HomeWorker: React.FC<WorkerProps> = ({ worker }) => {
  const swiper = useSwiper();

  return (
    <section className={styles.home__worker_section}>
      <div className={styles.container}>
        <div className={styles.home__worker_wrapper}>
          <div className={styles.home__worker_banner}>
            <img
              src={worker.worker_image_path}
              alt="worker banner"
              className={styles.home__worker_image}
            />
          </div>
          <div className={styles.home__worker_info}>
            <div className={styles.home__info_header}>
              <h3 className={styles.home__info_title}>{worker.worker_title}</h3>
              <span className={styles.home__info_subtitle}>
                {worker.worker_subtitle}
              </span>
            </div>
            <div className={styles.home__info_about}>
              <p className={styles.home__about_text}>
                {worker.worker_first_text}
              </p>
              <p className={styles.home__about_text}>
                {worker.worker_second_text}
              </p>
              <p className={styles.home__about_text}>
                {worker.worker_third_text}
              </p>
            </div>
            <div className={styles.home__info_galery}>
              {/* <div className="home__galery_content">
                <Swiper
                  spaceBetween={32}
                  slidesPerView={3}
                  navigation={{
                    nextEl: ".arrow-right",
                    prevEl: ".arrow-left",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className={styles.home__slider_card}>
                      <img
                        className={styles.home__slider_image}
                        src="./images/yan-certificate-1.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.home__slider_card}>
                      <img
                        className={styles.home__slider_image}
                        src="./images/yan-certificate-2.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.home__slider_card}>
                      <img
                        className={styles.home__slider_image}
                        src="./images/yan-certificate-3.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.home__slider_card}>
                      <img
                        className={styles.home__slider_image}
                        src="./images/yan-certificate-1.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.home__slider_card}>
                      <img
                        className={styles.home__slider_image}
                        src="./images/yan-certificate-2.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.home__slider_card}>
                      <img
                        className={styles.home__slider_image}
                        src="./images/yan-certificate-3.jpg"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div> */}

              {/* <span
                onClick={() => swiper && swiper.slidePrev()}
                style={{
                  position: "absolute",
                  top: "50%",
                  zIndex: 1001,
                  transform: "translate(0, -50%)",
                  left: "-52px",
                  cursor: "pointer",
                }}
                className="arrow-left arrow"
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
                style={{
                  position: "absolute",
                  top: "50%",
                  zIndex: 1001,
                  transform: "translate(0, -50%)",
                  right: "-52px",
                  cursor: "pointer",
                }}
                className="arrow-right arrow"
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
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorker;
