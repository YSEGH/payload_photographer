import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";

const MAX = 80;
const MIN = 60;

const Header: React.FC = () => {
  const [size, setSize] = useState(true);
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setSize(true);
      return;
    }
    setSize(false);
  });

  return (
    <div className="component__header">
      <motion.div
        animate={{
          height: size ? MAX : MIN,
        }}
        initial={{
          height: MAX,
        }}
        className="component__header-container"
      >
        <div className="component__header-container-content container__large">
          <Logo />
          <Menu />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
