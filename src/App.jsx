import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import "./styles/globalStyle.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="fast-furious-project/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
