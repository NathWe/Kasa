import React from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  console.log("Current Pathname:", location.pathname);

  return (
    <HeaderContainer>
      <LogoContainer>
        <NavigationLink to="/">
          <LogoImage src={logo} alt="logo kasa" />
        </NavigationLink>
      </LogoContainer>

      <NavigationContainer>
        <NavigationList>
          <NavigationItem>
            <NavigationLink
              to="/"
              className={location.pathname === "/" ? "underline" : ""}
            >
              Accueil
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to="/apropos"
              className={location.pathname === "/apropos" ? "underline" : ""}
            >
              À Propos
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
