import React, { useEffect } from "react";
import RichText from "../../components/RichText";
import styles from "./index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Alignment = "left" | "center" | "right" | "justify";
type Position = "left" | "center" | "right";

export type Props = {
  blockType: "textBlock";
  blockName?: string;
  content?: any;
  textAlign?: Alignment;
  position: Position;
  width: number;
  scrollAnimation: boolean;
};

const animations = {
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  fadeOut: {
    opacity: 0,
  },
};

export const Component: React.FC<Props> = (props) => {
  const control = useAnimation();
  const [refText, inViewText] = useInView();
  const { content, position, textAlign, width, scrollAnimation } = props;
  const initial = scrollAnimation ? "fadeOut" : "fadeIn";

  useEffect(() => {
    if (!scrollAnimation) {
      return;
    }

    if (inViewText) {
      control.start("fadeIn");
    } else {
      control.start("fadeOut");
    }

    return () => {};
  }, [inViewText]);

  return (
    <div className={cx(styles.wrap, global.container__large)}>
      <motion.div
        ref={refText}
        variants={animations}
        initial={initial}
        animate={control}
        className={cx(styles.text__container, styles[position])}
        style={{ width: width, textAlign: textAlign }}
      >
        <RichText content={content} className={styles.content} />
      </motion.div>
    </div>
  );
};
