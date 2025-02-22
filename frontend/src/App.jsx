// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"; // Remove .jsx
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import Restaurant from './componets/RestaurantCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
// Add this route to your existing routes
<Route path="/restaurant/:id" element={<Restaurant />} />

export default App;