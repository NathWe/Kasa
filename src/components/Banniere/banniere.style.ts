import styled from "styled-components";

export const BanniereContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 223px;
  position: relative;
  background: #000;
  border-radius: 25px;
  margin: 45px 100px;

  /* Media queries */
  @media screen and (min-width: 993px) and (max-width: 1220px) {
    width: 90vw;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 90vw;

    h1 {
      font-size: 37px;
      width: 60%;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 768px) {
    width: 90vw;
    height: 111px;
    border-radius: 10px;
    margin: 20px;

    img {
      border-radius: 10px;
    }

    h1 {
      font-size: 24px;
      width: 60%;
    }
  }

  @media only screen and (max-width: 374px) {
    width: 90vw;
    border-radius: 10px;

    img {
      border-radius: 10px;
    }

    h1 {
      font-size: 24px;
      width: 250px;
    }
  }
`;

export const BanniereImage = styled.img`
  object-fit: cover;
  border-radius: 25px;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`;

export const BanniereTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  position: absolute;
  color: white;

  @media screen and (min-width: 370px) and (max-width: 768px) {
left: 20px;
`;
