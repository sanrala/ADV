import React from "react";
// import claire from "../../assets/img/claire2.JPG";

import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

// import "../../assets/vendor/swiper/swiper-bundle.min.css";

export default function Avantage() {
  return (
    <div>
      <section id="Avantages" className="why-us section-bg">
        <div className="container" data-aos="fade-up">
        <div className="section-header">
        <h2>Avantages :</h2>

<p>

Faire appel à ADV <span>Bureautique &amp; Solutions</span> peut vous apporter gain de temps et d'energie :
</p>
        </div>
          <div className="row gy-4">
            {/* <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="why-box">
               
                <p>
                  La gestion administrative de votre entreprise vous prend de
                  plus en plus de temps ? Vous n’avez pas la possibilité ou la
                  charge de travail suffisante pour embaucher une assistante ?
                  Votre secrétaire est débordée, absente ou en arrêt maladie ?
                  Vous faites face à une surcharge exceptionnelle de travail ?
                  Faites appel à ADV Bureautique &amp; Solutions !
                </p>
                <div className="text-center">
                  {/* <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a> 
                </div>
              </div>
            </div> */}

            <div className="col-lg-12 d-flex align-items-center justify-content-around ">
              <div className="row gy-4 ">
                <div
                  className="col-xl-4 "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-box ">
                   <div className=" d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data"></i>
                    <h4>Gain de temps :</h4>
                    </div>
                    <div className=" d-flex flex-column  align-items-start" >
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pour vous libérer de vos tâches administratives.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> En cas de surcroît d'activité.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pour un remplacement de congés ou d'arrêt maladie.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pour vous recentrer sur votre coeur de métier.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pour des journées de travail allégées.
                    </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box ">
                  <div className=" d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem"></i>
                    <h4>Réduction des coûts :</h4></div>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pas de charges salariales.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pas de congés payés.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pas de formalités d'embauche.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Vous ne payez que le travail effectué.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pas d'investissement matériel.
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon-box ">
                  <div className="  d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes"></i>
                    <h4  >Flexibilité :</h4></div>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Pas d'engagement de durée.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Disponibilité selon vos besoins.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> A distance ou dans vos locaux.
                    </p>
                    <p>
                    <i  className="bi bi-check2-all text-danger"></i> Services à la carte.
                    </p>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
