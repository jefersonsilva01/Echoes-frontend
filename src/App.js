import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Carrousel from './components/Carrousel';

// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Carrousel />
    </div>
  );
}

export default App;
