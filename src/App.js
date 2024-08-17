import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import HomePage from "./pages/home/HomePage";
import Mac from "./pages/mac/Mac";
import MacBuyPage from "./pages/Mbuy/MacBuyPage";
import MacSelectedPage from "./pages/MacSelected/MacSelectedPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BillingPage from "./pages/Bill/BillingPage";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStartLoading = () => setLoading(true);
    const handleStopLoading = () => setLoading(false);

    window.addEventListener("beforeunload", handleStartLoading);
    window.addEventListener("load", handleStopLoading);

    return () => {
      window.removeEventListener("beforeunload", handleStartLoading);
      window.removeEventListener("load", handleStopLoading);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && (
          <div className="loader-container">
            <ClipLoader color="#00BFFF" height={100} width={100} />
          </div>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/MacBuyPage" element={<MacBuyPage />} />
          <Route path="/mac-selected" element={<MacSelectedPage />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
        <div className="Footer-div">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
