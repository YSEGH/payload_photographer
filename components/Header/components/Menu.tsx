import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../style/menu.module.css";
import cx from "classnames";
import { exo } from "../../../utilities/fonts";

interface Props {
  display: boolean;
}
const Menu: React.FC<Props> = ({ display }) => {
  return (
    <motion.ul
      animate={{ opacity: display ? 1 : 0 }}
      className={cx(styles.nav)}
    >
      <li className={cx(styles.nav__item, exo.className)}>
        <Link href={`/work`} scroll={false}>
          Work
        </Link>
      </li>
      <li className={cx(styles.nav__item, exo.className)}>
        <Link href={`/about`}>About</Link>
      </li>
      <li className={cx(styles.nav__item, exo.className)}>
        <Link href={`/contact`}>Contact</Link>
      </li>
    </motion.ul>
  );
};

export default Menu;
