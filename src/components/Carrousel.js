import React from "react";
import { FreshSection } from "./styles/CarrouselStyle";
import Card from "./Card";

const Carrousel = () => {
  return (
    <FreshSection>
      <div id="container">
        <h2>Fresh</h2>

        <div id="carrousel-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </FreshSection>
  )
}

export default Carrousel;