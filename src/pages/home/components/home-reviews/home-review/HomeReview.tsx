import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./HomeReview.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { IReviewGeneral } from "../../../../../services/reviews/review.interface";
import { getAllGeneralReviews } from "../../../../../services/reviews/reviews";

const HomeReview: React.FC = () => {
  const [reviews, setReviews] = useState<IReviewGeneral[]>([]);
  const [isReviewsError, setReviewsError] = useState(false);
  const swiper = useSwiper();

  const getAll = async () => {
    try {
      const reviewsData = await getAllGeneralReviews();
      setReviews(reviewsData);
      setReviewsError(false);
    } catch (error) {
      setReviewsError(true);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      {!isReviewsError && (
        <>
          <div className={styles.home__reviews_content}>
            <Swiper
              key={"uniq1"}
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
              {reviews.map((review: IReviewGeneral) => {
                const reviewStars = [];

                for (let i = 1; i <= review.stars; i++) {
                  reviewStars.push(i);
                }

                return (
                  <SwiperSlide key={review.id}>
                    <div className={styles.home__reviews_item}>
                      <div className={styles.home__reviews_header}>
                        <span className={styles.home__reviews_stars}>
                          {reviewStars.map((reviewStar) => (
                            <img
                              key={reviewStar}
                              src="./images/review-star.svg"
                              alt="review star"
                              className={styles.home__star_icon}
                            />
                          ))}
                        </span>
                        <h3 className={styles.home__reviews_title}>
                          {review.name_ua}
                        </h3>
                      </div>
                      <div className={styles.home__reviews_main}>
                        <span className={styles.home__reviews_experience}>
                          Досвід використання:
                        </span>
                        <p className={styles.home__reviews_text}>
                          {review.description_ua}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
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
                strokeWidth="4"
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
                strokeWidth="4"
              />
            </svg>
          </span>
        </>
      )}
    </>
  );
};

export default HomeReview;
