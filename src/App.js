
import './App.css';
import './Styles/style.css'
import React from 'react';
import {BrowserRouter, Routes,Route} from"react-router-dom"
import Navigation from './Components/Navigatin';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Career from './Components/Career';
import Contact from './Components/Contact';





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
         <BrowserRouter>
         <Navigation/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Career" element={<Career/>} />
      <Route path="/Contact" element={<Contact/>} />
      
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
