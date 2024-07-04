import React from "react";
// import claire from "../../assets/img/claire.jpg";

import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

// import "../../assets/vendor/swiper/swiper-bundle.min.css";

export default function About() {
  return (
    <div>
      <section id="Présentation" className="about">
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
              // style={{ backgroundImage: `url(${claire})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img 
              src="https://zupimages.net/up/24/13/pcdc.jpg"    
              className="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300" />
           
            </div>
            <div
              className="col-lg-5 d-flex align-items-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="content ps-0 ps-lg-5" >
              <h4>Mon parcours</h4>
              <br />
                <p >
                  Titulaire d’un BTS Action Commerciale en 2004, je dispose de
                  plus de 15 ans d’expérience en tant
                  qu’Assistante Administrative et Commerciale. La relation
                  client et l’administration des ventes (devis, commandes,
                  facturation) sont des missions régulières qui m’ont été
                  demandées lors de mon parcours professionnel. J’ai travaillé
                  dans différents secteurs d'activité :   
                 
                </p>
                <ul >
                  <li>
                    <i className="bi bi-check2-all"></i> Des entreprises commercialisant des
                  matériaux de construction,
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Des fabriquants de portails,
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Quelques PME dans le secteur industriel.
                  </li>
                </ul>
                <p>
                  Les gérant(e)s de petites structures ont parfois deux types de problématiques : </p>

                  <ul >
                  <li>
                    <i className="bi bi-check2-all"></i> Ils/elles n'ont pas la charge suffisante pour recruter <br />
                    et/ou leur assistant(e) est submergé(e).
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ils/elles souhaiteraient alléger leur journée de travail <br />
                    ou au contraire consacrer plus de temps sur leur coeur de métier.
                  </li>
                 
                </ul>
                  <p>
                  C'est pourquoi, je souhaite mettre à disposition mes compétences auprès des
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
