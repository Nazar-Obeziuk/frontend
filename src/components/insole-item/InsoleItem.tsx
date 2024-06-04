import React from "react";
import { OrthopedicInsoles } from "../../services/orthopedic-insoles/orthopedic-insoles.interface";
import styles from "./InsoleItem.module.css";

interface InsoleItemProps {
  clientInsole: OrthopedicInsoles;
}

const InsoleItem: React.FC<InsoleItemProps> = ({ clientInsole }) => {
  return (
    <div className={styles.home__insole_item}>
      <img
        src={clientInsole.image_url}
        alt="insole item icon"
        className={styles.home__item_image}
      />
      <p className={styles.home__item_text}>
        {clientInsole.insole_description_ua}
      </p>
    </div>
  );
};

export default InsoleItem;
