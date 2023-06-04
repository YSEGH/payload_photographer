import React from "react";
import { components } from "../../../blocks";

type Props = {
  page: any;
};

const Portfolio: React.FC<Props> = (props) => {
  const blockType = "galleryBlock";
  const Gallery = components[blockType];

  return <Gallery blockType={blockType} />;
};

export default Portfolio;
