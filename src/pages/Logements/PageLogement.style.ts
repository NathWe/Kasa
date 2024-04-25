import styled from "styled-components";

export const FicheLogementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90vw;
`;

export const TitreLogementContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const TitreNomContainer = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TitreH2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
`;

export const TitreP = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const NomLogementContainer = styled.div`
  align-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const HebergerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const HebergerH3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
`;

export const HebergerImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NameRatingContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 2.5rem;
  margin-top: 1rem;
`;

export const DescriptEquipContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
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
  color: #ff6060;
  height: auto;
  padding: 30px 10px;
  font-weight: 400;
  display: list-item;
  list-style: none;
`;

export const EquipementsLi = styled.li`
  font-weight: 400;
  padding: 2px;
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
