import styled from "styled-components";

export const RateContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    svg {
      width: 15px;
      height: 15px;
    }
    margin-bottom: 13px;
  }

  @media only screen and (max-width: 374px) {
    svg {
      width: 15px;
      height: 15px;
    }
    margin-bottom: 13px;
  }
`;
