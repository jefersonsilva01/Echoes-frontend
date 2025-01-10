import React from 'react';

import Nav from './Nav';
import Hero from './Hero';
import Fresh from './Fresh';
import Trend from './Trend';
import Start from './Start';
import Footer from './Footer';

const Home = (props) => {
  return (
    <>
      {
        props.loggedInUser ? ("") : (<Nav />)
      }
      <Hero />
      <Fresh />
      <Trend user={props.loggedInUser} />
      {
        props.loggedInUser ? ("") :
          (<>
            <Start />
            <Footer />
          </>)
      }
    </>
  )
}

export default Home