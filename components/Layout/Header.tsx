import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import Search from "../Items/Search";

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [displayHeader, setDisplayHeader] = useState(true);
  const { scrollY } = useScroll();

  const animate = {
    hidden: {
      height: 60,
    },
    show: {
      height: 140,
    },
  };

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplayHeader(true);
      return;
    }
    if (scrollY.get() >= 80) {
      setDisplayHeader(false);
    }
  });

  return (
    <div className={`component__header`}>
      <motion.div
        animate={displayHeader ? animate.show : animate.hidden}
        initial={animate.show}
        className="component__header-container"
      >
        <div className="component__header-container-content container--large">
          <Logo />
          <Menu />
        </div>
        {pathname === "/work" && <Search />}
      </motion.div>
    </div>
  );
};

export default Header;
