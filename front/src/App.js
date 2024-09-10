import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
