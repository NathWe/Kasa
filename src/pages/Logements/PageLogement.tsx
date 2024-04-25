import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tags/Tags";
import StarRating from "../../components/StarRating/StarRating";
import {
  FicheLogementContainer,
  NavigationContainer,
  TitreLogementContainer,
  TitreNomContainer,
  TitreH2,
  TitreP,
  NomLogementContainer,
  HebergerContainer,
  HebergerH3,
  HebergerImg,
  NameRatingContainer,
  DescriptEquipContainer,
  DescriptionContainer,
  EquipementsContainer,
  DescriptionP,
  EquipementsUl,
  EquipementsLi,
  TagEvaluationContainer,
  TagsContainer,
} from "./PageLogement.style";
import { getId } from "../../data/services";

interface Logement {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  description: string;
  equipments: string[];
}

function Pagelogements() {
  const { logementId }: { logementId ?: string } = useParams();
  const ficheLogement = getId(logementId);

if (!ficheLogement) {
  // Gérer le cas où aucun logement n'est trouvé avec l'ID spécifié
  return <Navigate to="/page404"></Navigate>;
}

  return (
    <FicheLogementContainer>
      <NavigationContainer>
        <Carroussel pictures={ficheLogement.pictures} />
      </NavigationContainer>
      <TitreLogementContainer>
        <TitreNomContainer>
          <TitreH2>{ficheLogement.title}</TitreH2>
          <TitreP>{ficheLogement.location}</TitreP>
          <TagEvaluationContainer>
            <TagsContainer>
              {ficheLogement.tags.map((tag) => (
                <Tag tagsNom={tag} key={tag} />
              ))}
            </TagsContainer>
          </TagEvaluationContainer>
        </TitreNomContainer>
        <NomLogementContainer>
          <HebergerContainer>
            <HebergerH3>{ficheLogement.host.name}</HebergerH3>
            <HebergerImg
              src={ficheLogement.host.picture}
              alt={ficheLogement.host.picture}
            />
          </HebergerContainer>
          <NameRatingContainer>
            <StarRating rating={ficheLogement.rating} />
          </NameRatingContainer>
        </NomLogementContainer>
      </TitreLogementContainer>
      <DescriptEquipContainer>
        <DescriptionContainer>
          <Dropdown title="Description" text={ficheLogement.description} />
        </DescriptionContainer>
        <EquipementsContainer>
          <Dropdown title="Équipements" text={ficheLogement.equipments} />
        </EquipementsContainer>
      </DescriptEquipContainer>
    </FicheLogementContainer>
  );
}

export default Pagelogements;
