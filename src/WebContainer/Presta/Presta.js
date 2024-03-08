import React from "react";
import adm from "../../assets/img/adm.jpg";
import compta from "../../assets/img/compta.jpg";
import achat from "../../assets/img/achat.jpg";
import commerce from "../../assets/img/commerce.jpg";
import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "../../assets/vendor/swiper/swiper-bundle.min.css";

export default function About() {
  return (
    <div>
   
    <section id="chefs" className="chefs ">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
        <h2>Mes prestations</h2>

<p>

  ADV <span>Bureautique &amp; Solutions</span> peut répondre à
  plusieurs besoins :
</p>
        </div>

        <div className="row gy-4 justify-content-around">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="chef-member">
              <div className="member-img">
                <img src={commerce} className="img-fluid" alt=""/>
                {/* <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div> */}
              </div>
              <div className="member-info">
                <h4>ADV / commercial</h4>
                {/* <span></span> */}
                <p> <i className="bi bi-check2-all text-danger"></i> Devis / Propositions commerciales </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Saisie et suivi de commandes de vente </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Préparation de petits colis - Facturation</p>
                <p>  <i className="bi bi-check2-all text-danger"></i> Recouvrement des factures - Relances devis</p>
                  </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="chef-member">
              <div className="member-img">
                <img src={achat} className="img-fluid" alt=""/>
                {/* <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div> */}
              </div>
              <div className="member-info">
                <h4>Achats</h4>
                {/* <span></span> */}
                <p> <i className="bi bi-check2-all text-danger"></i> Passage et suivi des commandes fournisseurs </p>
                <p> <i className="bi bi-check2-all text-danger"></i> approchement
                  bon de commande <br /> bon de livraison <br /> facture </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Préparation des
                  paiements</p>
               
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="chef-member">
              <div className="member-img">
                <img src={adm} className="img-fluid" alt=""/>
                {/* <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div> */}
              </div>
              <div className="member-info">
                <h4>Administratif</h4>
                {/* <span></span> */}
                <p> <i className="bi bi-check2-all text-danger"></i> Frappe de courriers administratifs </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Gestion du courrier </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Classement et archivage, <br /> numérisation et impression de
                  documents </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Gestion de vos appels entrants / sortants </p>
             
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="chef-member">
              <div className="member-img">
                <img src={compta} className="img-fluid" alt=""/>
                {/* <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div> */}
              </div>
              <div className="member-info">
                <h4>Pré-comptabilité</h4>
                {/* <span></span> */}
                <p> <i className="bi bi-check2-all text-danger"></i> Préparation des remises de chèques </p>
                <p> <i className="bi bi-check2-all text-danger"></i> Préparation des
                  documents à transmettre <br /> à votre cabinet comptable </p>
             
              </div>
            </div>
          </div>

       

        </div>

      </div>
    </section>
    </div>
  );
}
