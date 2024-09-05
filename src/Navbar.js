import React from 'react'
import './Css/Home.css';
import logo from './assets/images/logo.png'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
          </div>
          <ul>
            <img src={logo} alt="Fertisense Logo" className='logoimg' />
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/library">Plant library</NavLink></li>
            <li><NavLink to="/check">Test Fertilizer</NavLink></li>
            <li><NavLink to="/features">Features</NavLink></li>
            <li><NavLink to="/Support">Support</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar