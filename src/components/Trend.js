import React from "react";
import { TrendSection } from "./styles/TrendStyle";

import Card from "./Card";

const Trend = (props) => {
  return (
    <TrendSection id="trend">
      <div id="trend-container">
        <h2>Trends</h2>
        <div id="trend-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {
        props.user ? (
          <div id="footer-shadow"></div>
        ) : ("")
      }
    </TrendSection>
  )
}

export default Trend;