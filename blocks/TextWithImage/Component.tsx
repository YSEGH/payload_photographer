import React, { useEffect } from "react";
import RichText from "../../components/RichText";
import styles from "./index.module.css";
import cx from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedImage from "../../components/AnimatedImage";

type Type = "image_only" | "image_text" | "text_only";
type Order = "text_image" | "image_text";
type Size = "small" | "middle" | "large";

export type Props = {
  blockType: "textwithimage";
  blockName?: string;
  content?: any;
  image?: any;
  image_size?: Size;
  type: Type;
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
  const { content, image, image_size, order } = props;

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
    <div className={cx(styles.block__container, styles[order])}>
      <motion.div
        ref={refImage}
        variants={imageVariants}
        initial={"fadeOut"}
        animate={control}
        className={cx(styles.image__container)}
      >
        <AnimatedImage image={image} size={image_size} />
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
  );
};
