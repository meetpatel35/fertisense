import React from 'react'
import './Css/Home.css';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
      
      <section className="hero">
        <div className="hero-content">
          <h1>FERTISENSE</h1>
          <p>Monitor and optimize your fertilizer's pH and nutrient levels for healthier plants.</p>
          <Link to="/Check" className="btn">Get started</Link>
        </div>
      </section>
    </>
  )
}

export default App
