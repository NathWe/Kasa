import React from "react";
import {
  BanniereContainer,
  BanniereImage,
  BanniereTitle,
} from "./banniere.style";

interface BanniereProps {
  image: string;
}

const Banniere: React.FC<BanniereProps> = ({ image }) => {
  return (
    <BanniereContainer>
      <BanniereImage src={image} alt="" />
      <BanniereTitle>Chez vous, partout et ailleurs</BanniereTitle>
    </BanniereContainer>
  );
};

export default Banniere;
