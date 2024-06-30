import React, { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
};

export default Layout;
