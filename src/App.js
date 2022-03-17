import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import FourOhFour from './pages/FourOhFour';
import Home from './pages/Home';

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Accueil' element={<Home/>} />
          <Route path='/a_propos' element={<About/>} />
          <Route path='/*' element={<FourOhFour/>} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
    
  );
};

export default App;
