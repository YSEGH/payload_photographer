import React from "react";
import Menu from "./components/Menu";
import style from "./style/index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import Logo from "./components/Logo";

const animations = {
  show: {
    y: 60,
  },
  hide: {
    y: 0,
  },
};

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={cx(style.header__container)}>
        <div className={cx(style.header__content, global.container__large)}>
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
