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

export { NavBar, List, ListItem, StyledLink, Logo, Search, Button };