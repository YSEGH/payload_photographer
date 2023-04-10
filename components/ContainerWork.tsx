import React, { useContext, useEffect } from "react";
import CardWork, { Photo } from "./CardWork";
import { motion, AnimatePresence } from "framer-motion";
import { DataContext } from "../context/DataContext";

export interface WorkItem {
  categories: [];
  createdAt: string;
  id: string;
  slider: Slider[];
  title: string;
}
export interface Slider {
  id: string;
  photo: Photo;
}

const ContainerWork: React.FC = () => {
  const { state, actions } = useContext(DataContext);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <motion.div layout className="container__work container__large">
      <AnimatePresence>
        {state.photos.map((workItem: WorkItem) =>
          workItem.slider.map((slider: Slider) => (
            <CardWork key={slider.id} photo={slider.photo} />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContainerWork;
{
  /* <motion.div layout className="container__work container__large">
      <AnimatePresence>
        {workItems.map((work: Photo, i) => {
          if (work.class === "card__work--show") {
            return <CardWork key={i} photo={work} />;
          }
        })}
      </AnimatePresence>
    </motion.div> */
}
