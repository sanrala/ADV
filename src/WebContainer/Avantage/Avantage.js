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
      <section id="why-us" class="why-us section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="why-box">
              <h3>Avantages :</h3>
              <p>
              La gestion administrative de votre entreprise vous prend de plus en plus de temps ?
Vous n’avez pas la possibilité ou la charge de travail suffisante pour embaucher une assistante ?

Votre secrétaire est débordée, absente ou en arrêt maladie ?
Vous faites face à une surcharge exceptionnelle de travail ?
Faites appel à ADV Bureautique &amp; Solutions !
              </p>
              <div class="text-center">
                {/* <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-8 d-flex align-items-center">
            <div class="row gy-4">

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-clipboard-data"></i>
                  {/* <h4>AVANTAGE 1</h4> */}
                  <p>Pas de salarié à gérer = pas de charges salariales, pas de congés à payer = gain de temps et
d’énergie.</p>
                </div>
              </div>

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-gem"></i>
                  {/* <h4>AVANTAGE 2</h4> */}
                  <p>Réduction des coûts = vous ne payez que le travail effectué = pas d’investissement matériel.</p>
                </div>
              </div>

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-inboxes"></i>
                  {/* <h4>AVANTAGE 3</h4> */}
                  <p>Flexibilité = pas d’engagement de durée = disponibilité selon vos besoins, notamment en cas
d’accroissement de travail ponctuel.</p>
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
