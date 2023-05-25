import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Doc } from "../../utils/types";
import Card from "./components/Card";
import styles from "./style/index.module.css";
import cx from "classnames";
import Search from "./components/Search";
import ButtonMore from "./components/ButtonMore";
import { CardContext } from "./context/context";
import { setScrollPosition } from "./context/actions";

interface Props {
  items: unknown[];
}
const CardContainer: React.FC<Props> = ({ items }) => {
  const state = useContext(CardContext);
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
    <div>
      <Search />
      <motion.div layout className={cx(styles.container__cards)}>
        <AnimatePresence>
          {items.map((item: Doc) => (
            <Card key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
      <ButtonMore />
    </div>
  );
};

export default CardContainer;
