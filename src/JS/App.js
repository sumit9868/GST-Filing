import React, { useEffect } from "react";
import "../CSS/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import PersonalHome from "./PersonalHome";
import Info from "./Info";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        //not logged in
        console.log("No user found");
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Header />
            <Signup />
            <Footer />
          </Route>

          <Route path="/dashboard">
            <Header />
            {user ? <PersonalHome /> : <Info/>}
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Carousel />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
