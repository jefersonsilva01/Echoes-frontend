import React from "react";

import Nav from './Nav';
import Hero from './Hero';
import Fresh from './Fresh';
import Trend from './Trend';
import BtnGoToTop from './BtnGoToTop';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Fresh />
      <Trend />
      <BtnGoToTop />
    </>
  )
}

export default Home