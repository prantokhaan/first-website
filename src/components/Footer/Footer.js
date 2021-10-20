import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // Styles
  const socialLinkStyle = {
    display: "inline-block",
    border: "1px solid transparent",
    height: "35px",
    width: "35px",
    color: "#000",
    lineHeight: "35px",
    textAlign: "center",
    fontSize: "16px",
    transition: "all 0.5s ease",
    borderRadius: "50%",
  };
  const quickLinkStyle = {
    color: "black",
    padding: "8px 0",
    textTransform: "capitalize",
    fontSize: "16px",
    textDecoration: "none",
  };
  return (
    <div className="bg-light">
      <div className=" container row mx-auto p-4 mt-4">
        {/* About Us  */}
        <div className="col-md-4 footer-item px-5">
          <h2>About us</h2>
          <p className="text-capitalize text-left">
            Minute Clinic is an Online Hospital where you can get treated by our
            Best Doctors instantly.
          </p>
          {/* Social Icons  */}
          <div className="mt-3">
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link style={socialLinkStyle} to="#">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
        {/* Quicklinks  */}
        <div className="col-md-4 footer-item px-5 quicklinks">
          <h2>Quicklinks</h2>
          <ul>
            <li>
              <Link style={quickLinkStyle} to="/courses">
                Doctors
              </Link>
            </li>
            <li>
              <Link style={quickLinkStyle} to="/about">
                about us
              </Link>
            </li>
            <li>
              <Link style={quickLinkStyle} to="/contact">
                contact us
              </Link>
            </li>
            <li>
              <Link style={quickLinkStyle} to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us  */}
        <div className="col-md-4 footer-item px-5">
          <h2>Contact us</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh
          </p>
          <p>
            <i className="fas fa-phone"></i> +8801856789856
          </p>
          <p className="text-lowercase">
            <i className="fas fa-envelope"></i> contact@minuteclinic.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
