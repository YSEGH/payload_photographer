import React from "react";
import { motion } from "framer-motion";
import { Photo } from "./ContainerWork";

const CardWork: React.FC<{ photo?: Photo }> = ({ photo }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`card__work`}
    >
      <div className="card__work-body">
        <img src={`${photo.url}`} alt="" />
      </div>
    </motion.div>
  );
};

export default CardWork;
