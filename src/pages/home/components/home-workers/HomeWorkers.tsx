import React, { useEffect, useState } from "react";
import HomeWorker from "./home-worker/HomeWorker";
import styles from "./HomeWorkers.module.css";
import { IWorker } from "../../../../services/workers/worker.interface";
import { getAllWorkers } from "../../../../services/workers/workers";
import { useTranslation } from "react-i18next";

const HomeWorkers: React.FC = () => {
  const [adminWorkers, setAdminWorkers] = useState<IWorker[]>([]);
  const [activeLanguage, setActiveLanguage] = useState("ua");
  const { t, i18n } = useTranslation();

  const getAll = async () => {
    const workersData = await getAllWorkers();
    setAdminWorkers(workersData);
  };

  useEffect(() => {
    getAll();

    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else if (i18n.language === "en") {
      setActiveLanguage("en");
    }
  }, [i18n.language]);

  return (
    <>
      {adminWorkers.length > 0 && (
        <>
          <section className={styles.home__workers_section}>
            <div className={styles.container}>
              <div className={styles.home__workers_wrapper}>
                <h2 className={styles.home__workers_title}>
                  {t("home.homeWorkers.homeWorkersTitleChild1")}
                  <span className={styles.home__workers_primary}>
                    {t("home.homeWorkers.homeWorkersTitleChild2")}
                  </span>
                  {t("home.homeWorkers.homeWorkersTitleChild3")}
                </h2>
              </div>
            </div>
          </section>
          <div className={styles.home__workers_box}>
            {adminWorkers.map((worker: IWorker) => (
              <HomeWorker
                activeLanguage={activeLanguage}
                worker={worker}
                key={worker.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HomeWorkers;
