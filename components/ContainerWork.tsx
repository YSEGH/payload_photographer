import React, { useContext, useEffect } from "react";
import CardWork from "./CardWork";
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
export interface Photo {
  alt: string;
  createdAt: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  mimeType: string;
  url: string;
}
const ContainerWork: React.FC = () => {
  const { state, actions } = useContext(DataContext);
  useEffect(() => {
    console.log(state.photos);

    console.log("useeffect");

    actions.getPhotos("");

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
