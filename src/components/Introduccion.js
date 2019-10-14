import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ReactComponent as Prensa } from '../images/prensa.svg';
import { ReactComponent as Planta } from '../images/plantas.svg';
import { ReactComponent as Laboratorio } from '../images/laboratorio.svg';
import { ReactComponent as Revolvedora } from '../images/revolvedora.svg';
import { ReactComponent as Logoredcyc } from '../images/logo-redcyc.svg';
import { ReactComponent as Logoautoconstruccion } from '../images/logo-autoconstruccion.svg';
import { ReactComponent as Logodeacero } from '../images/logo-deacero.svg';
import Navbar from './Navbar';
import './Introduccion.css';

function Introduccion() {
  return (
    <div className="introduccion">
      <Navbar/>
      
      <Link to="/"><h1>APLICACIONES PARA LA CONSTRUCCIÓN</h1></Link>
      <h2>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h2>
      <div className="container">
        <div className="item">
          <a href="http://18.220.192.140:8080/" target="_blank">
            <Revolvedora />
          </a>
          <h2><b>CERTIFICACIÓN</b><br/>REVOLVEDORA DE CONCRETO</h2>
        </div>
        <div className="item">
          <a href="http://www.redcyc.com/plantasdeconcreto/" target="_blank">
            <Planta />
          </a>
          <h2><b>CERTIFICACIÓN</b><br/>PLANTAS DE CONCRETO</h2>
        </div>
        <div className="item">
          <a href="http://18.216.111.243/" target="_blank">
            <Prensa />
          </a>
          <h2><b>CERTIFICACIÓN</b><br/>PRENSAS DE CONCRETO</h2>
        </div>
        <div className="item">
          <a href="http://18.188.251.124/" target="_blank">
            <Laboratorio />
          </a>
          <h2><b>CERTIFICACIÓN</b><br/>LABORATORIO</h2>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <a href="http://www.redcyc.com/" target="_blank">
            <Logoredcyc />
          </a>
          <h2><b>PLATAFORMA</b><br/>REDCYC</h2>
        </div>
        <div className="item">
          <a href="https://www.auto-construccion.com" target="_blank">
            <Logoautoconstruccion />
          </a>
          <h2><b>PLATAFORMA</b><br/>AUTOCONSTRUCCIÓN</h2>
        </div>
        <div className="item">
          <a href="http://imcyc.net/acero/" target="_blank">
            <Logodeacero />
          </a>
          <h2><b>PLATAFORMA</b><br/>CALCULADORA DE ACERO</h2>
        </div>
        <div className="item">
          <a href="https://www.auto-construccion.com" target="_blank">
            <Logoautoconstruccion />
          </a>
          <h2><b>PLATAFORMA</b><br/>AUTOCONSTRUCCIÓN</h2>
        </div>
      </div>
    </div>
  );
}
 
export default Introduccion;