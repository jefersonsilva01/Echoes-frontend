import React from "react";
import { FreshSection } from "./styles/CarrouselStyle";
import Card from "./Card2";

const Carrousel = () => {
  return (
    <FreshSection id="fresh">
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