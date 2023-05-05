import React from "react";
import { RiLoader4Line } from "react-icons/ri";

interface Props {
  fill: string;
}

const Loader: React.FC<Props> = ({ fill }) => {
  return <RiLoader4Line className="loader" fill={fill} />;
};

export default Loader;
