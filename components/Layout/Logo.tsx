import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Logo: React.FC = () => {
  const bigSize = 1;
  const smallSize = 0.8;
  const [big, setBig] = useState<boolean>(true);
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setBig(true);
      return;
    }
    if (scrollY.get() >= 80) {
      setBig(false);
    }
  });
  return (
    <motion.div
      className="component__logo"
      initial={{ scale: bigSize }}
      animate={big ? { scale: bigSize } : { scale: smallSize }}
    >
      <h2>
        Chléo<span>Butterfly</span>
      </h2>
    </motion.div>
  );
};

export default Logo;
