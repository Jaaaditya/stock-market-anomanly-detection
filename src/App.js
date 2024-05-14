import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Login from './components/login/login';
import Navigation from './navigation';
import Pass from "./components/login/forget";
import OTP from "./components/login/OTPInput";
import Reset from "./components/login/Reset";
import Terms from "./componenets/login/terms";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Pass />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/terms/" element={<Terms/>}>
        <Route 
          path="/dash" 
          element={<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
            <Dashboard />
          </StockContext.Provider>
        </ThemeContext.Provider>} />
      </Routes>
    </Router>
  );
}

export default App;
