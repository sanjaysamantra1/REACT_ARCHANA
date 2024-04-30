import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to='home' className='nav-link'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='aboutus' className='nav-link'>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='careers' className='nav-link'>Careers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='products' className='nav-link'>Products</NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}
