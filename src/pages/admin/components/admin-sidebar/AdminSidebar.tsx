import React, { useState } from "react";
import styles from "./AdminSidebar.module.css";
import { useNavigate } from "react-router-dom";

type AdminSidebarProps = {
  onSectionChange: (section: string) => void;
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onSectionChange }) => {
  const [activeAdminPage, setActiveAdminPage] = useState<
    "workers" | "products" | "reviews" | "individual" | "certificate"
  >("workers");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
              onSectionChange("products");
              setActiveAdminPage("products");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "products" ? styles.active : ""
            }`}
          >
            Товари
          </div>
          <div
            onClick={() => {
              onSectionChange("reviews");
              setActiveAdminPage("reviews");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "reviews" ? styles.active : ""
            }`}
          >
            Відгуки
          </div>
          <div
            onClick={() => {
              onSectionChange("individual");
              setActiveAdminPage("individual");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "individual" ? styles.active : ""
            }`}
          >
            Індивідуальні устілки
          </div>
          <div
            onClick={() => {
              onSectionChange("certificate");
              setActiveAdminPage("certificate");
            }}
            className={`${styles.admin__wrapper_item} ${
              activeAdminPage === "certificate" ? styles.active : ""
            }`}
          >
            Сертифікати
          </div>
        </div>
        <div className={styles.admin__wrapper_logout}>
          <div onClick={handleSignOut} className={styles.admin__wrapper_item}>
            Вийти
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
