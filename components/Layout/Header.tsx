import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import Search from "../Items/Search";

const animate = {
  hidden: {
    height: 60,
  },
  initial: {
    height: 80,
  },
  interval: {
    height: 120,
  },
  show: {
    height: 140,
  },
};

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [headerStyle, setHeaderStyle] = useState(animate.initial);
  const [menuSize, setMenuSize] = useState(animate.initial);
  const [activateSearchBar, setActivateSearchBar] = useState(false);
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      if (activateSearchBar) {
        setHeaderStyle(animate.show);
        return;
      }
      setHeaderStyle(animate.initial);
      return;
    }
    if (activateSearchBar) {
      setHeaderStyle(animate.interval);
      return;
    }
    setHeaderStyle(animate.hidden);
  });

  const setSize = (activeSearchBar) => {
    console.log(headerStyle.height);

    setActivateSearchBar(activeSearchBar);
    if (activeSearchBar) {
      if (headerStyle.height === 60) {
        setHeaderStyle(animate.interval);
        return;
      }
      setHeaderStyle(animate.show);
    } else {
      if (headerStyle.height === 120) {
        setHeaderStyle(animate.hidden);
        return;
      }
      setHeaderStyle(animate.initial);
    }
  };

  return (
    <motion.div className={`component_header`}>
      <motion.div
        animate={headerStyle}
        initial={animate.initial}
        className="component_header__container"
      >
        <motion.div
          className="component_header__content container--large"
          animate={menuSize}
        >
          <Logo />
          <Menu />
        </motion.div>
        <Search setSize={setSize} />
      </motion.div>
    </motion.div>
  );
};

export default Header;
