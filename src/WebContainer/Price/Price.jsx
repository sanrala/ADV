import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));

function Price(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isSmallScreen ? '90%' : 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <section id="pricing" className="pricing section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>Tarifs</h2>
                        <p>Des tarifs selon <span>vos besoins</span></p>
                        <div className="">
                            <Button className="btn-buy" onClick={handleOpen}>
                                <LocalOfferIcon /> Offre de bienvenue
                            </Button>
                        </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-description" sx={{ mt: 6 }}>
                                    <div className="gift">
                                        <p className="bonus">
                                            <i className="gift bi bi-gift text-danger"></i>
                                            Offre de bienvenue: 10% de remise sur votre première facture.
                                        </p>
                                    </div>
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 6 }}>
                                    <div className="gift">
                                        <p className="bonus">
                                            <i className="gift bi bi-gift text-danger"></i>
                                            Offre de parrainage: 10% de remise pour vous sur votre prochaine
                                            facture et 10% pour votre filleul sur sa première facture.
                                        </p>
                                    </div>
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 6 }}>
                                    <p className="maj">
                                        <i>* Majoration de 25% si prestations urgentes réalisées le soir après
                                            18h30 pour le lendemain ainsi que pour toute prestation effectuée le
                                            Samedi <br />
                                            Majoration de 50% pour tout travail effectué le dimanche et jours
                                            fériés. <br />
                                            TVA non applicable selon l’article 293 B du Code Général des Impôts.</i>
                                    </p>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="box featured">
                                <h3>PACK « BUREAUTIQUE » </h3>
                                <h4>4 h<span> / mois*</span></h4>
                                <h4>100 € HT<span> / mois*</span></h4>
                                <ul>
                                    <li><i className="bi bi-check2-all text-danger"></i> Tri du courrier</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Rédaction et mise en forme <br /> de documents/courriels</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Scan de documents</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Classement </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div className="box featured">
                                <h3>PACK « RELATION CLIENT »</h3>
                                <h4>16 h<span> / mois*</span></h4>
                                <h4>450 € HT<span> / mois*</span></h4>
                                <ul>
                                    <li><i className="bi bi-check2-all text-danger"></i> Gestion de la messagerie</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Saisie des devis </li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Facturation</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Suivi recouvrement factures</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Relance paiements</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Classement des factures de vente</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box featured">
                                <h3>PACK « ADV »</h3>
                                <h4>30 h<span> / mois*</span></h4>
                                <h4>900 € HT<span> / mois*</span></h4>
                                <ul>
                                    <li><i className="bi bi-check2-all text-danger"></i> Pack « Relation Client »</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Demandes de prix fournisseurs</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Commandes fournisseurs + suivi</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Alerte sur échéances de facture</li>
                                    <li><i className="bi bi-check2-all text-danger"></i> Classement factures d’achat</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="box featured">
                                <h3>PACK « SUR-MESURE »</h3>
                                <h4> 32 € HT<span> / Heure*</span></h4>
                                <ul>
                                    <li><i className="bi bi-check2-all text-danger"></i> Nous construisons ensemble une liste de tâches 
en fonction de vos besoins.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <i>*Attention : une plus-value sera appliquée pour les travaux réalisés sur site
(distance A/R x 0.66 €)
 <br />
 TVA non applicable selon l’article 293 B du Code Général des Impôts.  </i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Price;
