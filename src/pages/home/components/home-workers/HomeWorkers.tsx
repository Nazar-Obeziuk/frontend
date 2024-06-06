import React from "react";
import HomeWorker from "./home-worker/HomeWorker";
import styles from "./HomeWorkers.module.css";
import { workersData } from "../../../../utils/data/HomeWorkers.data";

const HomeWorkers: React.FC = () => {
  return (
    <>
      <section className={styles.home__workers_section}>
        <div className={styles.container}>
          <div className={styles.home__workers_wrapper}>
            <h2 className={styles.home__workers_title}>
              НАШІ{" "}
              <span className={styles.home__workers_primary}>ЕКСПЕРТИ</span> З
              ВИГОТОВЛЕННЯ УСТІЛОК
            </h2>
          </div>
        </div>
      </section>
      <div className={styles.home__workers_box}>
        {workersData.map((worker) => (
          <HomeWorker worker={worker} key={worker.id} />
        ))}
      </div>
    </>
  );
};

export default HomeWorkers;
