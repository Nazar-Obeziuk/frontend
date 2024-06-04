import React from "react";
import styles from "./HomeInsoles.module.css";
import InsolesNeeds from "./insoles-needs/InsolesNeeds";
import InsolesAdvantages from "./insoles-advantages/InsolesAdvantages";
import InsolesReasons from "./insoles-reasons/InsolesReasons";

const HomeInsoles: React.FC = () => {
  return (
    <section className={styles.home__insoles_section}>
      <div className={styles.container}>
        <div className={styles.home__insoles_wrapper}>
          <InsolesNeeds />
          <InsolesReasons />
          <InsolesAdvantages />
        </div>
      </div>
    </section>
  );
};

export default HomeInsoles;
