import React from "react";
import { Tag } from "./Tags.style";

interface TagsProps {
  tagsNom: string;
}

const Tags: React.FC<TagsProps> = ({ tagsNom }) => {
  return <Tag>{tagsNom}</Tag>;
}

export default Tags;
