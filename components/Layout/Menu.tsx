import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { exo } from "./Layout";

interface Props {
  display: boolean;
}
const Menu: React.FC<Props> = ({ display }) => {
  return (
    <motion.ul
      animate={{ opacity: display ? 1 : 0 }}
      className={`nav ${exo.className}`}
    >
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
