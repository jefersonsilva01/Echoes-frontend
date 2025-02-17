import React from "react";
import { HeroSection } from "./styles/HeroStyle";
import MainCard from "./MainCard";

const Hero = props => {
  return (
    <HeroSection id="hero">
      <div>
        <h1>ECHOES</h1>

        <p>Brazil | São Paulo - SP,  AGO 20-2024 </p>

        <p>Stories, trends and insights from your at ECHOES //</p>

        <MainCard />
      </div>
    </HeroSection>
  )
}

export default Hero;