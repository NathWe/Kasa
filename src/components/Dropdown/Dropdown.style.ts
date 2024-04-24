import styled from "styled-components";

export const TitreDropdown = styled.div`
  height: 47px;
  background-color: #ff6060;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border-radius: 5px;


  h3 {
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }

  img {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    cursor: pointer;
  }

`;

export const DropdownText = styled.p`
  color: black;
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 0 0 5px 5px; 
  margin: 0; 
`;
