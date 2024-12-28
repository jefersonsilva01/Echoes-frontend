import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FooterSection } from "./styles/FooterStyle";

const Footer = () => {
  return (
    <FooterSection>
      <div id="footer-container">
        <ul>
          <li>
            <img id="rotate" src="./assets/Letters.png" alt="Circle text" />
            <Link>
              ECHOES
            </Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Fresh</Link>
          </li>
          <li>
            <Link>Trends</Link>
          </li>
          <li>
            <Link>Sign in</Link>
          </li>
          <li>
            <Link>
              <img src="./assets/Github.png" alt="Github Logo" />
            </Link>
          </li>
        </ul>
      </div>
    </FooterSection>
  )
}

export default Footer;