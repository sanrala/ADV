import React from "react";
import logo from "./../../assets/img/logo.png";
import main from "../../assets/img/main.jpg";
import Burger from "./Burger";
import "../../../src/css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "../../assets/vendor/swiper/swiper-bundle.min.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">Tarifs</Modal.Title>
      </Modal.Header>
      <Modal.Body className=" section-bg">
        {/* <h4>Tarifs</h4> */}
        <div className="do d-flex flex-column  align-items-start">
  
          <div className="gift">
            <p className="bonus ">
              <i class="gift bi bi-gift text-danger"></i>
              Offre de bienvenue: 10% de remise sur votre première facture.
            </p>
          </div>
          <div className="gift">
            <p className="bonus ">
              <i class="gift bi bi-gift text-danger"></i>
              Offre de parrainage: 10% de remise pour vous sur votre prochaine
              facture et 10% pour votre filleul sur sa première facture.
            </p>
          </div>
        </div>
        <p className="maj">
        <i>* Majoration de 25% si prestations urgentes réalisées le soir après
          18h30 pour le lendemain ainsi que pour toute prestation effectuée le
          Samedi <br />
             Majoration de 50% pour tout travail effectué le dimanche et jours
          fériés. <br />
         TVA non applicable selon l’article 293 B du Code Général des Impôts.</i>
        </p>
      </Modal.Body>

      <Modal.Footer className="section-bg">
        <Button className="bg-danger" onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Nav() {
  AOS.init();

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <a
            href=""
            className="Accueil logo d-flex align-items-center me-auto me-lg-0"
          >
            <img src={logo} alt="ADV-Bureautique-solutions" />
          </a>
          <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Incluez le contenu SVG */}
        <use xlinkHref={logo} /> </svg>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#Accueil">Accueil</a>
              </li>
              <li>
                <a href="#Présentation">Présentation</a>
              </li>
              <li>
                <a href="#Avantages">Avantages</a>
              </li>
              <li>
                <a href="#Prestations">Prestations</a>
              </li>

              <li>
                <a
                  href="#pricing">
                  Tarifs{" "}
                </a>
              </li>
             
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>

          <Burger />
          {/* <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i> */}
        </div>
      </header>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <section
        id="Accueil"
        className="hero d-flex align-items-center section-bg"
      >
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">
                ADV Bureautique <br />& Solutions
              </h2>
              <p className="text-danger" data-aos="fade-up" data-aos-delay="100"> <i>
                Déléguez, vous y gagnerez !</i>
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#Contact" className="btn-book-a-table">
                  Contactez-moi
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src={main}
                className="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
