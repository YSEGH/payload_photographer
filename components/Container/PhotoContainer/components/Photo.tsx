import Image from "next/image";
import React from "react";
import styles from "../../style/photo.module.css";

const Photo = ({ url }) => {
  return (
    <Image className={styles.photo} src={url} alt="" width={400} height={400} />
  );
};

export default Photo;
