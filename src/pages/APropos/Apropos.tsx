import React from "react";
import { MainBanner, About, DropdownContainer } from "./Apropos.style";
import Image from "../../assets/images/banniereApropos.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import Banniere from "../../components/Banniere/banniere";

const Apropos: React.FC = () => {
  return (
    <MainBanner>
      <Banniere image={Image} showTitle={false} />
      <About>
        <DropdownContainer>
          <Dropdown
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
        </DropdownContainer>

        <DropdownContainer>
          <Dropdown
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </DropdownContainer>

        <DropdownContainer>
          <Dropdown
            title="Service"
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </DropdownContainer>

        <DropdownContainer>
          <Dropdown
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </DropdownContainer>
      </About>
    </MainBanner>
  );
};

export default Apropos;
