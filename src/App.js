import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";

import AventuriersDesRails from "./components/Projects/Pages/AventurierDesRails";
import SAlt from "./components/Projects/Pages/SAlt";
import EscapeGame from "./components/Projects/Pages/EscapeGame";
import Meet from "./components/Projects/Pages/Meet";
import OBC from "./components/Projects/Pages/OBC";
import Intranet from "./components/Projects/Pages/Intranet";
import WispMadness from "./components/Projects/Pages/WispMadness";
import WeatherWizardry from "./components/Projects/Pages/WeatherWizardry";
import NDI from "./components/Projects/Pages/NDI";
import ChatPitreMusical from "./components/Projects/Pages/ChatPitreMusical";
import GoPetSit from "./components/Projects/Pages/GoPetSit";
import Mastermind from "./components/Projects/Pages/Mastermind";
import Serveur from "./components/Projects/Pages/Serveur";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />

            {/* Specific Project Pages */}
            <Route path="/project/AventurierDesRails" element={<AventuriersDesRails />} />
            <Route path="/project/SAlt" element={<SAlt />} />
            <Route path="/project/EscapeGame" element={<EscapeGame />} />
            <Route path="/project/Meet" element={<Meet />} />
            <Route path="/project/OBC" element={<OBC />} />
            <Route path="/project/Intranet" element={<Intranet />} />
            <Route path="/project/ChatPitreMusical" element={<ChatPitreMusical />} />
            <Route path="/project/WispMadness" element={<WispMadness />} />
            <Route path="/project/WeatherWizardry" element={<WeatherWizardry />} />
            <Route path="/project/NDI" element={<NDI />} />
            <Route path="/project/GoPetSit" element={<GoPetSit />} />
            <Route path="/project/Mastermind" element={<Mastermind />} />
            <Route path="/project/Serveur" element={<Serveur />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
