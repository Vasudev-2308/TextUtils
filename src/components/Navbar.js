import React from 'react'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (
      <div className="Navigation">
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              <strong>Text Utils</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Alter Text
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li> */}
              </ul>
              <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <input
                onClick={props.toggleMode}
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeSwitch"
                />
                <label htmlFor="darkModeSwitch">{props.text}</label>
              </div>
              {/* <form className="d-flex">
        <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
}
