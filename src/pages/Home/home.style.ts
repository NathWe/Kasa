import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;

  @media screen and (min-width: 375px) and (max-width: 1220px) {
    width: 90vw;
  }
  @media screen and (max-width: 374px) {
    width: 100%;
    
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 25px;
  background: #f7f7f7;
  margin: 2rem 5rem;
  padding: 3rem 0;
  width: 90vw;

  @media screen and (min-width: 993px) and (max-width: 1220px),
    screen and (min-width: 769px) and (max-width: 992px),
    screen and (min-width: 375px) and (max-width: 768px),
    screen and (max-width: 374px) {
    width: 90vw;
    padding: 0px;
    background: white;
  }

  @media screen and (max-width: 375px) {
    margin: 0rem 2rem; /* Appliquer la marge spécifique au format 375 pixels */
  }
`;
