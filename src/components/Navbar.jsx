import React, { useContext } from "react";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { Link } from 'react-router-dom';

 


const Navbar = () => {
     
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <SiAmazonsimpleemailservice className="brand-icon" />
            <span className="brand-text">Inbox Intelligence</span>
          </Link>
          <button
            className="navbar-toggler bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list-validation">
                    List validation
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Integrat">
                    Integrations
              </Link>
              </li>
            </ul>
          </div>
          <div className="button">
             <Link to="/signin">
               <button type="button" className="btn" >Login</button>
             </Link>
             <Link to="/signup"><button type="button" className="btn bt-1" >Sign Up</button></Link>
            
          </div>
        </div>
         
      </nav>
    </div>
  );
};

export default Navbar;
