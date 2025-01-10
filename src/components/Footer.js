import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { HashLink } from "react-router-hash-link";
import { FooterSection } from "./styles/FooterStyle";

const Footer = () => {
  return (
    <FooterSection>
      <div id="footer-container">
        <ul>
          <li>
            <img id="rotate" src="./assets/Letters.png" alt="Circle text" />
            <HashLink smooth to="/#hero">
              ECHOES
            </HashLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <HashLink smooth to="/#fresh">Fresh</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#trend">Trends</HashLink>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <a target="blank" href="https://github.com/jefersonsilva01/Echoes-frontend">
              <img src="./assets/Github.png" alt="Github Logo" />
            </a>
          </li>
        </ul>
      </div>
    </FooterSection>
  )
}

export default Footer;