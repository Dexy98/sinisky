import React from 'react';
import logo from "../assets/logo.svg";
import scritta from "../assets/scritta.svg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const NavigationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 20;
`;

const LogoContainer = styled.div`
  width: 309.36px;
  display: flex;
`;

const LogoImg = styled.img`
  width: 309.36px;
`;

const ScrittaImg = styled.img`
  width: 309.36px;
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 75px;


  @media only screen and (max-width: 930px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  gap: 75px;
  font-size: 20px;
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s;

  &:hover {
    color: #2cb1bf;
  }

  &::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: #2cb1bf;
    position: absolute;
    right: 0%;
    bottom: -5px;
    transition: width 0.42s cubic-bezier(.215, .61, .355, 1);
  }

  &.change::before {
    width: 100%;
  }

  &.change {
    color: white;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <LogoImg src={logo} alt="logo" />
        <ScrittaImg src={scritta} alt="scritta" />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink to="/sinisky">home</NavLink>
        <NavLink to="/sinisky/Service">service</NavLink>
        <NavLink to="/sinisky/Contatti">contatti</NavLink>
      </NavLinksContainer>
    </NavigationContainer>
  );
};

export default Navbar;
