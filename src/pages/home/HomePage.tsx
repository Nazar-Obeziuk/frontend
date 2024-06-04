import React from "react";
import styles from "./HomePage.module.css";
import HomeInsoles from "./components/home-insoles/HomeInsoles";
import HomeMade from "./components/home-made/HomeMade";
import HomeInfo from "./components/home-info/HomeInfo";
import HomeOrder from "./components/home-order/HomeOrder";
import HomeSteps from "./components/home-steps/HomeSteps";
import HomeWorkers from "./components/home-workers/HomeWorkers";
import HomeReviews from "./components/home-reviews/HomeReviews";

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <HomeMade key={"uniq1"} />
      <HomeInfo key={"uniq2"} />
      <HomeInsoles key={"uniq3"} />
      <HomeOrder key={"uniq4"} />
      <HomeSteps key={"uniq5"} />
      <HomeWorkers key={"uniq6"} />
      <HomeReviews key={"uniq7"} />
    </main>
  );
};

export default HomePage;
