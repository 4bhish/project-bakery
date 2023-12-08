import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
