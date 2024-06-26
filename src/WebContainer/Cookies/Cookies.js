import React, { useState } from 'react';
import './CookieBar.css';

const CookieBar = () => {
  const [accepted, setAccepted] = useState(false);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setAccepted(true);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesDecline', 'false');
    setAccepted(true);
  };

  const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
  const cookiesDecline = localStorage.getItem('cookiesDecline') === 'false';
  if (accepted || cookiesAccepted) {
    return null; // Hide the bar if cookies are accepted
  }

  return (
    <div className="cookie-consent-banner">
    <div className="cookie-consent-banner__inner">
      <div className="cookie-consent-banner__copy">
        <div className="cookie-consent-banner__header">CE SITE UTILISE DES COOKIES</div>
        <div className="cookie-consent-banner__description">Nous utilisons des cookies pour personnaliser le contenu et les publicités, pour fournir des fonctionnalités de médias sociaux et pour analyser notre trafic. Nous partageons également des informations sur votre utilisation de notre site avec nos partenaires de médias sociaux, de publicité et d’analyse qui peuvent les combiner avec d’autres informations que vous leur avez fournies ou qu’ils ont collectées lors de votre utilisation de leurs services. Vous consentez à nos cookies si vous continuez à utiliser notre site Web.</div>
      </div>
  
      <div className="d-flex cookie-consent-banner__actions">
        <a href="" className="cookie-consent-banner__cta" onClick={acceptCookies}>
          Accepter
        </a>
        
        <a href="#" className="cookie-consent-banner__cta cookie-consent-banner__cta--secondary" onClick={declineCookies}>
          Refuser
        </a>
      </div>
    </div>
  </div>
  );
};

export default CookieBar;