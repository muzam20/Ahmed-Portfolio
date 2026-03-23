import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ThemeToggle from "./components/layout/ThemeToggle";



function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen transition-colors duration-500">
        <Navbar />
        {/* <ThemeToggle /> */}
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;