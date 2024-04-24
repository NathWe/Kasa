import React from "react";
import { StyledFooter } from "./Footer.style";
import logoFooter from "../../assets/logo/logoFooter.png";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <img src={logoFooter} alt="logo pied de page en noir" />
      <p>© 2022 Kasa. All rights reserved</p>
    </StyledFooter>
  );
}

export default Footer;
