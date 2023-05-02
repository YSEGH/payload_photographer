import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Doc } from "../../utilities/types";
import Card from "./Card";
import { DataContext } from "../../context/DataContext";

interface Props {
  items: Doc[];
}
const CardContainer: React.FC<Props> = ({ items }) => {
  const { actions, state } = useContext(DataContext);
  const { scrollY } = useScroll();

  useEffect(() => {
    window.scrollTo({
      top: state.scrollPosition,
      left: 0,
      behavior: "smooth",
    });
    return () => {
      actions.setScrollPosition(scrollY.get());
    };
  }, []);

  return (
    <motion.div layout className="container_items container--large">
      <AnimatePresence>
        {items.map((item: Doc) => (
          <Card key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardContainer;
