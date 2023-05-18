import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../style/menu.module.css";
import cx from "classnames";
import { exo } from "../../../utils/fonts";
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
