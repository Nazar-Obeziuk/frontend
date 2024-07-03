import React, { useState } from "react";
import styles from "./AdminLayout.module.css";
import AdminWorkers from "../admin-workers/AdminWorkers";
import AdminSidebar from "../admin-sidebar/AdminSidebar";
import AdminProducts from "../admin-products/AdminProducts";
import AdminReviews from "../admin-reviews/AdminReviews";

const AdminLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState("workers");

  const renderContent = () => {
    switch (activeSection) {
      case "workers":
        return <AdminWorkers />;
      case "products":
        return <AdminProducts />;
      case "reviews":
        return <AdminReviews />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.admin__wrapper_content}>
      <AdminSidebar key={"uniq1"} onSectionChange={setActiveSection} />
      <div className={styles.admin__content_main}>{renderContent()}</div>
    </div>
  );
};

export default AdminLayout;
