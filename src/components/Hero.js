import React from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "./styles/HeroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <h1>ECHOES</h1>


      <p>Brazil | São Paulo - SP,  AGO 20-2024 </p>


      <p>Stories, trends and insights from your at ECHOES //</p>


      <div id="trend-news-card">
        <div id="trend-news-img">
          <Link to="/"></Link>
        </div>

        <div id="news-info">
          <div id="news-data">
            <span>By: John Doe</span>
            <span>AGO, 20-2024</span>
          </div>

          <h1>Lorem ipsum dolor sit amet
            consectetur. </h1>

          <p>Penatibus lorem a metus curabitur massa augue eu
            dictum potenti. Risus cursus pulvinar pharetra arcu
            blandit sit nulla.</p>

          <Link to="/">
            <strong>Read more...</strong>
          </Link>

          <div id="social-data">
            <div id="heart">

            </div>
            <div id="bookmarks">

            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default Hero;