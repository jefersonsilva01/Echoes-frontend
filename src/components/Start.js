import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { StartSection } from "./styles/StartStyle";

const Start = () => {
  return (
    <StartSection>
      <div id="start-container">
        <img src="./assets/Illustration 1.png" alt="Spaceman" />
        <div id="call-to-action">
          <h1>Start Creating</h1>
          <Link to="/signup">Get Started</Link>
        </div>
        <img src="./assets/Illustration 2.png" alt="Writer" />
      </div>
    </StartSection>
  )
}

export default Start;