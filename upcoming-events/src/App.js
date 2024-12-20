import React from "react";
import Nav from "./components/layout/Nav"  
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About_us from "./pages/About_us";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";



function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
