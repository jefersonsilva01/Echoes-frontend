import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  background-color: var(--BK-Main);
  display: flex;
  padding: 0 2%;
  height: 72px;
  ${'' /* max-width: 1440px; */}
  align-items: center;
  justify-content: space-between;

  & > #auth-links > ul > svg {
    display: none;
  };

  & > #auth-links > ul > svg:hover {
    cursor: pointer;
  };

  & > #auth-links > ul > svg:hover > path {
    fill: var(--Active-Main);
  };

  // Tablet
  @media (max-width: 1040px) {
    & > #auth-links > ul > svg { 
      display: block;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%
`;

const ListItem = styled.li`
  margin: 0 15px;
  text-decoration: none;

  // Tablet
  @media (max-width: 1040px) {
    display: none;
  }
`;

const Logo = styled.img`
  margin-left: 0px;
`;

const StyledLink = styled(Link)`
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
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  height: 100%;

  & > #menu {
    background-color: var(--WT-Main);
    width: fit-content;
    min-width: 236px;
    border-radius: 8px;
    padding: 8px 30px;
    position: relative;
    top: 72px;
    float: right;
    margin-right: 2%;
    overflow: hidden;
    height: ${props => props.open ? '200px' : '0px'};
    transition: height 0.3s ease-in-out;
  };

  & > #menu > ul {
    list-style: none;
    height: 100%;
  };

  & > #menu > ul > li {
    margin: 8px 0px;
  };

  & > #menu > ul > li > a {
    color: var(--BK-Main-50);
  };

  & > #menu > ul > li > a:hover {
    color: var(--BK-Main);
  };

  & > #menu > ul > li:last-child {
    display: none;
  };

  // Mobile
  @media(max-width: 620px) {
    & > #menu {
      width: 100vw;
      margin-right: 0%;
      overflow: hidden;
      height: ${props => props.open ? '240px' : '0px'};
      transition: height 0.3s ease-in-out;
    };

    & > #menu > ul > li:last-child {
      display: block;
    };

    & > #menu > ul > li:last-child > div {
      display: flex;
      align-items: center;
    };

    & > #menu > ul > li:last-child > div{
      width: 100%;
    }

    & > #menu > ul > li:last-child > div > input {
      width: 95%; 
    };
  };
`;

export { NavBar, List, ListItem, StyledLink, Logo, Search, Button, Menu };
