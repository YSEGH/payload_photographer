import React from "react";
import { components } from "../../blocks";
import styles from "./index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";

type Props = {
  layout: any[];
  className?: string;
};

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div
    className={[styles.blocks__container, className].filter(Boolean).join(" ")}
  >
    {layout.map((block, i) => {
      const Block: React.FC<any> = components[block.blockType];

      if (Block) {
        return (
          <section
            key={i}
            className={cx(styles.block, global.container__large)}
          >
            <Block {...block} />
          </section>
        );
      }

      return null;
    })}
  </div>
);

export default RenderBlocks;
