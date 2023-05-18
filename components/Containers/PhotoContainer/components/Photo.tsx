import Image from "next/image";
import React from "react";
import styles from "../../style/photo.module.css";

const Photo = ({ url, alt, height, width }) => {
  return (
    <Image
      className={styles.photo}
      src={url}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Photo;
