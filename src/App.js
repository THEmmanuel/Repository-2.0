import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar/NavBar'
import Home from './Containers/Home/Home';
import Portfolio from './Containers/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <Portfolio/>
    </div>
  );
}

export default App;
