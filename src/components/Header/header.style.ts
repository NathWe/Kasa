import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  margin: 45 px 100px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 210.32px;
  height: 68px;
`;

export const NavigationContainer = styled.div``;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const NavigationItem = styled.li`
  margin-right: 57px;
`;

export const NavigationLink = styled(NavLink)`
  color: black;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 34.22px;
  text-decoration: none;
`;
