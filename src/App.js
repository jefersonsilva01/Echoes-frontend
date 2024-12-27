import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Fresh from './components/Fresh';
import Trend from './components/Trend';

// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Fresh />
      <Trend />
    </div>
  );
}

export default App;
