import React, { useEffect } from "react";
import { motion } from "framer-motion";

export interface Photo {
  alt: string;
  createdAt: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  mimeType: string;
  url: string;
  sizes: Size;
}

export interface Size {
  [k: string]: {
    filename: string;
    filesize: number;
    height: number;
    mimeType: string;
    url: string;
    width: number;
  };
}

const CardWork: React.FC<{ photo?: Photo }> = ({ photo }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`card__work`}
    >
      <div className="card__work-body">
        <img src={`${photo.sizes.card.url}`} alt="" />
      </div>
    </motion.div>
  );
};

export default CardWork;
