import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';

const NavbarImcyc = () => {
  return (
    <>
      <Navbar bg="transparent" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" style={{width: '150px'}} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link href="#home">Home</Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarImcyc;