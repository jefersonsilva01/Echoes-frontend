import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage';
import HomePage2 from './components/HomePage2';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import AuthService from './components/auth/auth-service';
import ProtectedRoute from './components/auth/protected-route';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.verify()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className='App'>
          <ProtectedRoute
            user={this.state.loggedInUser}
            component={HomePage2}
            getUser={this.getTheUser}
          />
        </div>
      );
    } else {
      return (
        <div className="App" >
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route
              exact path="/signup"
              render={() => <SignUp getUser={this.getTheUser} />} />

            <Route
              exact path="/signin"
              render={() => <SignIn getUser={this.getTheUser} />} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
