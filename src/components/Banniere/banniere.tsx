import React from "react";
import {
  BanniereContainer,
  BanniereImage,
  BanniereTitle,
} from "./banniere.style";

interface BanniereProps {
  image: string;
  showTitle?: boolean;
}

const Banniere: React.FC<BanniereProps> = ({ image, showTitle = true }) => {
  return (
    <BanniereContainer>
      <BanniereImage src={image} alt="" />
      {showTitle && (
        <BanniereTitle>Chez vous, partout et ailleurs</BanniereTitle>
      )}
    </BanniereContainer>
  );
};

export default Banniere;
