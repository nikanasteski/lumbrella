import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Event from './pages/event';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Projects from './pages/projects';
import './styles.css';

export default function App() {
  return (
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  ); 
}