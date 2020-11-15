import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../Media/logo.png";
import Navbar from "react-bootstrap/Navbar";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "../CSS/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import { auth } from "./firebase";

function Header() {

  const history = useHistory();
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


    history.replace("/");
  };

  return (
    <>
      <Navbar className="headerNav" >

        <Navbar.Brand className="headerLeftContainer">
          <Link to="/" className="headerLeftContainer__link"  >
            <img src={logo} className="companyLogo" alt="logo" />{" "}
            <span className="companyName"> Easy GST </span>
          </Link>
        </Navbar.Brand>


        <div className="headerRightContainer">
          {user ? (
            <div className="avtarBox">
              {/* icons */}
              < Link className="avtar__link" to="/dashboard">
                <Avatar className="avtarBox__img" src={auth.currentUser.photoURL} />
                <span className="avtarBox__span" onClick={signout}>Signout</span>
              </Link>
            </div>

          ) : (
              <div className="signup__div">
                <Link to="/signup" className="signup__link">
                  < PersonAddIcon className="personal__img" />
                  <span className="headerRightContainer__span">Signup</span>
                </Link>
              </div>
            )}
        </div>
      </Navbar>
      
    </>
  );
}

export default Header;
