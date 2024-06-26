import React, { useState } from "react";
import Condition from "./../Condition/Condition"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


import "../../../src/css/main.css";

import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};


export default function Footer() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modalShow, setModalShow] = React.useState(false);
  return (

    <div>
<footer id="footer" className="footer">

<div className="container " >
  <div className="row gy-3">
    <div className="col-lg-3 col-md-6 d-flex justify-content-center ">
      <i className="bi bi-geo-alt icon"></i>
      <div>
        <h4>Adresse</h4>
        <p>
          
          62470 CAMBLAIN-CHATELAIN <br/> FRANCE<br/>
        </p>
      </div>

    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex justify-content-center">
      <i className="bi bi-telephone icon"></i>
      <div>
        <h4>Contact</h4>
        <p>
          <strong>téléphone:</strong> 06 70 28 97 72<br/>
          <strong>Email:</strong> contact@adv-bureautique.fr<br/>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex justify-content-center">
      <i className="bi bi-clock icon"></i>
      <div >
      <h4>Horaires</h4>
        <p>
          <strong>Lundi au Vendredi: 9h</strong> - 17h<br/>

        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex justify-content-center">
    <i className="bi bi-hand-thumbs-up icon"></i>
    <div>
      <h4>Suivez moi</h4>
      <div className="social-links d-flex  justify-content-center">
        
        <a href="https://www.facebook.com/profile.php?id=61557492664606&locale=fr_FR" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
     
        <a href="https://www.linkedin.com/in/claire-mauro-108625196/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
    </div>
  </div>
</div>

<div className="container">
  <div className="copyright">
    &copy; Copyright <strong><span>ADV Bureautique & Solutions</span></strong>. Tout droit réservés
  </div>
  <div className="credits">

    Création du site <a href="">Sébastien Mauro</a> <br />
    <Button onClick={handleOpen}>Mentions Légales</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Mentions Légales
          </Typography> */}
          <Typography id="keep-mounted-modal-description" sx={{ mt: 4 }}>
            <div className="mentions d-flex flex-column text-justify">
         <h4> 1. Présentation du site.</h4>
 <p > En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site ADV-Bureautique.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
<br />
 Propriétaire : Claire MAURO – 193, rue Anatole France 62470 Camblain-Châtelain
<br />
 Créateur : Claire MAURO - ADV-Bureautique.fr
<br />
 Responsable publication : Claire MAURO
<br />
 Webmaster : Sébastien MAURO – sebastien.mauro@gmail.fr
<br />
 Hébergeur : Vercel - 440 N Barranca Ave #4133, Covina, CA 91723</p>


 <h4> 2. Conditions générales d'utilisation du site et des services proposés.</h4>
<p className="text-justify"> L'utilisation du site ADV-Bureautique.fr implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site ADV-Bureautique.fr sont donc invités à les consulter de manière régulière. Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par ADV-Bureautique.fr , qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention. Le site ADV-Bureautique.fr est mis à jour régulièrement par Claire MAURO. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin d'en prendre connaissance.
</p>

 <h4>3. Description des services fournis.</h4>
 <p>Le site ADV-Bureautique.fr a pour objet de fournir une information concernant l'ensemble des activités de la société. Claire MAURO s'efforce de fournir sur le site ADV-Bureautique.fr des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Tous les informations indiquées sur le site ADV-Bureautique.fr sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ADV-Bureautique.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
 </p>

 <h4>4. Limitations contractuelles sur les données techniques.</h4>
 <p>Le site utilise la technologie REACT, framework de JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
 </p>

 <h4>5. Propriété intellectuelle et contrefaçons.</h4>
 <p>Claire MAURO est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, certaines images, graphismes, logo, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Claire MAURO. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
 </p>

 <h4>6. Limitations de responsabilité.</h4>
 <p>Claire MAURO ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site ADV-Bureautique.fr , et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.

 Claire MAURO ne pourra également être tenu responsable des dommages indirects (par exemple qu'une perte de marché) consécutifs à l'utilisation du site ADV-Bureautique.fr .

 Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. Claire MAURO se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Claire MAURO se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l'utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
 </p>

 <h4>7. Gestion des données personnelles.</h4>
 <p> En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.

 À l'occasion de l'utilisation du site ADV-Bureautique.fr , peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site ADV-Bureautique.fr , le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.

 En tout état de cause Claire MAURO ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site ADV-Bureautique.fr . L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site ADV-Bureautique.fr l'obligation ou non de fournir ces informations.

 Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.

 Aucune information personnelle de l'utilisateur du site www.ADV-Bureautique.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de Claire MAURO et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site ADV-Bureautique.fr .

 Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles.

 Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
 </p>

 <h4>8. Liens hypertextes et cookies.</h4>
 <p>Le site ADV-Bureautique.fr contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de Claire MAURO. Cependant, Claire MAURO n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.

 La navigation sur le site ADV-Bureautique.fr est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.

 Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies : Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok. Sous Netscape : onglet édition / préférences. Cliquez sur Avancées et choisissez Désactiver les cookies. Validez sur Ok.

 Cookies d'analyse

 _ga, _gat : Cookies propres à Google Analytics (statistiques) </p>

 <h4>9. Droit applicable et attribution de juridiction.</h4>
 <p>Tout litige en relation avec l'utilisation du site ADV-Bureautique.fr est soumis aux tribunaux francais compétents statuant selon le droit français.
 </p>

<h4> 10. Les principales lois concernées.</h4>
<p>Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.

 Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
 </p>


<h4> 11. Lexique.</h4>
<p>Utilisateur : Internaute se connectant, utilisant le site susnommé.

 Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
 </p>
</div>
          </Typography>
        </Box>
      </Modal>
      <Condition/>
    {/* <a href=""  variant="primary"
                  onClick={() => setModalShow(true)} >Mentions Légales</a>
  <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              /> */}
  
  </div>
 
</div>

</footer>
  </div>
);
}
