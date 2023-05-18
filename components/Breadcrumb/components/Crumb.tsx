import Link from "next/link";
import React from "react";
import styles from "../style/crumb.module.css";
import { useRouter } from "next/router";
import cx from "classnames";
import { exo } from "../../../utils/fonts";

const Crumb = ({ text: defaultText, href, last = false }) => {
  const router = useRouter();
  const active = router.pathname === href ? "active" : "";

  return (
    <Link
      className={cx(styles.crumb, exo.className, {
        [styles.is_active]: active,
      })}
      href={href}
    >
      {defaultText}
      <span>{!last && ">"}</span>
    </Link>
  );
};

export default Crumb;
