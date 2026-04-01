// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Education = lazy(() => import("./pages/Education"));
const Skills = lazy(() => import("./pages/Skills"));
const Accolades = lazy(() => import("./pages/Accolades"));
const Personal = lazy(() => import("./pages/Personal"));

function PageShell() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="rounded-full border border-white/12 bg-slate-950/35 px-5 py-3 text-sm font-semibold text-slate-200/80 backdrop-blur-xl">
        Loading section...
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageShell />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Background />
      <div className="relative z-10 w-full min-h-screen font-sans">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
