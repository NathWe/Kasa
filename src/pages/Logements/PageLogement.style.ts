import styled from "styled-components";

export const FicheLogementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 374px) {
    width: 100%;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90vw;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 374px) {
    width: 100%;
  }
`;

export const TitreLogementContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 374px) {
    flex-direction: column;
  }
`;

export const TitreNomContainer = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 374px) {
    width: 100%;
  }
`;

export const TitreH2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 0;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 18px;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 374px) {
    font-size: 18px;
  }
`;

export const TitreP = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 0;
  color: black;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 14px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 374px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const NomLogementContainer = styled.div`
  align-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  @media only screen and (max-width: 374px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }
`;

export const HebergerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 50%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 50%;
  }

  @media only screen and (max-width: 374px) {
    width: 50%;
  }
`;

export const HebergerH3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  white-space: pre-line;

  @media only screen and (max-width: 992px) {
    font-size: 12px;
  }
`;

export const HebergerImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;

  @media only screen and (max-width: 992px) {
    width: 32px;
    height: 32px;
  }
`;

export const NameRatingContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 2.5rem;
  margin-top: 1rem;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }
`;

export const DescriptEquipContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;

  ul {
    background-color: #f6f6f6;
    color: black;
    list-style-type: none;
    padding-top: 10px;
    margin: 0;
    padding-left: 20px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;
    gap: 0;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 2rem;
  width: 100%;
`;

export const EquipementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 2rem;
  width: 100%;
`;

export const DescriptionP = styled.p`
  background-color: #f6f6f6;
  font-size: 18px;
  color: #ff6060;
  height: auto;
  padding: 30px 10px;
  font-weight: 400;
  display: list-item;
  list-style: none;
`;

export const EquipementsUl = styled.ul`
  background-color: #f6f6f6;
  font-size: 18px;
  height: auto;
  padding: 30px 10px;
  font-weight: 400;
  display: list-item;
  list-style: none;
`;

export const EquipementsLi = styled.li`
  font-weight: 400;
  padding: 0;
  margin-left: 20px;
`;

export const TagEvaluationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const TagsContainer = styled.div`
  display: flex;
  width: auto;
`;
