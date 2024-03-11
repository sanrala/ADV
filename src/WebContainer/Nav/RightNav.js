import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../css/main.css"
const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1279px) {
    flex-flow: column nowrap;
    background-color: white;
    border-left: 1px solid #666;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  display: flex;
    li {
      color: #7f7f90;
    }
     a,
   a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-family: #37373f;
    font-size: 16px;
    font-weight: 600;
    color: #7f7f90;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
    text-decoration: none;
  }


   a:hover:before,
   li:hover>a:before,
  .active:before {
    visibility: visible;
    width: 100%;
  }
   a:hover,
   .active,
   .active:focus,
  li:hover>a {
    color: #000;
  }

  }
`;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Tarifs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="section-bg" >
        {/* <h4>Tarifs</h4> */}
        <div className="do d-flex flex-column  align-items-start">
          <p>
            <i className=" bi bi-check2-all text-danger"></i> A distance : 30€
            HT/h*.
          </p>
          <p>
            <i className="bi bi-check2-all text-danger"></i> Sur site : 30€ HT/h
            + 0.66€ /Km*.
          </p>
          <div className="gift">
            <p className="bonus ">
              <i class="gift bi bi-gift text-danger"></i>
              Offre de bienvenue: 10% de remise sur votre première facture.
            </p>
          </div>
          <div className="gift">
            <p className="bonus ">
              <i class="gift bi bi-gift text-danger"></i>
              Offre de parrainage: 10% de remise pour vous sur votre prochaine
              facture et 10% pour votre filleul sur sa première facture.
            </p>
          </div>
        </div>
        <p className="maj">
          *Majoration de 25% si prestations urgentes réalisées le soir après
          18h30 pour le lendemain ainsi que pour toute prestation effectuée le
          Samedi <br />
          Majoration de 50% pour tout travail effectué le dimanche et jours
          fériés.
        </p>
      </Modal.Body>
    
  
               
   
   
      <Modal.Footer className="section-bg" >
        {/* <Button className="btn-book-a-table" onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

const RightNav = ({ open }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='burgerNav' >
    <Ul  open={open}>
  <li>
                <a href="#Accueil">Accueil</a>
              </li>
              <li>
                <a href="#Présentation">Présentation</a>
              </li>
              <li>
                <a href="#Avantages">Avantages</a>
              </li>
              <li>
                <a href="#Prestations">Prestations</a>
              </li>
              <li>
                <a href="#Tarifs" variant="primary" onClick={() => setModalShow(true)}>Tarifs</a>
             
                <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
    </Ul>
    </div>
  )
}

export default RightNav