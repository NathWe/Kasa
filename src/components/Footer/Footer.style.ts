// Footer.style.ts
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #000000;
  width: 100%;
  height: 150px;
  color: white;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 209px;

  p {
    margin: 40px 0 30px 0;
    text-align: center;
    max-width: 90%;

    span {
      display: inline-block;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
    p {
      max-width: 100%;
      span {
        display: block;
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 12px;
    p {
      max-width: 100%;
      span {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    font-size: 12px;
    p {
      max-width: 100%;
      span {
        display: block;
      }
    }
  }
`;
