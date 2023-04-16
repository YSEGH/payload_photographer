import React, { useState } from "react";
import { motion } from "framer-motion";
import { Doc } from "../../utilities/types";
import Link from "next/link";
import Photo from "./Photo";

const Card: React.FC<{ item: Doc }> = ({ item }) => {
  const [urlPhoto, setUrlPhoto] = useState(item.slider[0].photo.sizes.card.url);

  if (!urlPhoto) {
    return;
  }
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`card_work`}
    >
      <Link className="card_work__link" href={`/categorie/${item.title}`}>
        <div className="card_work__header">
          <h6>{item.title}</h6>
        </div>
        <div className="card_work__body">
          <Photo url={urlPhoto} />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
