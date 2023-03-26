import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

interface scale {
  scale: number;
}
const Logo: React.FC = () => {
  const bigSize = 1;
  const smallSize = 0.8;
  const [size, setSize] = useState<scale>({
    scale: bigSize,
  });
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setSize({
        scale: bigSize,
      });
      return;
    }
    setSize({
      scale: smallSize,
    });
  });
  return (
    <motion.div
      className="component__logo"
      initial={{ scale: bigSize }}
      animate={size}
      exit={{ scale: bigSize }}
      transition={{ duration: 0.25 }}
    >
      <h2>
        Chléo<span>Butterfly</span>
      </h2>
    </motion.div>
  );
};

export default Logo;
