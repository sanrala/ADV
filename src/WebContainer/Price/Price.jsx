import React from 'react'

function Price() {
  return (
    <div>
        <section id="pricing" class="pricing section-bg">
      <div class="container">

      <div className="section-header">
          <h2>Tarifs</h2>
          <p>Des tarifs selon <span>vos besoins</span></p>
        </div>

        <div class="row"     >

          <div class="col-lg-3 col-md-6">
            <div class="box featured">
              <h3>PACK « BUREAUTIQUE » </h3>
              <h4>4 h<span> / mois*</span></h4>
              <h4>100 € HT<span> / mois*</span></h4>
              <ul>
                <li><i  className="bi bi-check2-all text-danger"></i> Tri du courrier</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Rédaction et mise en forme <br /> de documents/courriels</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Scan de documents</li>
                <li ><i  className="bi bi-check2-all text-danger"></i> Classement </li>
                
              </ul>
              {/* <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div> */}
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div class="box featured">
              <h3>PACK « RELATION CLIENT »</h3>
              <h4>16 h<span> / mois*</span></h4>
              <h4>450 € HT<span> / mois*</span></h4>
              <ul>
                <li><i  className="bi bi-check2-all text-danger"></i> Gestion de la messagerie</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Saisie des devis </li>
                <li><i  className="bi bi-check2-all text-danger"></i> Facturation</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Suivi recouvrement factures</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Relance paiements</li>
                <li ><i  className="bi bi-check2-all text-danger"></i> Classement des factures de vente</li>
              </ul>
              
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box featured">
              <h3>PACK « ADV »</h3>
              <h4>30 h<span> / mois*</span></h4>
              <h4>900 € HT<span> / mois*</span></h4>
              <ul>
                <li><i  className="bi bi-check2-all text-danger"></i> Pack « Relation Client »</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Demandes de prix fournisseurs</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Commandes fournisseurs + suivi</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Alerte sur échéances de facture</li>
                <li><i  className="bi bi-check2-all text-danger"></i> Classement factures d’achat</li>
              </ul>
       
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box featured">
              {/* <span class="advanced">Le plus vendu</span> */}
              <h3>PACK « SUR-MESURE »</h3>
              <h4> 32 € HT<span> / Heure*</span></h4>
             
              <ul>
                <li><i  className="bi bi-check2-all text-danger"></i> Nous construisons ensemble une liste de tâches 
en fonction de vos besoins.</li>
           
              </ul>
      
            </div>
          </div>

        </div>
        <div className="my-4">
        <i>*Attention : une plus-value sera appliquée pour les travaux réalisés sur site
(distance A/R x 0.66 €)</i>
</div>
      </div>
    </section>
    </div>
  )
}

export default Price