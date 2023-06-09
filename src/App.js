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
            <li><Link to="Portfolio/">Home</Link></li>
            <li><Link to="Portfolio/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route id="Home" path="Portfolio/" element={<Home/>} />
            <Route id="Contact" path="Portfolio/:id" element={<Contact/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;