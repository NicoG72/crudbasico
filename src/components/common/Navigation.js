import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
      <Navbar bg="danger" expand="lg" variant='dark'>
  <Navbar.Brand href="/">Cafeteria</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> 
    <NavLink className='nav-link' exact ={true} to = '/'>Inicio</NavLink>
    <NavLink className='nav-link' exact ={true} to = '/productos'>Productos</NavLink>
    <NavLink className='nav-link' exact ={true} to = '/productos/nuevo-producto'>Agregar Producto</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Navigation;