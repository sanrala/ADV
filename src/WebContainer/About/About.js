import React from "react";
import claire from "../../assets/img/claire.JPG";

import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

// import "../../assets/vendor/swiper/swiper-bundle.min.css";

export default function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Présentation</h2>
            <p>
              Claire <span>MAURO</span>
            </p>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-7 position-relative about-img"
              style={{ backgroundImage: `url(${claire})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {/* <div className="call-us position-absolute"> */}
                {/* <h4>Qui suis-je ?</h4> */}
                {/* <p>06 00 00 00 00</p> */}
              {/* </div> */}
            </div>
            <div
              className="col-lg-5 d-flex align-items-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="content ps-0 ps-lg-5">
              <h4>Qui suis-je ?</h4>
                <p className="fst-italic">
                  Titulaire d’un BTS Action Commerciale en 2004, je dispose de
                  plus de 15 ans d’expérience professionnelle en tant
                  qu’Assistante Administrative et Commerciale. La relation
                  client et l’Administration Des Ventes (devis, commandes,
                  facturation) sont des missions régulières qui m’ont été
                  demandées lors de mon parcours professionnel. J’ai travaillé
                  essentiellement dans :   
                 
                </p>
                <ul >
                  <li>
                    <i className="bi bi-check2-all"></i> Des entreprises commercialisant <br /> des
                  matériaux de construction,
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Fabriquant des portails,
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>  Des matelas isolants industriels.
                  </li>
                </ul>
                <p>
                  Aujourd’hui, je peux vous proposer mon aide pour toutes ces
                  tâches administratives qui vous prennent tant de temps. Mes
                  principales qualités : rigoureuse, discrète, et polyvalente.
                  Je souhaite mettre à disposition mes compétences auprès des
                  artisans, TPE/PME, mais aussi à tous types d’entreprises qui
                  souhaiteraient un petit coup de pouce ! Alors n’hésitez pas à
                  me contacter !
                </p>

                <div className="position-relative mt-4">
                  {/* <img src={claire} className="img-fluid" alt="" /> */}
                  {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
