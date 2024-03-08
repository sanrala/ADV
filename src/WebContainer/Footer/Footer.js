import React from "react";


import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

// import "../../assets/vendor/swiper/swiper-bundle.min.css";

export default function footer() {
  return (

    <div>
<footer id="footer" className="footer">

<div className="container">
  <div className="row gy-3">
    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-geo-alt icon"></i>
      <div>
        <h4>Adresse</h4>
        <p>
          
          62470 CAMBLAIN-CHATELAIN - FRANCE<br/>
        </p>
      </div>

    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex">
      <i className="bi bi-telephone icon"></i>
      <div>
        <h4>Contact</h4>
        <p>
          <strong>téléphone:</strong> 06 00 00 00 00<br/>
          <strong>Email:</strong> claire.mauro@adv.com<br/>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex">
      <i className="bi bi-clock icon"></i>
      <div>
        <h4>Horaires</h4>
        <p>
          <strong>Lundi au Vendredi: 9h</strong> - 17h<br/>
          Samedi et Dimanche: Fermer
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links">
      <h4>Suivez moi</h4>
      <div className="social-links d-flex">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>

  </div>
</div>

<div className="container">
  <div className="copyright">
    &copy; Copyright <strong><span>ADV Bureautique & Solutions</span></strong>. Tout droit réservés
  </div>
  <div className="credits">

    Création du site <a href="">Sébastien Mauro</a>
  </div>
</div>

</footer>
  </div>
);
}
