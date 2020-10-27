import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import StyleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


var uiConfig = {
    signInflow: "popup",
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {

        signInSuccessWithAuthResult: async (authResult) => {

            const userInfo = authResult.additionalUserInfo;

            if(userInfo.isNewUser && userInfo.providerId === 'password'){
                try {
                    
                    await authResult.user.sendEmailVerification() ; 
                    console.log('Check your Email') ;
                } catch (e) {
                    console.log(e) ;
                }
            }
            return false;
        }
    }
};

const signOut = () => {
    firebase.auth().signOut().then(function () {
        console.log('Successfully Signout');
    }).catch( function () {
        console.log('Error in Signout');
    })

}


function Signup() {
    const [user, setUser] = useState();
    useEffect(() => {
        // const user = firebase.auth().currentUser;  // to recieve the info of the current user 
        
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
        });
        return authObserver;
    })

    console.log( 'user' , user)

    if (user) {
        return (
            <>
                <span>welcome  {user.displayName}</span> <br />
                <small> {user.email} </small>
                <button onClick={signOut}>Sign out</button>
            </>
        )
    } else {

        return (
            <div>
                <span>Sign up page</span>
                <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
}

export default Signup