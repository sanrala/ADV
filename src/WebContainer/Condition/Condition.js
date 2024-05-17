import React from 'react'
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
  
function Condition() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
         <Button onClick={handleOpen}>Conditions Générales de Vente.</Button>
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
         <h4> 1/ GÉNÉRALITÉS</h4>
 <p > ADV BUREAUTIQUE &amp; SOLUTIONS, numéro SIRET : xxx xxx xxx, représentée par Claire MAURO, ci-
dénommée après « le prestataire » est une entreprise spécialisée dans le service et le conseil
administratif à destination des entreprises, ci-dénommées après « le client ». Le siège social est
établi au 193, rue Anatole France à CAMBLAIN-CHÂTELAIN (62470).</p>


 <h4> 2/ PRESTATIONS</h4>
<p className="text-justify"> Les prestations de service proposées par le prestataire sont toutes soumises aux présentes
Conditions Générales de Vente.
Toute commande implique l’adhésion sans réserve du client à ses CGV, qu’il déclare avoir lues et
comprises.
</p>

 <h4>3/ COLLABORATION</h4>
 <p>Prestataire et client s’engagent à collaborer activement et déclarent être assurées notamment au
titre de la Responsabilité Civile Professionnelle.
Le prestataire s’engage à réaliser les prestations conformément aux termes du devis.
Le client s’engage à fournir au prestataire, dans les délais requis, tous les documents,
renseignements et informations nécessaires à la bonne réalisation des prestations. En outre, le client
certifie posséder les droits de propriétés intellectuelles et les autorisations administratives des pièces
exploitées par ADV BUREAUTIQUE &amp; SOLUTIONS dans le cadre de la mission confiée. Le client
s’engage à n’utiliser les services du prestataire qu’à des fins strictement licites.
ADV BUREAUTIQUE &amp; SOLUTIONS se réserve le droit de refuser tous les travaux dont les intentions
seraient contraires à l’honnêteté ou à la morale.
Les prestations de ADV BUREAUTIQUE &amp; SOLUTIONS sont réalisées dans les locaux de l’entreprise ou
dans ceux du client. Dans ce dernier cas, le client s’engage à mettre à la disposition du prestataire, le
matériel nécessaire à la bonne réalisation de la mission confiée.
 </p>

 <h4>4/ DEVIS ET COMMANDES</h4>
 <p>ADV BUREAUTIQUE &amp; SOLUTIONS réalise ses devis à titre grâcieux sur simple demande et sans aucun
engagement.
Afin de concrétiser sa commande, le client devra retourner au prestataire le devis, ainsi que les CGV,
signés et tamponnés, précédés de la mention manuscrite « Bon pour accord ».
De plus, un acompte de 30% du montant total figurant au devis devra parvenir à ADV BUREAUTIQUE
&amp; SOLUTIONS afin que la prestation puisse démarrer. La commande sera confirmée de manière
ferme et définitive à la réception des documents et de l’acompte.
 </p>

 <h4>5/ DÉLAIS DE LIVRAISON</h4>
 <p>Le prestataire s’engage à proposer les délais les plus adaptés à la demande du client dans la mesure
de ses disponibilités. Les délais de livraison lors de la signature du devis sont donnés à titre indicatif
et ADV BUREAUTIQUE &amp; SOLUTIONS se réserve le droit de modifier ces délais en cas de force
majeure. La non-exécution des prestations et les retards liés à un cas de force majeure ne peuvent en
aucun cas engager la responsabilité du prestataire ni donner lieu à une indemnité quel que soit le
préjudice résultant de ce retard.

Le client dispose d’un délai de soixante-douze heures à compter de la date de réception des travaux
pour émettre des réserves et réclamations par écrit ou par mail. Passé ce délai, les travaux seront
réputés conformes à la commande et aucune réclamation ne sera admise.
 </p>

 <h4>6/ ANNULATION ET RÉTRACTATION</h4>
 <p>Dans le cas où la mission n’a pas encore débuté, un droit de rétractation est accepté dans la limite de
sept jours ouvrables à compter de la date de la signature du devis confirmant la commande. Le client
devra avertir le prestataire par écrit. L’acompte versé ne sera pas restitué.
Dans le cas d’annulation d’une commande en cours de réalisation, le client s’engage à confirmer
l’annulation par écrit. Dans ce cas, la part de prestation déjà effectuée est considérée comme due et
le client s’engage à régler le montant de cette facture sans délai.
 </p>

 <h4>7/ TARIFS ET MODALITÉS DE REGLEMENT</h4>
 <p> ADV BUREAUTIQUE &amp; SOLUTIONS se réserve le droit de modifier ses tarifs à tout moment. Les tarifs
des prestations sont indiqués en euros et sont révisés chaque année au 1 er janvier.
Les tarifs seront majorés d’éventuels frais d’affranchissement, d’impression, de fournitures
particulières. Ces frais particuliers entraineront la demande d’une provision payable par le client au
moment de la signature du devis.
Dès lors que la prestation est effectuée en dehors du siège social, le prestataire facturera au client
des frais kilométriques selon le barème en vigueur au moment de la prestation.
Conformément à l’article 293B du Code Général des Impôts, la TVA est non applicable, les montants
sont donc exprimés en Hors Taxe.
Les prestations réalisées par ADV BUREAUTIQUE &amp; SOLUTIONS sont payables sous 15 jours à
réception de la facture par chèque ou virement bancaire.
Aucun escompte n’est applicable en cas de paiement anticipé.
Conformément à l’article L441-6 du Code du Commerce, tout retard de paiement entraînera la
facturation de pénalités de retard calculées sur la base du taux d’intérêt légal majoré sans qu’aucune
mise en demeure ne soit nécessaire. En cas de retard de paiement, application d’une indemnité
forfaitaire pour frais de recouvrement de 40 € selon l’article D441-5 du Code du Commerce.
 </p>

 <h4>8/ RESPONSABILITÉ ET CONFIDENTIALITÉ</h4>
 <p>De convention expresse entre les parties, le prestataire n’est soumis qu’à une obligation de moyens
et sa responsabilité ne porte que sur le non-respect de cette obligation.
Les prestations de ADV BUREAUTIQUE &amp; SOLUTIONS sont soumises à la discrétion professionnelle. Le
prestataire s’engage à respecter la confidentialité avant, pendant et après la prestation, de toutes les
informations et données portées à sa connaissance dans le cadre de la mission qui lui est confiée.
Le prestataire s’engage à mettre en œuvre tous les moyens dont il dispose pour préserver les
documents et fichiers informatiques confiés par le client. Cependant, en raison des risques de
détérioration liés à ce type de support, il appartient au client de se prémunir, par tous les moyens à
sa convenance, contre les dommages. ADV BUREAUTIQUE &amp; SOLUTIONS ne pourra être tenu
responsable d’erreurs commises par des tiers.
ADV BUREAUTIQUE &amp; SOLUTIONS ne pourra être tenu responsable des incompatibilités
informatiques dues aux versions de logiciels ou système d’exploitation utilisés par le client.</p>

 <h4>9/ DROIT APPLICABLE</h4>
 <p>Les présentes Conditions Générales de Vente sont soumises au droit français. A défaut de résolution
amiable, tout litige relatif à l’interprétation ou à l’exécution de ces CGV sera porté devant le Tribunal
xxxxxxx.
 </p>

</div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Condition