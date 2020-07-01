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
import { ReactComponent as Agregados } from '../images/agregados.svg';
import { ReactComponent as CYT } from '../images/logo-cyt.svg';
import { ReactComponent as Macrofibras } from '../images/macrofibras.svg';
import { ReactComponent as Webinars } from '../images/webinars.svg';
import { ReactComponent as Biblioteca } from '../images/biblioteca.svg';
import { ReactComponent as Bombeo } from '../images/bombeo.svg';
import { ReactComponent as Imcyc } from '../images/imcyc.svg';

import './Introduccion.css';

function Introduccion() {
  return (
    <div className="introduccion">
      <img src={Logoimcycblanco} className="logo" alt="logo" />
      <Link to="/"><h1>APLICACIONES PARA LA CONSTRUCCIÓN</h1></Link>
      <h2>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h2>
      <div className="container">
        <div className="item">
          <a href="http://18.220.192.140:8080/" target="_blank" rel="noopener noreferrer">
            <Revolvedora />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>REVOLVEDORAS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://www.redcyc.com/plantasdeconcreto/" target="_blank" rel="noopener noreferrer">
            <Planta />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>PLANTAS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://18.216.111.243/" target="_blank" rel="noopener noreferrer">
            <Prensa />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>PRENSAS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://18.188.251.124/" target="_blank" rel="noopener noreferrer">
            <Laboratorio />
          </a>
          <h2>CERTIFICACIÓN</h2>
          <h3>LABORATORIOS DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://www.redcyc.com/" target="_blank" rel="noopener noreferrer">
            <Logoredcyc />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>REDCYC</h3>
        </div>
        <div className="item">
          <a href="https://www.auto-construccion.com/index.php?u=ruribe@imcyc.com&p=ruribe123" target="_blank" rel="noopener noreferrer">
            <Logoautoconstruccion />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>AUTOCONSTRUCCIÓN</h3>
        </div>
        <div className="item">
          <a href="http://imcyc.net/acero/" target="_blank" rel="noopener noreferrer">
            <Logodeacero />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>CALCULADORA DE ACERO</h3>
        </div>
        <div className="item">
          <a href="http://18.219.47.222/bolsadetrabajo/" target="_blank" rel="noopener noreferrer">
            <Bolsa />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>BOLSA DE TRABAJO</h3>
        </div>
        <div className="item">
          <a href="http://cementoyconcreto.com/" target="_blank" rel="noopener noreferrer">
            <CursosEnLinea />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>CURSOS EN LÍNEA</h3>
        </div>
        <div className="item">
          <a href="http://www.imcyc.net/modelo/" target="_blank" rel="noopener noreferrer">
            <Modelo />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>MODELO ESTADÍSTICO</h3>
        </div>
        <div className="item">
          <a href="https://imcyc.github.io/agregados/" target="_blank" rel="noopener noreferrer">
            <Agregados />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>AGREGADOS</h3>
        </div>
        <div className="item">
          <a href="http://www.revistacyt.com.mx/" target="_blank" rel="noopener noreferrer">
            <CYT />
          </a>
          <h2>REVISTA</h2>
          <h3>CONSTRUCCIÓN Y TECNOLOGÍA EN CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://imcyc.net/macrofibras/#/" target="_blank" rel="noopener noreferrer">
            <Macrofibras />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>MACROFIBRAS</h3>
        </div>
        <div className="item">
          <a href="http://webinarsenconcreto.com/" target="_blank" rel="noopener noreferrer">
            <Webinars />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>WEBINARS EN CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://18.219.47.222/biblioteca/" target="_blank" rel="noopener noreferrer">
            <Biblioteca />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>ACERVO DIGITAL</h3>
        </div>
      </div>
      <hr/>
      <h2 className="dos">APPS 2.0</h2>
      <hr/>
      <div className="container">
        <div className="item">
          <a href="https://imcyc.github.io/web/" target="_blank" rel="noopener noreferrer">
            <Imcyc />
          </a>
          <h2>WEB</h2>
          <h3>APP IMCYC</h3>
        </div>
        <div className="item">
          <a href="https://www.auto-construccion.com/" target="_blank" rel="noopener noreferrer">
            <Logoautoconstruccion />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>AUTOCONSTRUCCIÓN</h3>
        </div>
        <div className="item">
          <a href="https://imcyc.github.io/deacero/" target="_blank" rel="noopener noreferrer">
            <Logodeacero />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>CALCULADORA DE ACERO</h3>
        </div>
        <div className="item">
          <a href="https://imcyc.github.io/revistacyt/" target="_blank" rel="noopener noreferrer">
            <CYT />
          </a>
          <h2>REVISTA</h2>
          <h3>CONSTRUCCIÓN Y TECNOLOGÍA EN CONCRETO</h3>
        </div>
        <div className="item">
          <a href="https://imcyc.github.io/agregados/" target="_blank" rel="noopener noreferrer">
            <Agregados />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>AGREGADOS</h3>
        </div>
        <div className="item">
          <a href="http://imcyc.com/vivienda/" target="_blank" rel="noopener noreferrer">
            <Planta />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>VIVIENDA INDUSTRIALIZADA</h3>
        </div>
        <div className="item">
          <a href="http://imcyc.com/bombeo/" target="_blank" rel="noopener noreferrer">
            <Bombeo />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>MANUAL DEL BOMBEADOR DE CONCRETO</h3>
        </div>
        <div className="item">
          <a href="http://www.webinarimcyc.com/" target="_blank" rel="noopener noreferrer">
            <Prensa />
          </a>
          <h2>PLATAFORMA</h2>
          <h3>WEBINARS IMCYC</h3>
        </div>
      </div>
      <hr/>
      <h2 className="dos">WEB APPS</h2>
      <hr/>
      <div className="container">
        <div className="item">
          <a href="http://www.concreton.com.mx" target="_blank" rel="noopener noreferrer">
            <Imcyc />
          </a>
          <h2>CONCRETON</h2>
          <h3>PROBLEMAS, CAUSAS Y SOLUCIONES</h3>
        </div>
        <div className="item">
          <a href="http://www.libreriaimcyc.com/" target="_blank" rel="noopener noreferrer">
            <Imcyc />
          </a>
          <h2>LIBRERÍA IMCYC</h2>
          <h3>APP IMCYC</h3>
        </div>
        <div className="item">
          <a href="http://www.construremates.com/" target="_blank" rel="noopener noreferrer">
            <Imcyc />
          </a>
          <h2>CONSTRUREMATES</h2>
          <h3>APP IMCYC</h3>
        </div>
      </div>
    </div>
  );
}
 
export default Introduccion;
