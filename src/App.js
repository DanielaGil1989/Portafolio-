import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Education from './paginas/Education';
import Projects from './paginas/Projects';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>

    </Router>
  );
}

export default App;
