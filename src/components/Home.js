import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/introduccion"><img src={logo} className="App-logo" alt="logo" /></Link>
        <p className="imcyc">Instituto Mexicano del Cemento y del Concreto A.C.</p>
        <p className="texto"><small>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.</small></p>
      </header>
    </div>
  );
}
 
export default Home;