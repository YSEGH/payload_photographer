import React, { useContext } from "react";
import Link from "next/link";
import style from "../style/menu.module.css";
import cx from "classnames";
import { josefin } from "../../../utils/fonts";
import { AppContext } from "../../../context/context";

interface Props {}
const Menu: React.FC<Props> = ({}) => {
  const state = useContext(AppContext);
  return (
    <ul className={cx(style.nav)}>
      {state.menu.map((link, i) => (
        <li key={i} className={cx(style.nav__item, josefin.className)}>
          <Link href={`/${link.navigation.slug}`} scroll={false}>
            {link.navigation.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
