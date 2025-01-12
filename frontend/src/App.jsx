import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <a href="/">Home</a> | <a href="/about">About</a> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
