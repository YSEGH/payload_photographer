import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Logo: React.FC = () => {
  const MAX = 1;
  const MIN = 0.8;
  const [displayLogo, setDisplayLogo] = useState<boolean>(true);
  const { scrollY } = useScroll();

  const animate = {
    hidden: { scale: MIN },
    show: { scale: MAX },
  };

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplayLogo(true);
      return;
    }
    setDisplayLogo(false);
  });

  return (
    <motion.div
      className="component__logo"
      initial={animate.show}
      animate={displayLogo ? animate.show : animate.hidden}
    >
      <h2>
        Chléo<span>Butterfly</span>
      </h2>
    </motion.div>
  );
};

export default Logo;
