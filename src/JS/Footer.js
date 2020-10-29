import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../Media/logo.png";
import "../CSS/Footer.css";

function Footer() {

  return (
    <Navbar className="footerNav" bg="dark">

      <Navbar.Brand className="footerLeftContainer">
        <Link to="/" className="footerLeftContainer__link"  >
          <img src={logo} className="companyLogo" alt="logo" />{" "}
          <span className="companyName"> Easy GST </span>
        </Link>
      </Navbar.Brand>


      <div className="footerRight">
        <span className="developersTitle">Developed by</span>
        <div className="developers">

          <a
            className={"footer__link"}
            href={`mailto: sumitsaurabh9868@gmail.com`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Sumit Saurabh
          </a>

          <a
            className={"footer__link"}
            href={`mailto: prabhjotlamba2001@gmail.com `}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Prabhjot Singh
            </a>

          <a
            className={"footer__link"}
            href={`mailto: abhijeetvarun@gmail.com`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Abhijeet Varun
            </a>

        </div>
      </div>
    </Navbar>

  )
}

export default Footer
