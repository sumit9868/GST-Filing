import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useStateValue } from "./StateProvider";
import PersonalHome from "./PersonalHome";
import logo from "../Media/logo.png";
import '../CSS/Signup.css'


var uiConfig = {
  signInflow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === "password") {
        try {
          await authResult.user.sendEmailVerification();
          console.log("Check your Email");
        } catch (e) {
          console.log(e);
        }
      }
      return false;
    },
  },
};

function Signup() {

  const [{ user }, dispatch] = useStateValue();
  if (user) {
    return (
      <>
        <span>welcome {user.displayName}</span> <br />
        <PersonalHome/>
      </>
    );
  } else {
    return (
      <div className="signup">
        <div className="signupText">
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="signupBox">
        <img
            src={logo}
            className="signupLogo"
            alt="logo"
          />
          <h3>Some random Text1</h3>
          <h3>Some random Text2</h3>
        <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
    );
  }
}

export default Signup;
