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
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul  open={open}>
      <li>Accueil</li>
      <li>Présentation</li>
      <li>Prestations</li>
      <li>Tarifs</li>
      <li>Contact</li>
    </Ul>
  )
}

export default RightNav