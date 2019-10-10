import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Prensa } from '../images/prensa.svg';
import { ReactComponent as Planta } from '../images/plantas.svg';
import { ReactComponent as Laboratorio } from '../images/laboratorio.svg';
import './Introduccion.css';

function Introduccion() {
  return (
    <div className="introduccion">
      <Link to="/"><h1>APLICACIONES PARA LA CONSTRUCCIÓN</h1></Link>
      <h2>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h2>
      <div className="container">
        <div className="item">
          <Link to="/">
            <Planta />
          </Link>
          <h2><b>CERTIFICACIÓN</b><br/>PLANTAS DE CONCRETO</h2>
        </div>
        <div className="item">
          <Link to="/">
            <Prensa />
          </Link>
          <h2><b>CERTIFICACIÓN</b><br/>PRENSAS DE CONCRETO</h2>
        </div>
        <div className="item">
          <Link to="/">
            <Laboratorio />
          </Link>
          <h2><b>CERTIFICACIÓN</b><br/>LABORATORIO</h2>
        </div>
        <div className="item">sv</div>
        <div className="item">sv</div>
      </div>
    </div>
  );
}
 
export default Introduccion;