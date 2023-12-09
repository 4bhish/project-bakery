import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}  />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
