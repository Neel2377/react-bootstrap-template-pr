import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
            <h1 className="sitename">GP</h1>
            <span>.</span>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/" className="active">Home<br /></Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                <ul>
                  <li><Link to="#">Dropdown 1</Link></li>
                  <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                    <ul>
                      <li><Link to="#">Deep Dropdown 1</Link></li>
                      <li><Link to="#">Deep Dropdown 2</Link></li>
                      <li><Link to="#">Deep Dropdown 3</Link></li>
                      <li><Link to="#">Deep Dropdown 4</Link></li>
                      <li><Link to="#">Deep Dropdown 5</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Dropdown 2</Link></li>
                  <li><Link to="#">Dropdown 3</Link></li>
                  <li><Link to="#">Dropdown 4</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <Link className="btn-getstarted" to="index.html#about">Get Started</Link>
        </div>
      </header>

    </>
  )
}

export default Header