import styled from "styled-components";

export const Tag = styled.p`
  background-color: #ff6060;
  border-radius: 10px;
  color: #fff;
  margin-right: 10px;
  min-width: 115px;
  padding: 10px 15px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    min-width: 100px;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    min-width: 100px;
  }

  @media only screen and (max-width: 374px) {
    min-width: 100px;
  }
`;
