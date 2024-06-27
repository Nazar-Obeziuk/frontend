import React from "react";
import styles from "./HomeWorker.module.css";
import { IWorker } from "../../../../../services/workers/worker.interface";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

interface WorkerProps {
  worker: IWorker;
}

const HomeWorker: React.FC<WorkerProps> = ({ worker }) => {
  const swiper = useSwiper();

  return (
    <>
      <section className={styles.home__worker_section}>
        <div className={styles.container}>
          <div className={styles.home__worker_wrapper}>
            <div className={styles.home__worker_banner}>
              <img
                src={worker.image_url}
                alt="worker banner"
                className={styles.home__worker_image}
              />
              <div className={styles.home__worker_mask}></div>
            </div>
            <div className={styles.home__worker_info}>
              <div className={styles.home__info_header}>
                <h3 className={styles.home__info_title}>{worker.name_ua}</h3>
                <span className={styles.home__info_subtitle}>
                  {worker.subtitle_ua}
                </span>
              </div>
              <div className={styles.home__info_about}>
                <p className={styles.home__about_text}>
                  {worker.first_description_ua}
                </p>
                <p className={styles.home__about_text}>
                  {worker.second_description_ua}
                </p>
                <p className={styles.home__about_text}>
                  {worker.third_description_ua}
                </p>
              </div>
              <div className={styles.home__info_galery}>
                <div className={styles.home__galery_content}>
                  <Swiper
                    key={"uniq1"}
                    spaceBetween={32}
                    slidesPerView={3}
                    navigation={{
                      nextEl: `.arrow-right-workers-${worker.id}`,
                      prevEl: `.arrow-left-workers-${worker.id}`,
                    }}
                    modules={[Navigation]}
                    className={`workerSwiper-${worker.id}`}
                  >
                    {/* {worker.worker_slider_images.map((workerSlideImage) => (
                      <SwiperSlide key={workerSlideImage}>
                        <div className={styles.home__slider_card}>
                          <img
                            className={styles.home__slider_image}
                            src={workerSlideImage}
                            alt="worker slide icon"
                          />
                        </div>
                      </SwiperSlide>
                    ))} */}
                  </Swiper>
                </div>

                <span
                  onClick={() => swiper && swiper.slidePrev()}
                  className={`arrow-left-workers-${worker.id} ${styles.arrow__slide_left} arrow-workers`}
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
                  className={`arrow-right-workers-${worker.id} ${styles.arrow__slide_right} arrow-workers`}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.home__worker_mobile}>
        <div className={styles.container}>
          <div className={styles.home__wrapper_mobile}>
            <div className={styles.home__info_mobile}>
              <div className={styles.home__info_header}>
                <h3 className={styles.home__info_title}>{worker.name_ua}</h3>
                <span className={styles.home__info_subtitle}>
                  {worker.subtitle_ua}
                </span>
              </div>
              <div className={styles.home__info_about}>
                <p className={styles.home__about_text}>
                  {worker.first_description_ua}
                </p>
                <p className={styles.home__about_text}>
                  {worker.second_description_ua}
                </p>
                <p className={styles.home__about_text}>
                  {worker.third_description_ua}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.home__worker_mobile} ${styles.home__mobile_section}`}
      >
        <div className={styles.container}>
          <div className={styles.home__wrapper_mobile}>
            <div className={styles.home__banners_mobile}>
              <div className={styles.home__worker_banner}>
                <img
                  src={worker.image_url}
                  alt="worker banner"
                  className={styles.home__worker_image}
                />
              </div>
              <div className={styles.home__galery_mobile}>
                <div className={styles.home__content_mobile}>
                  <Swiper
                    key={"uniq2"}
                    direction={"vertical"}
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                      768: {
                        spaceBetween: 32,
                      },
                    }}
                    navigation={{
                      nextEl: `.arrow-right-workers-${worker.id}`,
                      prevEl: `.arrow-left-workers-${worker.id}`,
                    }}
                    modules={[Navigation]}
                    className={`worker-slider workerSwiper-${worker.id}`}
                  >
                    {/* {worker.worker_slider_images.map((workerSlideImage) => (
                      <SwiperSlide key={workerSlideImage}>
                        <div className={styles.home__card_mobile}>
                          <img
                            className={styles.home__image_mobile}
                            src={workerSlideImage}
                            alt="worker slide icon"
                          />
                        </div>
                      </SwiperSlide>
                    ))} */}
                  </Swiper>
                </div>

                <span
                  onClick={() => swiper && swiper.slidePrev()}
                  className={`arrow-left-workers-${worker.id} ${styles.arrow__slide_left} arrow-workers`}
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
                  className={`arrow-right-workers-${worker.id} ${styles.arrow__slide_right} arrow-workers`}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWorker;
