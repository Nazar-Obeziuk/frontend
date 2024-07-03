import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AdminWorkersProvider } from "./context/admin-workers/AdminWorkersContext";
import {
  AdminProductsProvider,
  VariationProvider,
} from "./context/admin-products/AdminProductsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AdminWorkersProvider>
    <AdminProductsProvider>
      <VariationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VariationProvider>
    </AdminProductsProvider>
  </AdminWorkersProvider>
);
