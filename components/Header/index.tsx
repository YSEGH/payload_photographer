import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import styles from "./style/index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import { setHeaderSize } from "./utils";

const animate = {
  hidden: {
    height: 60,
  },
  show: {
    height: 80,
  },
};

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const { scrollY } = useScroll();
  const [headerHeight, setHeaderHeight] = useState({});
  const [display, setDisplay] = useState(true);
  const [headerContainerHeight, setHeaderContainerHeight] = useState(
    animate.show
  );

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplay(true);
      setHeaderContainerHeight(animate.show);
      return;
    }
    if (scrollY.get() > 140) {
      setDisplay(false);
      setHeaderContainerHeight(animate.hidden);
    }
  });

  useEffect(() => {
    setHeaderHeight(setHeaderSize(pathname));
  }, [pathname]);

  return (
    <header className={styles.header} style={headerHeight}>
      <motion.div
        animate={headerContainerHeight}
        initial={animate.show}
        className={styles.header__container}
      >
        <div className={cx(styles.header__content, global.container__large)}>
          <Logo display={display} />
          <Menu display={display} />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
