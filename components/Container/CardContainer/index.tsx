import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Doc } from "../../../utilities/types";
import Card from "./components/Card";
import { DataContext } from "../../../context/DataContext";
import styles from "../style/index.module.css";
import global from "../../../css/global.module.css";
import cx from "classnames";
import { setScrollPosition } from "../../../context/Actions/DataActions";

interface Props {
  items: Doc[];
}
const CardContainer: React.FC<Props> = ({ items }) => {
  const state = useContext(DataContext);
  const { scrollY } = useScroll();

  useEffect(() => {
    window.scrollTo({
      top: state.scrollPosition,
      left: 0,
      behavior: "smooth",
    });
    return () => {
      setScrollPosition(scrollY.get(), state.dispatchPhotos);
    };
  }, []);

  return (
    <motion.div
      layout
      className={cx(styles.container__cards, global.container__large)}
    >
      <AnimatePresence>
        {items.map((item: Doc) => (
          <Card key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardContainer;
