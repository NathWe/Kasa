import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./header.style";
import logo from "../../assets/logo/logoHeader.png";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="logo kasa" />
      </LogoContainer>
      <NavigationContainer>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/home" className="underline">
              Accueil
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/home" className="underline">
              À Propos
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
