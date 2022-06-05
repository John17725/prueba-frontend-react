import React from 'react'
import './Navbar.css';
function Navbar({brand}){
  return (
      <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">{brand}</a>
          </div>
      </nav>
  )
}

export {Navbar} 