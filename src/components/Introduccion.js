import React from 'react';
import { Link } from "react-router-dom";
import './Introduccion.css';
import logo from '../logo.svg';

const Introduccion = () => {
  return (
    <div className="introduccion">
      <Link to="/"><h1>introducción</h1></Link>
      <hr/>
      <div className="container">
        <div className="item">
          <Link to="/introduccion">
            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
          </Link>
          <p>LABORATORIO</p>
        </div>
        <div className="item">sv</div>
        <div className="item">sv</div>
        <div className="item">sv</div>
        <div className="item">sv</div>
      </div>
    </div>
  );
}
 
export default Introduccion;