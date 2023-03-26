import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Menu: React.FC = () => {
  const { scrollY } = useScroll();
  const [display, setDisplay] = useState<Boolean>(true);

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplay(true);
      return;
    }
    setDisplay(false);
  });

  return (
    <ul className="nav">
      <motion.li animate={{ opacity: display ? 1 : 0 }} className="nav--item">
        <NavLink
          to={`/work`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Work
        </NavLink>
      </motion.li>
      <motion.li animate={{ opacity: display ? 1 : 0 }} className="nav--item">
        <NavLink
          to={`/about`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          About
        </NavLink>
      </motion.li>
      <motion.li animate={{ opacity: display ? 1 : 0 }} className="nav--item">
        <NavLink
          to={`/contact`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Contact
        </NavLink>
      </motion.li>
    </ul>
  );
};

export default Menu;
