import React, { useEffect, useState } from "react";
import HomeWorker from "./home-worker/HomeWorker";
import styles from "./HomeWorkers.module.css";
import { IWorker } from "../../../../services/workers/worker.interface";
import { getAllWorkers } from "../../../../services/workers/workers";

const HomeWorkers: React.FC = () => {
  const [adminWorkers, setAdminWorkers] = useState<IWorker[]>([]);

  const getAll = async () => {
    const workersData = await getAllWorkers();
    setAdminWorkers(workersData);
  };

  useEffect(() => {
    getAll();
  }, []);

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
        {adminWorkers.map((worker: IWorker) => (
          <HomeWorker worker={worker} key={worker.id} />
        ))}
      </div>
    </>
  );
};

export default HomeWorkers;
