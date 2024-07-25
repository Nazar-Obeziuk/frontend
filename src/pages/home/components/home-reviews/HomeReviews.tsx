import React from "react";
import HomeReview from "./home-review/HomeReview";
import styles from "./HomeReviews.module.css";
import { useTranslation } from "react-i18next";

const HomeReviews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__reviews_section}>
      <div className={styles.container}>
        <div className={styles.home__reviews_wrapper}>
          <div className={styles.home__reviews_main}>
            <HomeReview key={"uniq1"} />
          </div>
          <button className={styles.home__reviews_button} type="button">
            {t("home.homeReviews.homeReviewsButtonText")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
