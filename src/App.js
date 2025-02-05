import React, { useState, useEffect, useMemo } from 'react';
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

import AuthService from './components/auth/auth-service';
import ProtectedRoute from './components/auth/protected-route';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const service = useMemo(() => new AuthService(), []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Verifica os parâmetros da URL
        const params = new URLSearchParams(window.location.search);
        const userData = params.get('user');

        if (userData) {
          setLoggedInUser(JSON.parse(userData));
        } else {
          // Se não houver dados no URL, verifica via serviço de autenticação
          const response = await service.verify();
          if (response) {
            setLoggedInUser(response);
          } else {
            setLoggedInUser(false);
          }
        }
      } catch (err) {
        console.error("Erro ao verificar usuário:", err);
        setLoggedInUser(false);
      }
    };

    fetchUser();
  }, [service]);

  const getTheUser = (userObj) => {
    setLoggedInUser(userObj);
  };

  if (loggedInUser) {
    return (
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
            exact path="/profile"
            user={loggedInUser}
            getUser={getTheUser}
            component={Profile} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route
            exact path="/signup"
            render={() => <SignUp getUser={getTheUser} />} />

          <Route
            exact path="/signin"
            render={() => <SignIn getUser={getTheUser} />} />
        </Switch>
      </div>
    );
  }
};

export default App;
