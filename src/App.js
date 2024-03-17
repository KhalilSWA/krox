import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import AdminDash from './pages/AdminDash.jsx';
import 'rsuite/dist/rsuite-no-reset.min.css';
import NvExpedition from './pages/NvExpedition.jsx';
import NavBar from './components/NavBar.js';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Nv-expedition" element={<NvExpedition />} />
          <Route path="/admindash" element={<AdminDash />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;