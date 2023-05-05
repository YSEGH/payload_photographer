import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import Search from "./components/Search";
import { WORK_LINK } from "../../utilities/link";
import styles from "./style/index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";

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
  const [headerHeight, setHeaderHeight] = useState(0);
  const [displayHeader, setDisplayHeader] = useState(true);
  const [headerStyle, setHeaderStyle] = useState(animate.show);

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplayHeader(true);
      setHeaderStyle(animate.show);
      return;
    }
    if (scrollY.get() > 140) {
      setDisplayHeader(false);
      setHeaderStyle(animate.hidden);
    }
  });

  useEffect(() => {
    setHeaderHeight(pathname === WORK_LINK ? 140 : 80);
  }, [pathname]);

  return (
    <header className={styles.header} style={{ height: `${headerHeight}px` }}>
      <motion.div
        animate={headerStyle}
        initial={animate.show}
        className={styles.header__container}
      >
        <div className={cx(styles.header__content, global.container__large)}>
          <Logo display={displayHeader} />
          <Menu display={displayHeader} />
        </div>
        {pathname === WORK_LINK && <Search display={displayHeader} />}
      </motion.div>
    </header>
  );
};

export default Header;
