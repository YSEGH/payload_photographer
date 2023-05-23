import React, { useEffect, useRef } from "react";
import style from "../style/linksvg.module.css";
import cx from "classnames";

const RoundSVG = ({ index }) => {
  return (
    <svg
      className={cx(style.round, style[`round_${index}`])}
      style={{ overflow: "visible" }}
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34.5" cy="34.5" r="34" stroke="black" />
    </svg>
  );
};

export default RoundSVG;
