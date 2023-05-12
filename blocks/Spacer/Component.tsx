import React from "react";
import styles from "./index.module.css";
import cx from "classnames";

type Spacer = "small" | "medium" | "large" | "custom";

export type Props = {
  blockType: "spacer";
  blockName?: string;
  spacer: Spacer;
  height: number;
};

export const Component: React.FC<Props> = (props) => {
  const { spacer, height } = props;

  return (
    <div
      style={{ height: spacer === "custom" ? height : null }}
      className={cx(styles[spacer])}
    ></div>
  );
};
