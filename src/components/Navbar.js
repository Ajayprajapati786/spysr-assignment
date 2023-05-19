import React from 'react';
import logo from '../images/bitpesa-logo.svg';
import './style.css'

const Navbar = () => {
  return (
    <div className='mainNavbarDiv'>
        <nav className="navbar navbar-expand-md navbar-light container">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="BitPesa Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mr-5" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item  text-center">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item   text-center">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item   text-center">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item   text-center ">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <hr/>
    </div>
  );
};

export default Navbar;
