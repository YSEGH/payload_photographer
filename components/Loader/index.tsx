import React from "react";
import { RiLoader4Line } from "react-icons/ri";
import styles from "./style/index.module.css";

interface Props {
  fill: string;
}

const Loader: React.FC<Props> = ({ fill }) => {
  return <RiLoader4Line className={styles.loader} fill={fill} />;
};

export default Loader;
