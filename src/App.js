import React from 'react';
import './App.css';
import Home from './Containers/Home/Home';
import Portfolio from './Containers/Portfolio/Portfolio';
import Work from './Containers/Work/Work';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Footer from './Containers/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Home/>
        <Portfolio/>
        <Work/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
