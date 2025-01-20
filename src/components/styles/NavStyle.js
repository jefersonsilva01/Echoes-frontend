import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = styled.nav`
  background-color: var(--BK-Main);
  height: auto;
  padding: 8px 16px;
  position: fixed;
  z-index: 2;
  margin-top: 0px;
  width: 100vw;

  & > div {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    & > #auth-links > ul > svg {
      display: none;
      cursor: pointer;
    };

    & > #auth-links > ul > svg:hover > path {
      fill: var(--Active-Main);
    };

    & > #auth-links > ul > li > #profile-img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      object-position: center;
      margin-right: 16px;
      border-radius: 50%;
      border: 1px solid #202020;
      transition: border 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        border: 4px solid var(--Active-Main);
      } 
    }

    // Tablet
    @media (max-width: 1040px) {
      & > #auth-links > ul > svg { 
        display: block;
      }
    }
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  & > #logo {
    height: 42px;
  }
`;

const ListItem = styled.li`
  margin: 0 15px;
  text-decoration: none;

  // Tablet
  @media (max-width: 1040px) {
    display: none;
  }
`;

const StyledLink = styled(HashLink)`
  text-decoration: none;
  font-weight: 500;
  color: var(--WT-Main-50);

  &:hover {
    color: var(--WT-Main);
  }
`;

const Search = styled.div`
  background-color: var(--WT-Main);
  padding: 6px 16px;
  border-radius: 4px;
  border: solid 2px var(--BK-Main-50);
  display: flex;
  align-items: center;
  width: max-content;
  margin-right: 15px;

  &:has(input:focus) {
    border: solid 2px var(--Action-Hover);
  }

  & > input {
    width: 250px;
    font-size: 16px;
    font-family: var(--Poppins);
    font-weight: 500;
    text-color: var(--BK-Main);
    border: none;
    outline: none;
    transition: width 0.3s ease-in-out;
    
    &:focus {
      width: 438px;
    }
  };

  & > svg:hover {
    cursor: pointer;
    & > path {
      fill: var(--Action);
    }
  };

  // Mobile
  @media (max-width: 620px) {
      display: none;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  color: var(--BK-Main);
  background-color: var(--Active-Main);
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    box-shadow: var(--Shadow);
    background-color: none;
    background-image: var(--Active-Main-Action)
  }
`;

const Menu = styled.div`
  background-color: var(--BK-Main-50);
  z-index: 1;
  position: fixed;
  top: 57px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  visibility: ${props => props.open && props.user !== undefined ? 'visible' : 'hidden'};
  transition: visibility 0.3s ease-in-out;
  ${'' /* height: calc(100vh - 72px); */}

  & > #menu-loggedout,
  & > #menu-loggedin {
    background-color: var(--WT-Main);
    width: fit-content;
    min-width: 236px;
    border-radius: 8px;
    padding: 8px 30px;
    position: fixed;
    top: 72px;
    right: 0;
    margin-right: 2%;
    ${'' /* overflow: hidden; */}
    height: ${props => props.open ? '200px' : '0px'};
    transition: height 0.3s ease-in-out;
  };

  & > #menu-loggedout > ul,
  & > #menu-loggedin > ul {
    list-style: none;
    height: 100%;
  };

  & > #menu-loggedout > ul > li,
  & > #menu-loggedin > ul > li {
    margin: 8px 0px;
  };

  & > #menu-loggedout > ul > li > a,
  & > #menu-loggedin > ul > li > a {
    color: var(--BK-Main-50);
  };

  & > #menu-loggedout > ul > li > a:hover,
  & > #menu-loggedin > ul > li > a:hover {
    color: var(--BK-Main);
  };

  & > #menu-loggedout > ul > li:last-child,
  & > #menu-loggedin > ul > li:last-child,
  & > #menu-loggedin > ul > li:nth-child(1),
  & > #menu-loggedin > ul > li:nth-child(2),
  & > #menu-loggedin > ul > li:nth-child(3) {
    display: none;
  };

  // Tablet 
  @media(max-width: 1040px){
    visibility: ${props => props.open ? 'visible' : 'hidden'};

    & > #menu-loggedin > ul > li:nth-child(1),
    & > #menu-loggedin > ul > li:nth-child(2),
    & > #menu-loggedin > ul > li:nth-child(3) {
      display: block;
    };

    & > #menu-loggedout {
      height: ${props => props.open ? '190px' : '0px'};
    }

    & > #menu-loggedin {
      height: ${props => props.open ? '290px' : '0px'};
    }
  }

  // Mobile
  @media(max-width: 620px) {
    & > #menu-loggedout,
    & > #menu-loggedin {
      position: fixed;
      width: 100vw;
      left: 0;
      margin-right: 0%;
      overflow: hidden;
    };

    & > #menu-loggedout {
      height: ${props => props.open ? '250px' : '0px'};
    }

    & > #menu-loggedin {
      height: ${props => props.open ? '350px' : '0px'};
    }

    & > #menu-loggedout > ul > li:last-child,
    & > #menu-loggedin > ul > li:last-child, 
    & > #menu-loggedin > ul > li:nth-child(1),
    & > #menu-loggedin > ul > li:nth-child(2),
    & > #menu-loggedin > ul > li:nth-child(3) {
      display: block;
    };

    & > #menu-loggedout > ul > li:last-child > div,
    & > #menu-loggedin > ul > li:last-child > div {
      display: flex;
      align-items: center;
    };

    & > #menu-loggedout > ul > li:last-child > div, 
    & > #menu-loggedin > ul > li:last-child > div {
      width: 100%;
    }

    & > #menu-loggedout > ul > li:last-child > div > input, 
    & > #menu-loggedin > ul > li:last-child > div > input {
      width: 95%; 
    };
  };
`;

export { NavBar, List, ListItem, StyledLink, Search, Button, Menu };
