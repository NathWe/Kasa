import styled from "styled-components";

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;

  @media screen and (min-width: 993px) and (max-width: 1220px) {
    width: 90%;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 374px) {
    width: 100%;
  }
`;

export const About = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  /* Media queries */
  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 90%;
    .about {
      padding-top: 19px;
    }
  }
  @media only screen and (max-width: 374px) {
    .main-banner {
      width: 90%;
    }
    .about {
      padding-top: 19px;
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 2rem;
  width: 100%;
`;

export const DropdownText = styled.p`
  height: auto;
  padding: 10px 30px;
  width: 100%;
  color: black;
  background-color: #f6f6f6;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
`;
