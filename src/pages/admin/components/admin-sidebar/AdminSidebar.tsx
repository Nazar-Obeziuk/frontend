import React, { useState } from "react";
import styles from "./AdminSidebar.module.css";

type AdminSidebarProps = {
  onSectionChange: (section: string) => void;
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onSectionChange }) => {
  const [activeAdminPage, setActiveAdminPage] = useState<
    "workers" | "main-reviews" | "orthopedic-insoles"
  >("workers");
  return (
    <div className={styles.admin__content_sidebar}>
      <div className={styles.admin__sidebar_wrapper}>
        <div className={styles.admin__wrapper_pages}>
          <div
            onClick={() => {
              onSectionChange("workers");
              setActiveAdminPage("workers");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "workers" ? styles.active : ""
            }`}
          >
            Працівники
          </div>
          <div
            onClick={() => {
              onSectionChange("main-reviews");
              setActiveAdminPage("main-reviews");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "main-reviews" ? styles.active : ""
            }`}
          >
            Головні відгуки
          </div>
          <div
            onClick={() => {
              onSectionChange("orthopedic-insoles");
              setActiveAdminPage("orthopedic-insoles");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "orthopedic-insoles" ? styles.active : ""
            }`}
          >
            Ортопедичні устілки
          </div>
        </div>
        <div className={styles.admin__wrapper_logout}>
          <div className={styles.admin__wrapper_item}>Вийти</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
