import React from "react";
import style from "../style/arrowSVG.module.css";
import cx from "classnames";

const ArrowSVG = ({ index }) => {
  return (
    <svg
      className={cx(style.arrow, style[`arrow_${index}`])}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.3323 36.9552C32.9078 37.3797 32.2197 37.3797 31.7952 36.9552L25.9986 31.1586C25.5741 30.7341 25.5741 30.0459 25.9986 29.6215L31.7952 23.8248C32.2197 23.4004 32.9078 23.4004 33.3323 23.8248C33.7567 24.2493 33.7567 24.9374 33.3323 25.3619L28.3042 30.39L33.3323 35.4181C33.7567 35.8426 33.7567 36.5308 33.3323 36.9552Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowSVG;
