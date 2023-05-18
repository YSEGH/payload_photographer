import React, { useEffect } from "react";
import RichText from "../../components/RichText";
import styles from "./index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedImage from "../../components/AnimatedImage";

type Order = "textImage" | "imageText";
type Size = "small" | "middle" | "large";

export type Props = {
  blockType: "textWithImageBlock";
  blockName?: string;
  content?: any;
  image?: any;
  imageSize?: Size;
  order?: Order;
};

const imageVariants = {
  fadeIn: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.4 },
  },
  fadeOut: {
    opacity: 0,
    y: 20,
  },
};

const textVariants = {
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2 },
  },
  fadeOut: {
    opacity: 0,
  },
};

export const Component: React.FC<Props> = (props) => {
  const { content, image, imageSize, order } = props;
  console.log(image);

  const control = useAnimation();
  const [refImage, inViewImage] = useInView();
  const [refText, inViewText] = useInView();

  useEffect(() => {
    if (inViewImage || inViewText) {
      control.start("fadeIn");
    } else {
      control.start("fadeOut");
    }
    return () => {};
  }, [inViewImage, inViewText]);

  return (
    <div className={global.container__large}>
      <div className={cx(styles.block__container, styles[order])}>
        <motion.div
          ref={refImage}
          variants={imageVariants}
          initial={"fadeOut"}
          animate={control}
          className={cx(styles.image__container)}
        >
          <AnimatedImage image={image} size={imageSize} />
        </motion.div>
        <motion.div
          ref={refText}
          variants={textVariants}
          initial={"fadeOut"}
          animate={control}
          className={cx(styles.text__container)}
        >
          <RichText content={content} className={styles.content} />
        </motion.div>
      </div>
    </div>
  );
};
