import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutProstopoo from "./pages/about/about-prostopoo/AboutProstopoo";
import AboutContacts from "./pages/about/about-contacts/AboutContacts";
import AboutMade from "./pages/about/about-made/AboutMade";
import AboutWarranty from "./pages/about/about-warranty/AboutWarranty";
import AboutPolicy from "./pages/about/about-policy/AboutPolicy";
import AboutPublic from "./pages/about/about-public/AboutPublic";
import ClientNeed from "./pages/client/client-need/ClientNeed";
import ClientRecommendation from "./pages/client/client-recommendation/ClientRecommendation";
import OrderMake from "./pages/order/order-make/OrderMake";
import OrderPayment from "./pages/order/order-payment/OrderPayment";
import OrderDelivery from "./pages/order/order-delivery/OrderDelivery";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home/prostopoo" element={<AboutProstopoo />}></Route>
        <Route
          path="/home/prostopoo/contacts"
          element={<AboutContacts />}
        ></Route>
        <Route path="/home/prostopoo/made" element={<AboutMade />}></Route>
        <Route
          path="/home/prostopoo/warranty-and-exchange"
          element={<AboutWarranty />}
        ></Route>
        <Route
          path="/home/prostopoo/privacy-policy"
          element={<AboutPolicy />}
        ></Route>
        <Route
          path="/home/prostopoo/public-offer-agreement"
          element={<AboutPublic />}
        ></Route>
        <Route
          path="/home/client/who-need-individual-orthopedic-insoles"
          element={<ClientNeed />}
        ></Route>
        <Route
          path="/home/client/recommendations"
          element={<ClientRecommendation />}
        ></Route>
        <Route
          path="/home/order/how-to-make-a-order"
          element={<OrderMake />}
        ></Route>
        <Route path="/home/order/payment" element={<OrderPayment />}></Route>
        <Route path="/home/order/delivery" element={<OrderDelivery />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
