import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Fresh from './components/Fresh';
import Trend from './components/Trend';
import Start from './components/Start';
import Footer from './components/Footer';
import BtnGoToTop from './components/BtnGoToTop';

// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Fresh />
      <Trend />
      <Start />
      <Footer />
      <BtnGoToTop />
    </div>
  );
}

export default App;
