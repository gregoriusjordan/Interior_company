import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
import Contact from './Pages/Contact';
import Design from './Pages/Design';
import Services from './Pages/Services';
import './App.css';
import 'aos/dist/aos.css';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/design" element={<Design />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </Router>
  );
};

export default App;