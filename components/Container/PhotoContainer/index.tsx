import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "./components/Photo";
import styles from "../style/index.module.css";
import cx from "classnames";

const PhotoContainer = ({ photos }) => {
  return (
    <motion.div layout className={cx(styles.container__photos)}>
      <AnimatePresence>
        {photos.map((slider: any) => (
          <Photo key={slider.photo.id} url={slider.photo.sizes.card.url} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoContainer;
