import React from 'react';

import Nav from './Nav';
import Hero from './Hero';
import Fresh from './Fresh';
import Trend from './Trend';
import Start from './Start';
import Footer from './Footer';
import BtnGoToTop from './BtnGoToTop';

const Home = (props) => {
  return (
    <>
      <Nav />
      <Hero />
      <Fresh />
      <Trend />
      <Start />
      <Footer />
      <BtnGoToTop />
    </>
  )
}

export default Home