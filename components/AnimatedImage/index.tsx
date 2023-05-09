import { motion, useScroll } from "framer-motion";
import React, { useState } from "react";
import styles from "./style/index.module.css";
import { useInView } from "react-intersection-observer";

type Props = {
  image: any;
  size: string;
};

const scaleStep = 0.0003;

const AnimatedImage: React.FC<Props> = ({ image, size }) => {
  const [ref, inView] = useInView();
  const { scrollY } = useScroll();
  const [scale, setScale] = useState({
    scale: 1,
  });

  scrollY.on("change", () => {
    if (inView) {
      if (scrollY.get() < scrollY.getPrevious()) {
        if (scale.scale > 1) {
          setScale({ scale: scale.scale - scaleStep });
        }
        return;
      }
      if (scrollY.get() > scrollY.getPrevious()) {
        if (scale.scale < 1.5) {
          setScale({ scale: scale.scale + scaleStep });
        }
      }
    }
  });

  return (
    <div
      className={styles.animated_image__container}
      style={{
        width: image?.sizes[size].width,
      }}
    >
      <motion.img
        initial={{ scale: 1 }}
        animate={scale}
        ref={ref}
        alt={image?.alt}
        src={image?.url}
        width={image?.sizes[size].width}
        height={image?.sizes[size].height}
      />
    </div>
  );
};

export default AnimatedImage;
