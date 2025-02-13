import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar, List, ListItem, StyledLink, Search, Button, Menu } from './styles/NavStyle';

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
              <ListItem>
                <StyledLink to="/about">About</StyledLink>
              </ListItem>
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
              <Search>
                <input type="text" placeholder="Search" maxLength="30" size="30" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.502 2C5.80753 2 2.00195 5.80558 2.00195 10.5C2.00195 15.1944 5.80753 19 10.502 19C12.4884 19 14.3169 18.3176 15.7637 17.176L20.5877 22C20.9783 22.3905 21.6114 22.3905 22.002 22C22.3925 21.6095 22.3925 20.9763 22.002 20.5858L17.1779 15.7618C18.3196 14.3149 19.002 12.4865 19.002 10.5C19.002 5.80558 15.1964 2 10.502 2ZM4.00195 10.5C4.00195 6.91015 6.9121 4 10.502 4C14.0918 4 17.002 6.91015 17.002 10.5C17.002 12.2952 16.2755 13.9188 15.0981 15.0962C13.9208 16.2736 12.2972 17 10.502 17C6.9121 17 4.00195 14.0899 4.00195 10.5Z" fill="#20202080" />
                </svg>
              </Search>
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
        {
          props.user !== undefined ? (
            <div id="menu-loggedin">
              <ul>
                <li>
                  <StyledLink to="/about" onClick={showHideMenu}>About</StyledLink>
                </li>
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
                  <Search>
                    <input type="text" placeholder="Search" maxLength="30" size="30" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.502 2C5.80753 2 2.00195 5.80558 2.00195 10.5C2.00195 15.1944 5.80753 19 10.502 19C12.4884 19 14.3169 18.3176 15.7637 17.176L20.5877 22C20.9783 22.3905 21.6114 22.3905 22.002 22C22.3925 21.6095 22.3925 20.9763 22.002 20.5858L17.1779 15.7618C18.3196 14.3149 19.002 12.4865 19.002 10.5C19.002 5.80558 15.1964 2 10.502 2ZM4.00195 10.5C4.00195 6.91015 6.9121 4 10.502 4C14.0918 4 17.002 6.91015 17.002 10.5C17.002 12.2952 16.2755 13.9188 15.0981 15.0962C13.9208 16.2736 12.2972 17 10.502 17C6.9121 17 4.00195 14.0899 4.00195 10.5Z" fill="#20202080" />
                    </svg>
                  </Search>
                </li>
              </ul>
            </div>
          ) : (
            <div id="menu-loggedout">
              <ul>
                <li>
                  <StyledLink to="/about" onClick={showHideMenu}>About</StyledLink>
                </li>
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
                  <Search>
                    <input type="text" placeholder="Search" maxLength="30" size="30" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.502 2C5.80753 2 2.00195 5.80558 2.00195 10.5C2.00195 15.1944 5.80753 19 10.502 19C12.4884 19 14.3169 18.3176 15.7637 17.176L20.5877 22C20.9783 22.3905 21.6114 22.3905 22.002 22C22.3925 21.6095 22.3925 20.9763 22.002 20.5858L17.1779 15.7618C18.3196 14.3149 19.002 12.4865 19.002 10.5C19.002 5.80558 15.1964 2 10.502 2ZM4.00195 10.5C4.00195 6.91015 6.9121 4 10.502 4C14.0918 4 17.002 6.91015 17.002 10.5C17.002 12.2952 16.2755 13.9188 15.0981 15.0962C13.9208 16.2736 12.2972 17 10.502 17C6.9121 17 4.00195 14.0899 4.00195 10.5Z" fill="#20202080" />
                    </svg>
                  </Search>
                </li>
              </ul>
            </div>
          )
        }
      </Menu>
    </>
  )
}

export default Nav;