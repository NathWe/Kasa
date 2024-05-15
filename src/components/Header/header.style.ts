import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const underlineStyles = css`
  text-decoration: underline;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  margin: 45px 100px;
  padding-left: 55px;
  box-sizing: border-box;

  @media screen and (max-width: 374px) {
    padding-left: 0;
    margin: 0;
    height: 47px;
  }

  @media screen and (min-width: 993px) and (max-width: 1220px) {
    height: 47px;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    margin: 2rem 0;
  }
  @media screen and (min-width: 375px) and (max-width: 768px) {
    margin: 2rem 0 0 0;
    padding-left: 0;
    height: 47px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 50%;
  }
`;

export const LogoImage = styled.img`
  width: 210.32px;
  height: 68px;

  @media screen and (min-width: 370px) and (max-width: 768px) {
    width: 145px;
    height: 47px;
    margin: 20px;
  }
`;

export const NavigationContainer = styled.div``;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 370px) and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const NavigationItem = styled.li`
  margin-right: 57px;

  @media screen and (min-width: 370px) and (max-width: 768px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: black;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 34.22px;
  text-decoration: none;

  // Appliquer les styles de soulignement si le lien est actif
  &.active {
    ${underlineStyles};
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 12px;
  }
`;
