import React from "react";
import { motion } from "framer-motion";
import { Doc } from "../../../../utils/types";
import Link from "next/link";
import Photo from "../../PhotoContainer/components/Photo";
import styles from "../../style/card.module.css";
import cx from "classnames";
import { exo } from "../../../../utils/fonts";

const Card: React.FC<{ item: any }> = ({ item }) => {
  const url = item.slider[0].photo.sizes.small.url;
  const alt = item.slider[0].photo.alt;
  const width = item.slider[0].photo.sizes.small.width;
  const height = item.slider[0].photo.sizes.small.height;

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
      <Link className={styles.card__link} href={`/portfolio/${item.slug}`}>
        <div className={cx(styles.card__header)}>
          <h6 className={exo.className}>{item.title}</h6>
        </div>
        <div className={styles.card__body}>
          <Photo url={url} alt={alt} width={width} height={height} />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
