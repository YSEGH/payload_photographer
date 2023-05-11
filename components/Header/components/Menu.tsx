import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../style/menu.module.css";
import cx from "classnames";
import { exo } from "../../../utilities/fonts";
import { DataContext } from "../../../context/DataContext";

interface Props {
  display: boolean;
}
const Menu: React.FC<Props> = ({ display }) => {
  const state = useContext(DataContext);

  return (
    <motion.ul
      animate={{ opacity: display ? 1 : 0 }}
      className={cx(styles.nav)}
    >
      {state.menu.map((link) => (
        <li key={link.id} className={cx(styles.nav__item, exo.className)}>
          <Link href={`/${link.page.value.slug}`} scroll={false}>
            {link.page.value.title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default Menu;
