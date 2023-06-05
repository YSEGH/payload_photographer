import React, { useContext, useEffect } from "react";
import Link from "next/link";
import style from "../style/menu.module.css";
import cx from "classnames";
import { josefin } from "../../../utils/fonts";
import { AppContext } from "../../../context/context";
import { useRouter } from "next/router";

interface Props {}
const Menu: React.FC<Props> = ({}) => {
  const router = useRouter();
  const state = useContext(AppContext);

  useEffect(() => {
    console.log(router);
    return () => {};
  }, [router.asPath]);

  return (
    <ul className={cx(style.nav)}>
      {state.menu.map((link, i) => (
        <li key={i} className={cx(style.nav__item, josefin.className)}>
          <Link
            href={`/${link.navigation.slug}`}
            scroll={false}
            className={cx({
              [style.active]:
                router.asPath === `/${link.navigation.slug}` ||
                router.asPath.includes(`/${link.navigation.slug}/`)
                  ? "active"
                  : "",
            })}
          >
            {link.navigation.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
