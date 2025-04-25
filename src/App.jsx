import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import EducationAndInterests from "./components/EducationAndInterest";
import Navbar from "./components/Navbar";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./blocks/Animations/SplashCursor/Splash";
import React, { useState, useEffect } from "react";
import StudentCorner from "./pages/StudentCorner";


function Apps() {
  return (
    <div className="font-sans text-primary" id="home">
      <Navbar />

      <HeroSection />

      <About />
      <TestimonialCarousel />
      <Experience />
      <Projects />
      <EducationAndInterests />

      <Contact />
    </div>
  );
}

// App.jsx
// import React from "react";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import StudentCorner from "./pages/StudentCorner"; // New page
// import Contact from "./components/Contact";
// import TestimonialCarousel from "./components/TestimonialCarousel";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust splash duration in milliseconds

    return () => clearTimeout(splashTimeout);
  }, []);

  if (loading) return <Splash />;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="/studentcorner" element={<StudentCorner />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<TestimonialCarousel />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
