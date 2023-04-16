import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "../../utilities/types";
import Photo from "./Photo";

const PhotoContainer = ({ photos }) => {
  return (
    <motion.div layout className="container_items container--large">
      <AnimatePresence>
        {photos.map((slider: Slider) => (
          <Photo key={slider.photo.id} url={slider.photo.sizes.card.url} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoContainer;
