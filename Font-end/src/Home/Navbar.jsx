import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import Title from './Title'
import { Link } from 'react-router-dom'

function Navbar({showtitle=true}) {
  return (
    <>
      <div className="main-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="30" height="30" className="d-inline align-text-top ms-3"/>
                <h4 className="d-inline ms-3 logo-title">Bookies</h4>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                       <NavLink to='/'> Home</NavLink>
                  </li>
                  <li className="nav-item">
                       <NavLink to='/Books'>Books</NavLink> 
                  </li>
                  <li className="nav-item">
                        <NavLink to='/Dashboard'>DashBoard</NavLink>    
                  </li>
                  <li className="nav-item">
                        <NavLink to='/profile&earings'>Profile/Earnings</NavLink>    
                  </li>
                </ul>
                <form className="d-flex me-4" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
        </nav>
      </div>
      {showtitle && <Title/>} 
    </>
  )
}

export default Navbar