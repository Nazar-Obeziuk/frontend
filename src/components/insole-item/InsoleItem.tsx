import React from "react";
import { IOrthopedicInsoles } from "../../services/orthopedic-insoles/orthopedic-insoles.interface";
import styles from "./InsoleItem.module.css";

interface InsoleItemProps {
  insoleItem: IOrthopedicInsoles;
}

const InsoleItem: React.FC<InsoleItemProps> = ({ insoleItem }) => {
  return (
    <div className={styles.home__insole_item}>
      <img
        src={insoleItem.image_url}
        alt="insole item icon"
        className={styles.home__item_image}
      />
      <p className={styles.home__item_text}>
        {insoleItem.insole_description_ua}
      </p>
    </div>
  );
};

export default InsoleItem;
