import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar, List, ListItem, StyledLink, Button, Menu } from './styles/NavStyle';
import InputSearch from './InputSearch';

import AuthService from "./auth/auth-service";

const Nav = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const service = new AuthService();

  const signout = e => {
    props.getUser(false);
    service.signout()
  }

  const showHideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <NavBar>
        <div>
          <div id="menulinks">
            <List>
              <Link id="logo" to="/">
                <img src="./assets/Logo.png" alt="Logo Echoes" />
              </Link>
              {/* <ListItem>
                <StyledLink to="/about">About</StyledLink>
              </ListItem> */}
              <ListItem>
                <StyledLink smooth to="/#fresh">Fresh</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink smooth to="/#trend">Trends</StyledLink>
              </ListItem>
            </List>
          </div>
          <div id="auth-links">
            <List>
              <InputSearch />
              {
                props.user ? (
                  <>
                    <ListItem>
                      <StyledLink to="/" onClick={signout}>Sign Out</StyledLink>
                    </ListItem>
                    <ListItem onClick={showHideMenu}>
                      <img id="profile-img" src={props.user.imgPath} alt="Avatar" />
                    </ListItem>
                  </>
                ) : (
                  <>
                    <ListItem>
                      <StyledLink to="/signin">Sign In</StyledLink>
                    </ListItem>
                    <ListItem>
                      <Button to="/signup">Get Started</Button>
                    </ListItem>
                  </>
                )
              }
              <svg

                onClick={showHideMenu}

                width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55229 20.5523 8 20 8H4C3.44772 8 3 7.55229 3 7Z" fill="#FFF" />
                <path d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5522 3.44772 13 4 13H20C20.5523 13 21 12.5522 21 12C21 11.4477 20.5523 11 20 11H4Z" fill="#FFF" />
                <path d="M3 17C3 16.4477 3.44772 16 4 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17Z" fill="#FFF" />
              </svg>
            </List>
          </div>
        </div>
      </NavBar>
      <Menu open={isMenuOpen} onClick={showHideMenu} user={props.user}>
        <div id="menu-container">
          {
            props.user !== undefined ? (
              <div id="menu-loggedin">
                <ul>
                  {/* <li>
                  <StyledLink to="/about" onClick={showHideMenu}>About</StyledLink>
                </li> */}
                  <li>
                    <StyledLink smooth to="/#fresh" onClick={showHideMenu}>Fresh</StyledLink>
                  </li>
                  <li>
                    <StyledLink smooth to="/#trend" onClick={showHideMenu}>Trends</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/new-article" onClick={showHideMenu}>New</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/my-articles" onClick={showHideMenu}>My Articles</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/bookmarks" onClick={showHideMenu}>Bookmarks</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/profile" onClick={showHideMenu}>Profile</StyledLink>
                  </li>
                  <li>
                    <StyledLink onClick={signout} to="/">Sign Out</StyledLink>
                  </li>
                  <li>
                    <InputSearch />
                  </li>
                </ul>
              </div>
            ) : (
              <div id="menu-loggedout">
                <ul>
                  {/* <li>
                  <StyledLink to="/about" onClick={showHideMenu}>About</StyledLink>
                </li> */}
                  <li>
                    <StyledLink smooth to="/#fresh" onClick={showHideMenu}>Fresh</StyledLink>
                  </li>
                  <li>
                    <StyledLink smooth to="/#trend" onClick={showHideMenu}>Trends</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/signin" onClick={showHideMenu}>Sign In</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/signup" onClick={showHideMenu}>Get Started</StyledLink>
                  </li>
                  <li>
                    <InputSearch />
                  </li>
                </ul>
              </div>
            )
          }
        </div>
      </Menu>
    </>
  )
}

export default Nav;