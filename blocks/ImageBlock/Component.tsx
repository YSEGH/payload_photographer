import React from "react";
import NextImage from "next/image";
import RichText from "../../components/RichText";
import styles from "./index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import sizes from "./sizes.json";
import { MediaType } from "../../collections/Media";

export type Type = {
  blockType: "imageBlock";
  blockName?: string;
  image: MediaType;
  legend?: any;
  size: "small" | "medium" | "large";
  container: boolean;
};

export const Component: React.FC<Type> = (props) => {
  const { image, size, legend, container } = props;

  if (typeof image === "object") {
    let filenameToRender = image.filename;
    let { width, height } = image;
    console.log(image.sizes);
    /* if (image.sizes[size]) {
      filenameToRender = image.sizes[size].filename;
      width = image.sizes[size].width;
      height = image.sizes[size].height;
    } */

    const sizesToUse = sizes
      .map((size) => `(max-width: ${size}px) ${size}px`)
      .join(", ");

    return (
      <div
        className={cx({
          [global.container__large]: container,
        })}
      >
        <div className={cx(styles.wrap, styles[size])}>
          <NextImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filenameToRender}`}
            alt={image.alt}
            sizes={sizesToUse}
            width={width}
            height={height}
          />
          {legend && <RichText className={styles.legend} content={legend} />}
        </div>
      </div>
    );
  }

  return null;
};
