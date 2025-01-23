import React from "react";
import { TrendSection } from "./styles/TrendStyle";

import Card from "./Card2";

const Trend = (props) => {
  return (
    <TrendSection id="trend">
      <h2>Trends</h2>
      <div id="trend-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </TrendSection>
  )
}

export default Trend;