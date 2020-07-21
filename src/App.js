import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar/NavBar'
import Home from './Containers/Home/Home';
import Portfolio from './Containers/Portfolio/Portfolio';
import Work from './Containers/Work/Work';


function App() {
  return (
    <div className="App">
        <Home/>
        <Portfolio/>
        <Work/>
    </div>
  );
}

export default App;
