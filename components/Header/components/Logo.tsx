import React from "react";
import { motion } from "framer-motion";
import styles from "../style/logo.module.css";
import { exo } from "../../../utils/fonts";

const MAX = 1;
const MIN = 0.8;

const animate = {
  hidden: { scale: MIN },
  show: { scale: MAX },
};

interface Props {
  display: boolean;
}

const Logo: React.FC<Props> = ({ display }) => {
  return (
    <motion.div
      className={styles.logo}
      initial={animate.show}
      animate={display ? animate.show : animate.hidden}
    >
      <h2 className={exo.className}>
        Chléo<span>Butterfly</span>
      </h2>
    </motion.div>
  );
};

export default Logo;
