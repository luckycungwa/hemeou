import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
// pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FooterSection from './components/FooterSection';
import ReadPost from './pages/ReadPost';

function App() {
  return (
    <Router>
    
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/post' element={<ReadPost/>} />
        
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;