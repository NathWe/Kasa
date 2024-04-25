import React from "react";
import { RateContainer } from "./StarRating.style";
import StarFull from "../IconStar/StarFull";
import StarGrey from "../IconStar/StarGrey";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starsArray = [];

  for (let i = 0; i < 5; i++) {
    i < rating
      ? starsArray.push(<StarFull key={starsArray.toString()} />)
      : starsArray.push(<StarGrey key={starsArray.toString()} />);
  }

  return (
    <RateContainer>
      <span>{starsArray}</span>
    </RateContainer>
  );
}

export default StarRating;
