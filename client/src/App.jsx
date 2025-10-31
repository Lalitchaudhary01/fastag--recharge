import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FastagProvider from "./components/FastagProvider";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./components/DashboardHome";
import RechargeHistory from "./components/RechargeHistory";
import WalletHistory from "./components/WalletHistory";

// Landing Page Component
function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <FastagProvider />
      <AboutSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Routes (After Login) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="recharge-history" element={<RechargeHistory />} />
          <Route path="wallet-history" element={<WalletHistory />} />
          <Route
            path="offers"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Offers</h1>
              </div>
            }
          />
          <Route
            path="help"
            element={
              <div className="p-8">
                <h1 className="text-2xl font-bold">Help and Support</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
