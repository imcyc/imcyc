import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Logoimcycblanco from '../logo-imcyc-blanco.svg';
      
const CarouselSlide = () => {
  return (
  <Carousel>
    <Carousel.Item>
    <div class="d-flex align-items-center justify-content-center min-vh-100 min-vw-100">
      <img
        className="d-block w-100"
        src="https://raw.githubusercontent.com/imcyc/imcyc/master/public/images/bkg.jpg"
        alt="Instituto Mexicano del Cemento y del Concreto A.C."
        style={{opacity: 0.2}}
      />
      <Carousel.Caption>
        <img src={Logoimcycblanco} className="logo" alt="logo" />
        <h3>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h3>
        <p>APLICACIONES PARA LA CONSTRUCCIÓN</p>
        <Link to="/introduccion">
          <Button variant="dark">APLICACIONES IMCYC</Button>
        </Link>
      </Carousel.Caption>
    </div>
    </Carousel.Item>
  </Carousel>
  ); 
}
export default CarouselSlide;