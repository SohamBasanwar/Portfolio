import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";


import './stylesheets/home.css'
import './stylesheets/projects.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/about.css'
import './stylesheets/myself.css'
import './stylesheets/achievements.css'
import './stylesheets/contact.css'
import './stylesheets/SmokeText.css';
import './stylesheets/WaveAnimation.css';
import './stylesheets/WavingBlob.css';
import './stylesheets/credits.css';

import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/credits" element={<Credits />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
