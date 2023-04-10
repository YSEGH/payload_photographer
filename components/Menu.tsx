import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

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
    <motion.ul animate={{ opacity: display ? 1 : 0 }} className="nav">
      <li className="nav--item">
        <Link href={`/work`} scroll={false}>
          Work
        </Link>
      </li>
      <li className="nav--item">
        <Link href={`/about`} scroll={false}>
          About
        </Link>
      </li>
      <li className="nav--item">
        <Link href={`/contact`} scroll={false}>
          Contact
        </Link>
      </li>
    </motion.ul>
  );
};

export default Menu;
