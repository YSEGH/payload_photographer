import React, { useEffect } from "react";
import RichText from "../../components/RichText";
import styles from "./index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Type = "image_only" | "image_text" | "text_only";
type Alignment = "left" | "center" | "right";
type Order = "text_image" | "image_text";
type Size = "small" | "middle" | "large";

export type Props = {
  blockType: "aboutcontent";
  blockName?: string;
  content?: any;
  image?: any;
  image_size?: Size;
  type: Type;
  order?: Order;
  alignment?: Alignment;
};

const animations = {
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.5, delayChildren: 0.5 },
  },
  fadeOut: {
    opacity: 0,
  },
};

export const Component: React.FC<Props> = (props) => {
  const control = useAnimation();
  const [refImage, inViewImage] = useInView();
  const [refText, inViewText] = useInView();
  const { content, image, image_size, type, order, alignment } = props;

  useEffect(() => {
    if (inViewImage || inViewText) {
      control.start("fadeIn");
    }

    return () => {};
  }, [inViewImage, inViewText]);

  return (
    <div className={cx(styles.wrap, styles[order])}>
      <motion.div
        ref={refImage}
        variants={animations}
        initial={"fadeOut"}
        animate={control}
        className={cx(styles.image__container)}
      >
        <Image
          className={cx(styles[image_size])}
          alt={image?.alt}
          src={image?.sizes.feature.url}
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        ref={refText}
        variants={animations}
        initial={"fadeOut"}
        animate={control}
        className={cx(styles.text__container)}
      >
        <RichText content={content} className={styles.content} />
      </motion.div>
    </div>
  );
};
