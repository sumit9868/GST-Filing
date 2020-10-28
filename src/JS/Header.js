import React from "react";
import { Link } from "react-router-dom";
import logo from "../Media/logo.png";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import { auth } from "./firebase";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  console.log("Hey user");
  console.log(user);

  const signout = () => {
    auth
      .signOut()
      .then(function () {
        console.log("Successfully Signout");
      })
      .catch(function () {
        console.log("Error in Signout");
      });
  };

  return (
    <>
      <Navbar className="navbar" bg="dark">
        <Navbar.Brand className="leftContainer" href="/">
          <img
            src={logo}
            className="companyLogo"
            alt="logo"
          />{" "}
          <span className="companyName"> Easy GST </span>
        </Navbar.Brand>

        <div className="rightContainer">
          {user ? (
            <div>
              {/* icon */}
              <Avatar src={auth.currentUser.photoURL} />
              <div onClick={signout}>Signout</div>
            </div>
          ) : (
            <div>
              <Link to="/signup">
                <div className="rightContainerLink">Signup</div>
              </Link>
            </div>
          )}

          {/* <Link to="/" className="homeLink">
                    <div className="home__span">
                        Home
                        </div>
                    </Link>
                    <Link to ="/signup" className="accountLink">
                        <div className="account">Account</div>
                    </Link> */}
        </div>
      </Navbar>
    </>
  );
}

export default Header;
