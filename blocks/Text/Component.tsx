import React, { useEffect } from "react";
import RichText from "../../components/RichText";
import styles from "./index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Alignment = "left" | "center" | "right" | "justify";
type Position = "left" | "center" | "right";

export type Props = {
  blockType: "aboutcontent";
  blockName?: string;
  content?: any;
  alignment?: Alignment;
  position: Position;
};

const animations = {
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  fadeOut: {
    opacity: 0,
  },
};

export const Component: React.FC<Props> = (props) => {
  const control = useAnimation();
  const [refImage, inViewImage] = useInView();
  const [refText, inViewText] = useInView();
  const { content, position, alignment } = props;

  useEffect(() => {
    if (inViewImage || inViewText) {
      control.start("fadeIn");
    }

    return () => {};
  }, [inViewImage, inViewText]);

  return (
    <div className={cx(styles.wrap, styles[position])}>
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
