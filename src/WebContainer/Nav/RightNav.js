import React from 'react';
import styled from 'styled-components';

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

const RightNav = ({ open }) => {
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
                <a href="#Tarifs">Tarifs</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
    </Ul>
    </div>
  )
}

export default RightNav