import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/Home'
import NavBar from './Components/Navbar'
import Profile from './views/Profile'
import Question from './views/Question'

//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//AWS Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  withAuthenticator
} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig);

function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/question/:title/:id" component={Question} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default withAuthenticator(App);
