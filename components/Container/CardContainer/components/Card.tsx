import React from "react";
import { motion } from "framer-motion";
import { Doc } from "../../../../utilities/types";
import Link from "next/link";
import Photo from "../../PhotoContainer/components/Photo";
import styles from "../../style/card.module.css";

const Card: React.FC<{ item: Doc }> = ({ item }) => {
  const url = item.slider[0].photo.sizes.card.url;

  if (!url) {
    return;
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.card}
    >
      <Link className={styles.card__link} href={`/categorie/${item.title}`}>
        <div className={styles.card__header}>
          <h6>{item.title}</h6>
        </div>
        <div className={styles.card__body}>
          <Photo url={url} />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
