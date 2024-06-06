import React from "react";
import styles from "./InsolesAdvantages.module.css";
import { homeInsolesAdvantages } from "../../../../../utils/data/HomeInsoles.data";
import InsoleItem from "../../../../../components/insole-item/InsoleItem";

const InsolesAdvantages: React.FC = () => {
  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        ПЕРЕВАГИ{" "}
        <span className={styles.home__title_primary}>ОРТОПЕДИЧНИХ</span> УСТІЛОК
        НА ЗАМОВЛЕННЯ
      </h2>
      <div className={styles.home__inner_main}>
        {homeInsolesAdvantages.map((insoleItem) => (
          <InsoleItem insoleItem={insoleItem} key={insoleItem.id} />
        ))}
      </div>
    </div>
  );
};

export default InsolesAdvantages;
