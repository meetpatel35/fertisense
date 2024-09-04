import React from 'react'
import './Css/Home.css';
import logo from './assets/images/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
          </div>
          <ul>
            <img src={logo} alt="Fertisense Logo" className='logoimg'/>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Library">Plant library</Link></li>
            <li><Link to="/Check">Test Fertilizer</Link></li>
            <li><Link to="/">Features</Link></li>
            <li><Link to="/">Support</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
