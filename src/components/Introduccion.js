import React from 'react';
import { Link } from "react-router-dom";
import Logoimcycblanco from '../logo-imcyc-blanco.svg';
import { ReactComponent as Prensa } from '../images/prensa.svg';
import { ReactComponent as Planta } from '../images/plantas.svg';
import { ReactComponent as Laboratorio } from '../images/laboratorio.svg';
import { ReactComponent as Revolvedora } from '../images/revolvedora.svg';
import { ReactComponent as Logoredcyc } from '../images/logo-redcyc.svg';
import { ReactComponent as Logoautoconstruccion } from '../images/logo-autoconstruccion.svg';
import { ReactComponent as Logodeacero } from '../images/logo-deacero.svg';
import { ReactComponent as Bolsa } from '../images/bolsa.svg';
import { ReactComponent as CursosEnLinea } from '../images/cursosenlinea.svg';
import { ReactComponent as Modelo } from '../images/modelo.svg';

import './Introduccion.css';

function Introduccion() {
  return (
    <div className="introduccion">
      <img src={Logoimcycblanco} className="logo" alt="logo" />
      <Link to="/"><h1>APLICACIONES PARA LA CONSTRUCCIÓN</h1></Link>
      <h2>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h2>
      <div className="container">
        <div className="item">
          <a href="http://18.220.192.140:8080/" target="_blank">
            <Revolvedora />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>REVOLVEDORAS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://www.redcyc.com/plantasdeconcreto/" target="_blank">
            <Planta />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>PLANTAS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://18.216.111.243/" target="_blank">
            <Prensa />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>PRENSAS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://18.188.251.124/" target="_blank">
            <Laboratorio />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>LABORATORIOS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://www.redcyc.com/" target="_blank">
            <Logoredcyc />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>REDCYC</h3>
        </div>
        <div className="item">
          <a href="https://www.auto-construccion.com" target="_blank">
            <Logoautoconstruccion />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>AUTOCONSTRUCCIÓN</h3>
        </div>
        <div className="item">
          <a href="http://imcyc.net/acero/" target="_blank">
            <Logodeacero />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>CALCULADORA DE ACERO</h3>
        </div>
        <div className="item">
          <a href="https://imcyc.github.io/bolsadetrabajo/" target="_blank">
            <Bolsa />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>BOLSA DE TRABAJO</h3>
        </div>
        <div className="item">
          <a href="http://cementoyconcreto.com/" target="_blank">
            <CursosEnLinea />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>CURSOS EN LÍNEA</h3>
        </div>
        <div className="item">
          <a href="http://www.imcyc.net/modelo/" target="_blank">
            <Modelo />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>MODELO ESTADÍSTICO</h3>
        </div>
      </div>
    </div>
  );
}
 
export default Introduccion;