import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import Search from "../Items/Search";
import { WORK_LINK } from "../../utilities/link";

const animate = {
  hidden: {
    height: 60,
  },
  initial: {
    height: 80,
  },
  show: {
    height: 140,
  },
};

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [displayHeader, setDisplayHeader] = useState(true);
  const [headerStyle, setHeaderStyle] = useState(animate.initial);
  const [searchBarIsActive, setSearchBarIsActive] = useState(false);
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplayHeader(true);
      if (searchBarIsActive) {
        setHeaderStyle(animate.show);
      } else {
        setHeaderStyle(animate.initial);
      }
      return;
    }
    setDisplayHeader(false);
    setHeaderStyle(animate.hidden);
  });

  const setHeaderSize = (activeSearchBar, reset) => {
    setSearchBarIsActive(activeSearchBar);
    if (activeSearchBar) {
      setHeaderStyle(animate.show);
    } else {
      setHeaderStyle(animate.initial);
    }
    if (reset) {
      setHeaderStyle(animate.initial);
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={`component_header`}>
      <motion.div
        animate={headerStyle}
        initial={animate.initial}
        className="component_header__container"
      >
        <div className="component_header__content container--large">
          <Logo display={displayHeader} />
          <Menu display={displayHeader} />
        </div>
        {pathname === WORK_LINK && (
          <Search setHeaderSize={setHeaderSize} display={displayHeader} />
        )}
      </motion.div>
    </div>
  );
};

export default Header;
