import styled from "styled-components";

export const PhotoContainer = styled.div`
  border-radius: 25px;
  width: 100%;
  height: 415px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 993px) and (max-width: 1220px) {
    height: 275px;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    height: 275px;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    height: 275px;
  }

  @media only screen and (max-width: 374px) {
    height: 275px;
  }
`;

export const NavigationContainer = styled.div`
  position: relative;

  .precedent,
  .suivant {
    position: absolute;
    width: 46px;
    height: 79px;
    top: 150px;
  }

  .precedent {
    left: 6px;
  }

  .suivant {
    right: 6px;
  }

  p {
    color: white;
    font-size: 18px;
    text-align: center;
    padding-top: 28%;

    @media screen and (min-width: 993px) and (max-width: 1220px) {
      padding-top: 27%;
    }

    @media screen and (min-width: 769px) and (max-width: 992px) {
      padding-top: 35%;
    }

    @media screen and (min-width: 375px) and (max-width: 768px) {
      padding-top: 73%;
    }

    @media only screen and (max-width: 374px) {
      padding-top: 72%;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    .precedent,
    .suivant {
      width: 11px;
      height: 19px;
      position: absolute;
      top: 100px;
    }
  }
`;
