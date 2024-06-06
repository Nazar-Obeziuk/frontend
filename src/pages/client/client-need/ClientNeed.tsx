import React from "react";
import styles from "./ClientNeed.module.css";
import {
  clientNeedsIndividualData,
  clientNeedsOrthopedicData,
} from "../../../utils/data/ClientNeeds.data";
import InsoleItem from "../../../components/insole-item/InsoleItem";

const ClientNeed: React.FC = () => {
  return (
    <>
      <section className={styles.client__individual_section}>
        <div className={styles.container}>
          <div className={styles.client__individual_wrapper}>
            <div className={styles.client__individual_route}>
              <img
                src="../../images/home-icon.svg"
                alt="home icon"
                className={styles.client__router_icon}
              />
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.client__router_arrow}
              />
              <p className={styles.client__router_name}>Клієнтам</p>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.client__router_arrow}
              />
              <p
                className={`${styles.client__router_name} ${styles.client__router_active}`}
              >
                Кому потрібні індивідуальні ортопедичні устілки
              </p>
            </div>
            <div className={styles.client__individual_main}>
              <h2 className={styles.client__main_title}>
                Індивідуальні ортопедичні устілки потрібні:
              </h2>
              <div className={styles.client__main_insoles}>
                {clientNeedsIndividualData.map((insoleItem) => (
                  <InsoleItem insoleItem={insoleItem} key={insoleItem.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.client__orthopedic_section}>
        <div className={styles.container}>
          <div className={styles.client__orthopedic_wrapper}>
            <h2 className={styles.client__main_title}>
              Ортопедичні устілки необхідні для:
            </h2>
            <div className={styles.client__main_insoles}>
              {clientNeedsOrthopedicData.map((insoleItem) => (
                <InsoleItem insoleItem={insoleItem} key={insoleItem.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientNeed;
