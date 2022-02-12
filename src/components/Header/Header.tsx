import React, { useState } from "react";
import { Container  } from './styles';
import Logo from '../../images/logo.png'

const Header: React.FC = () => {
 
  return (
      <Container>
          <img src={Logo} alt="test"/>
      </Container>
  )
};

export default Header;
