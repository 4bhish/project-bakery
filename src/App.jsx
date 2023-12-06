import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
