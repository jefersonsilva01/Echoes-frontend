import React from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "./styles/HeroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <div>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4835 3.20764C18.0773 3.20764 19.6061 3.84008 20.7341 4.96612C21.8621 6.09216 22.4972 7.61979 22.5 9.21364C22.5 12.4476 21.3135 13.9911 16.011 18.1806L13.2876 20.2945C12.5299 20.8826 11.4701 20.8826 10.7124 20.2945L7.989 18.1806C2.6865 13.9911 1.5 12.4476 1.5 9.21364C1.50278 7.61979 2.13789 6.09216 3.2659 4.96612C4.39391 3.84008 5.92264 3.20764 7.5165 3.20764C9.14236 3.21536 10.7014 3.85554 11.8635 4.99264L12 5.12142L12.1365 4.99264C13.2986 3.85554 14.8576 3.21536 16.4835 3.20764ZM11.2224 7.21451C11.2414 7.23242 11.2604 7.25032 11.2793 7.26818C11.6839 7.64997 12.316 7.64997 12.7206 7.26818C12.7396 7.25026 12.7586 7.23231 12.7776 7.21433C13.7018 6.34183 14.6791 5.41906 15.9351 5.24697C16.1175 5.22199 16.3022 5.20874 16.4882 5.20764C17.5505 5.20889 18.5692 5.63096 19.3211 6.38157C20.0736 7.13274 20.4975 8.1516 20.5 9.21477C20.4999 10.4993 20.2885 11.2559 19.6287 12.1593C18.8538 13.2205 17.4465 14.4972 14.7778 16.606L12.0613 18.7145C12.0252 18.7425 11.9748 18.7425 11.9387 18.7145L9.22213 16.606C6.55344 14.4972 5.14619 13.2205 4.37123 12.1593C3.71159 11.256 3.5002 10.4996 3.5 9.21549C3.50229 8.15206 3.92623 7.13291 4.67888 6.38157C5.4308 5.63096 6.44945 5.20889 7.51177 5.20764C7.69754 5.20873 7.88202 5.22196 8.06414 5.24688C9.32047 5.41879 10.2981 6.34181 11.2224 7.21451Z" fill="white" />
                </svg>
                <span>1.23K</span>
              </div>
              <div id="bookmarks">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 22.0029L12 18.25L5.50002 22.0029C4.83335 22.3878 4 21.9067 4 21.1369V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.1369C20 21.9067 19.1667 22.3878 18.5 22.0029ZM13 16.518C12.3812 16.1607 11.6188 16.1607 11 16.518L6 19.4048V4H18V19.4048L13 16.518Z" fill="white" />
                </svg>
                <span>274</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default Hero;