import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useStateValue } from "./StateProvider";
import PersonalHome from "./PersonalHome";


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
      <div>
        <span>Sign up page</span>
        <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default Signup;
