// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import Background
import Background from "./components/Background";

// Import all your pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Accolades from "./pages/Accolades";
import Personal from "./pages/Personal";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence is the magic that allows pages to crossfade
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/personal" element={<Personal />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Background />
      {/* The main content sits exactly on top of the fixed background */}
      <div className="relative z-10 w-full min-h-screen font-sans">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}