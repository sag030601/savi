import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import "./App.css"
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <a href="/">Home</a> | <a href="/about">About</a> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
