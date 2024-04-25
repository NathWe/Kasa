import React, { useState } from "react";
import { PhotoContainer, NavigationContainer } from "./Carroussel.style.ts";
import droite from "../../assets/icones/droite.png";
import gauche from "../../assets/icones/gauche.png";

interface CarrousselProps {
  pictures: string[];
}

let index = 0;

const Carroussel: React.FC<CarrousselProps> = ({ pictures }) => {
  const [, setNewImg] = useState<number>(0);

  const btnSuivant = () => {
    index++;
    if (index >= pictures.length) index = 0;
    setNewImg(index);
  };

  const btnPrecedent = () => {
    index--;
    if (index < 0) index = pictures.length - 1;
    setNewImg(index);
  };

  const navigation = () => {
    return (
      <NavigationContainer>
        <img src={gauche} className="precedent" onClick={btnPrecedent} alt="" />
        <img src={droite} className="suivant" onClick={btnSuivant} alt="" />
        <p>
          {index + 1}/{pictures.length}
        </p>
      </NavigationContainer>
    );
  };

  return (
    <PhotoContainer
      style={{ backgroundImage: `url("${pictures[index]}")` }}
    >
      {pictures.length > 1 ? navigation() : null}
    </PhotoContainer>
  );
};

export default Carroussel;
