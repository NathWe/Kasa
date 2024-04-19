import React from "react";
import { GalleryContainer, Image, Overlay, Title } from "./gallery.style";

interface GalleryProps {
  cover: string;
  title: string;
  id: string;
}

const Gallery: React.FC<GalleryProps> = ({ cover, title }) => {
  return (
    <GalleryContainer>
      <Image src={cover} alt={title} />
      <Overlay />
      <Title>{title}</Title>
    </GalleryContainer>
  );
};

export default Gallery;
