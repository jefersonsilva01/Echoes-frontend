import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import NewArticle from './components/NewArticle';
import MyArticles from './components/MyArticles';
import Article from './components/Article';
import EditArticle from './components/EditArticle';
import Bookmarks from './components/Bookmarks';
import BookmarkArticles from './components/BookmarkArticles';

import ProtectedRoute from './components/auth/protected-route';
import AuthService from './components/auth/auth-service';
const service = new AuthService();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(() => {
    // Verifica os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const userData = params.get('user');

    if (userData) {
      setLoggedInUser(JSON.parse(userData));
      setLoading(false);
      return;
    }

    service.verify()
      .then(response => {
        setLoggedInUser(prevUser =>
          JSON.stringify(prevUser) !== JSON.stringify(response) ? response : prevUser
        );
      })
      .catch(() => {
        setLoggedInUser(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const getTheUser = (userObj) => {
    setLoggedInUser(userObj);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    (loggedInUser)
      ? (
        <div className='App'>
          <Nav
            user={loggedInUser}
            getUser={getTheUser} />

          <Switch>
            <ProtectedRoute
              exact path="/"
              user={loggedInUser}
              component={HomePage} />

            <ProtectedRoute
              exact path="/new-article"
              user={loggedInUser}
              component={NewArticle} />

            <ProtectedRoute
              exact path="/my-articles"
              user={loggedInUser}
              getUser={getTheUser}
              component={MyArticles} />

            <ProtectedRoute
              exact path="/article"
              user={loggedInUser}
              component={Article} />

            <ProtectedRoute
              exact path="/edit-article"
              user={loggedInUser}
              component={EditArticle} />

            <ProtectedRoute
              exact path="/bookmarks"
              user={loggedInUser}
              component={Bookmarks} />

            <ProtectedRoute
              exact path="/profile"
              user={loggedInUser}
              getUser={getTheUser}
              component={Profile} />

            <ProtectedRoute
              exact path="/bookmarks-articles"
              user={loggedInUser}
              getUser={getTheUser}
              component={BookmarkArticles} />
          </Switch>
        </div>
      )

      : (
        <div className='App'>
          <Switch>
            <Route
              exact path="/"
              component={HomePage} />

            <Route
              exact path="/signup"
              render={() => <SignUp getUser={getTheUser} />} />

            <Route
              exact path="/signin"
              render={() => <SignIn getUser={getTheUser} />} />

            <Route
              path="/new-article"
              component={HomePage} />

            <Route
              path="/my-articles"
              component={HomePage} />

            <Route
              path="/article"
              component={HomePage} />

            <Route
              path="/edit-article"
              component={HomePage} />

            <Route
              exact path="/bookmarks"
              component={HomePage} />

            <Route
              path="/profile"
              component={HomePage} />
          </Switch>
        </div>
      )

  );
};

export default App;
