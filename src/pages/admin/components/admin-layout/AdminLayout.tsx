import React, { useState } from "react";
import styles from "./AdminLayout.module.css";
import AdminWorkers from "../admin-workers/AdminWorkers";
import AdminMainReviews from "../admin-main-reviews/AdminMainReviews";
import AdminSidebar from "../admin-sidebar/AdminSidebar";
import AdminOrthopedicInsoles from "../admin-orthopedic-insoles/AdminOrthopedicInsoles";

const AdminLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState("workers");

  const renderContent = () => {
    switch (activeSection) {
      case "workers":
        return <AdminWorkers />;
      case "main-reviews":
        return <AdminMainReviews />;
      case "orthopedic-insoles":
        return <AdminOrthopedicInsoles />;
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
