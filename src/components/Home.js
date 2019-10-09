import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/introduccion"><img src={logo} className="App-logo" alt="logo" /></Link>
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      </header>
    </div>
  );
}
 
export default Home;