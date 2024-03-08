import React from 'react'
import logo from "../../assets/img/logo_ADV.png";
import "../Navbar/NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {

  
    return (
      <div>


<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <img src={logo} id="logo" alt="ADV-Bureautique-solutions"/>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">Présentation</Nav.Link>
            <Nav.Link href="#action3">Prestations</Nav.Link>
            <Nav.Link href="#action4">Tarifs</Nav.Link>
            <Nav.Link href="#action5">Nous contacter</Nav.Link>
    
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  {/* <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
     
        <img src={logo} alt="ADV-Bureautique-solutions"/>
       
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#Accueil">Accueil</a></li>
          <li><a href="#Présentation">Présentation</a></li>
          <li><a href="#Prestations">Prestations</a></li>
          <li><a href="#Tarifs">Tarifs</a></li>
          <li><a href="#Contact">Contact</a></li>

    
        </ul>
      </nav>


  
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i> */}

  
  {/* <!-- End Header --> */}
       
      </div>
    );
  }

