import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../style/menu.module.css";
import cx from "classnames";
import { exo, josefin } from "../../../utils/fonts";
import { AppContext } from "../../../context/context";

interface Props {
  display: boolean;
}
const Menu: React.FC<Props> = ({ display }) => {
  const state = useContext(AppContext);
  return (
    <motion.ul
      animate={{ opacity: display ? 1 : 0 }}
      className={cx(styles.nav)}
    >
      {state.menu.map((link, i) => (
        <li key={i} className={cx(styles.nav__item, josefin.className)}>
          <Link href={`/${link.navigation.slug}`} scroll={false}>
            {link.navigation.title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default Menu;
