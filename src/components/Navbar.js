import React from 'react'

function Navbar({brand}){
  return (
      <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">{brand}</a>
          </div>
      </nav>
  )
}

export {Navbar} 