import React from "react";
import AboutHistory from "./components/about-history/AboutHistory";
import AboutFeatures from "./components/about-features/AboutFeatures";
import styles from "./AboutProstopoo.module.css";
import AboutSolutions from "./components/about-solutions/AboutSolutions";
import AboutTechnologies from "./components/about-technologies/AboutTechnologies";
import AboutGoal from "./components/about-goal/AboutGoal";

const AboutProstopoo: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.about__prostopoo_section}>
        <div className={styles.container}>
          <div className={styles.about__prostopoo_wrapper}>
            <div className={styles.about__wrapper_router}>
              <img
                src="../images/home-icon.svg"
                alt="home icon"
                className={styles.about__router_icon}
              />
              <img
                src="../images/navigation-arrow.svg"
                alt="router arrow"
                className="about__router_arrow"
              />
              <p className={styles.about__router_name}>ПРО PROSTOPOO</p>
            </div>
            <h2 className={styles.about__wrapper_title}>ПРО PROSTOPOO</h2>
          </div>
        </div>
      </section>
      <AboutHistory key={"uniq1"} />
      <AboutFeatures key={"uniq2"} />
      <AboutSolutions key={"uniq3"} />
      <AboutTechnologies key={"uniq4"} />
      <AboutGoal key={"uniq5"} />
      <section className={styles.about__prostopoo_footer}>
        <div className={styles.container}>
          <div className={styles.about__footer_wrapper}>
            <h2 className={styles.about__footer_title}>
              <span className={styles.about__title_primary}>Prostopoo</span> —
              подбай про свою стопу!
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutProstopoo;
