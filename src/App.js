import React, { Component } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

class App extends Component {
  render() {  
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;