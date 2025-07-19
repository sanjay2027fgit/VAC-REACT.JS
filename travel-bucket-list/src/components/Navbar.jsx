// src/components/Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        nav.style.background = 'rgba(255, 255, 255, 0.7)';
      } else {
        nav.style.background = 'rgba(255, 255, 255, 0.25)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-title">🌍 Travel Bucket List</div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/bucketlist" className="nav-btn">My Bucket List</Link>
        <Link to="/signup" className="nav-btn">Sign Up</Link>
        <Link to="/login" className="nav-btn">Login</Link>
      </div>
    </nav>
  );
}
