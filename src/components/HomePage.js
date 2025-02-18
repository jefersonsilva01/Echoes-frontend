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
      {
        props.loggedInUser ? ("") : (<Nav />)
      }
      <Hero />
      {props.loggedInUser
        ? (<Fresh user={props.loggedInUser} getUser={props.getUser} />)
        : (<Fresh />)
      }
      {
        props.loggedInUser
          ? (<Trend user={props.loggedInUser} getUser={props.getUser} />)
          : (<Trend />)
      }
      {
        props.loggedInUser ? ("") :
          (<>
            <Start />
            <Footer />
          </>)
      }
      <BtnGoToTop />
    </>
  )
}

export default Home