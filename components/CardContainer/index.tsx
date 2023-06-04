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
import { Filters } from "./components/Filters";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SearchBar from "./components/SearchBar";

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
    <div className={``}>
      <SearchBar />
      <div className={styles.container__gallery}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3}>
            {items.map((item: Doc) => (
              <Card key={item.id} item={item} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <ButtonMore />
    </div>
  );
};

export default CardContainer;

/* 

<motion.div layout className={cx(styles.container__cards)}>
  <AnimatePresence>
    {items.map((item: Doc) => (
      <Card key={item.id} item={item} />
    ))}
  </AnimatePresence>
</motion.div>
      
*/
