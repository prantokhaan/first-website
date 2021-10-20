import React from 'react';
import './NavBar.css'
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';


const NavBar = () => {
  const {user,  signOut, setUser, setError, logOut} = useAuth();



  const navLinkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "10px",
    padding: "10px 0",
    fontSize: "16px",
  };
     
    return (
      <div>
        <nav className="navbar ">
          <div className="d-flex container-fluid">
            <div className="ms-5 text-uppercase d-flex">
              <i className="fas fa-clinic-medical  ms-5 ps-5 pe-2"></i>
              <h3 className="logo color-2">Minute Clinic</h3>
            </div>
            {/* Navigation Child  */}
            <div className=" pe-3 d-flex navbar-links">
              <NavLink style={navLinkStyle} to="/home">
                Home
              </NavLink>
              <NavLink style={navLinkStyle} to="/doctors">
                Doctors
              </NavLink>
              <NavLink style={navLinkStyle} to="/plans">
                Packages
              </NavLink>
              <NavLink style={navLinkStyle} to="/about">
                About Us
              </NavLink>
              <NavLink style={navLinkStyle} to="/contact">
                Contact Us
              </NavLink>
              <div className="mt-2 conditional-button">
                {user.email || user.displayName ? (
                  <div className="d-flex">
                    <NavLink to="/profile">
                      <button className="secondary-button transition me-2 text-capitalize">
                        <i className="fas fa-user"></i> {user.displayName}
                      </button>
                    </NavLink>
                    <button
                      onClick={logOut}
                      className="primary-button ms-0 transition"
                    >
                      <i className="fas fa-unlock"></i> LogOut
                    </button>
                  </div>
                ) : (
                  <div>
                    <NavLink to="/login">
                      <button className="primary-button transition">
                        <i className="fas fa-lock"></i> Login
                      </button>
                    </NavLink>
                    <NavLink to="/register">
                      <button className="secondary-button transition">
                        <i className="fas fa-key"></i> Register
                      </button>
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;