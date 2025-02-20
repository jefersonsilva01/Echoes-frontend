import React, { useEffect, useState } from "react";
import { HeroSection } from "./styles/HeroStyle";
import MainCard from "./MainCard";

const Hero = props => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    fetch("https://ipwho.is/")
      .then(response => response.json())
      .then(data => setRegion(`${data.country} | ${data.city} - ${data.country_code}`))
      .catch(error => console.error("Erro ao obter localização:", error));
  }, [])

  const date = new Date()

  const day = String(date.getDate()).padStart(2, '0');
  const month = new Intl.DateTimeFormat((navigator.language || navigator.userLanguage), { month: "short" }).format(date).toUpperCase();
  const year = date.getFullYear();


  return (
    <HeroSection id="hero">
      <div>
        <h1>ECHOES</h1>

        <p>{region}, {month} {day}-{year}</p>

        <p>Stories, trends and insights from your at ECHOES //</p>

        <MainCard />
      </div>
    </HeroSection>
  )
}

export default Hero;