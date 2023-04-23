import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import Search from "../Items/Search";
import { WORK_LINK } from "../../utilities/link";

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

  const setHeaderSize = () => {
    setHeaderHeight(pathname === WORK_LINK ? 140 : 80);
  };

  useEffect(() => {
    setHeaderSize();
  }, [pathname]);

  return (
    <div className={`component_header`} style={{ height: `${headerHeight}px` }}>
      <motion.div
        animate={headerStyle}
        initial={animate.show}
        className="component_header__container"
      >
        <div className="component_header__content container--large">
          <Logo display={displayHeader} />
          <Menu display={displayHeader} />
        </div>
        {pathname === WORK_LINK && <Search display={displayHeader} />}
      </motion.div>
    </div>
  );
};

export default Header;
