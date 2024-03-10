import React from "react";
// import claire from "../../assets/img/claire2.JPG";

import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";

// import "../../assets/vendor/swiper/swiper-bundle.min.css";

export default function Contact() {

    const MapStyle = {
        width: "100%",
        height: 500
      };
  return (
    <div>
   <section id="Contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Contact</h2>
          <p>Et si nous collaborions ensemble ? <span>Contactez-moi</span></p>
        </div>

        <div className="mb-3">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40625.04679222136!2d2.4103174193787895!3d50.47712572865548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd1064c9458dc7%3A0x40af13e8163f8e0!2sCamblain-Ch%C3%A2telain!5e0!3m2!1sfr!2sfr!4v1710008604191!5m2!1sfr!2sfr"
        width={MapStyle.width}
        height={MapStyle.height}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="ADV BUREAUTIQUE ET SOLUTIONS"
        ></iframe>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40625.04679222136!2d2.4103174193787895!3d50.47712572865548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd1064c9458dc7%3A0x40af13e8163f8e0!2sCamblain-Ch%C3%A2telain!5e0!3m2!1sfr!2sfr!4v1710008604191!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>

        <div className="row gy-4">

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Notre adresse</h3>
                <p>62470 Camblain-Châtelain</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email </h3>
                <p>claire.mauro@adv.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Téléphone</h3>
                <p>06 00 00 00 00</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Horaires d'ouverture</h3>
                <div><strong>Du Lundi au Vendredi:</strong> 09h - 17h <br />   
                  <strong>Samedi :</strong> Fermé
                </div>
              </div>
            </div>
          </div>

        </div>

        <form action="forms/contact.php" method="post" role="form" className="php-email-form p-3 p-md-4">
          <div className="row">
            <div className="col-xl-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Nom et Prénom" required/>
            </div>
            <div className="col-xl-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Chargement</div>
            <div className="error-message"></div>
            <div className="sent-message">Votre message a bien été envoyé. Merci!</div>
          </div>
          <div className="text-center"><button type="submit">Envoyer</button></div>
        </form>


      </div>
    </section>
    </div>
  );
}
