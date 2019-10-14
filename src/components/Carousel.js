import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Logoimcycblanco from '../logo-imcyc-blanco.svg';
      
const CarouselSlide = () => {
  return (
  <Carousel>
    <Carousel.Item>
    <div class="d-flex align-items-center justify-content-center min-vh-100">
      <img
        className="d-block w-100"
        src="https://miro.medium.com/max/3840/1*c0Uol7ljZhO06sgzXDZLmw.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <img src={Logoimcycblanco} className="logo" alt="logo" />
        <h3>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h3>
        <p>APLICACIONES PARA LA CONSTRUCCIÓN</p>
        <Link to="/introduccion">
          <Button variant="dark">PANEL DE CONTROL</Button>
        </Link>
      </Carousel.Caption>
    </div>
    </Carousel.Item>
  </Carousel>
  ); 
}
export default CarouselSlide;