
import React from 'react';
import Navbar from './components/Navbar';
import Heroine from './components/Heroine'; // <-- updated import
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Heroine /> {/* updated component */}
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
