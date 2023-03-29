import React, { Component } from "react";
import { Link, HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

class App extends Component {
  render() {  
    return (
      <Router>
        <div className="header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route id="Home" path="/" element={<Home/>} />
            <Route id="Contact" path="/:id" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;