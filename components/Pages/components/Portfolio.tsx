import React from "react";
import { components } from "../../../blocks";

const Portfolio: React.FC = () => {
  const blockType = "galleryBlock";
  const Gallery = components[blockType];

  return <Gallery blockType={blockType} />;
};

export default Portfolio;
