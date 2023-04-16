import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doc } from "../../utilities/types";
import Card from "./Card";

interface Props {
  items: Doc[];
}
const CardContainer: React.FC<Props> = ({ items }) => {
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
