import React from 'react'
import '../CSS/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>

          <Route path="/signup">
            <Header />
            <Signup />
            <Footer/>
          </Route>

          <Route path="/">
            <Header />
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
