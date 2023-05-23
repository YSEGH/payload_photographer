import React from "react";
import style from "../style/linksvg.module.css";
import cx from "classnames";

const ArrowSVG = ({ index }) => {
  if (index === 1) {
    return (
      <svg
        className={cx(style.arrow, style[`arrow_${index}`])}
        width="81"
        height="8"
        viewBox="0 0 81 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80.3536 4.35355C80.5488 4.15829 80.5488 3.84171 80.3536 3.64645L77.1716 0.464466C76.9763 0.269204 76.6597 0.269204 76.4645 0.464466C76.2692 0.659728 76.2692 0.976311 76.4645 1.17157L79.2929 4L76.4645 6.82843C76.2692 7.02369 76.2692 7.34027 76.4645 7.53553C76.6597 7.7308 76.9763 7.7308 77.1716 7.53553L80.3536 4.35355ZM0 4.5H80V3.5H0V4.5Z"
          fill="black"
        />
      </svg>
    );
  }
  return (
    <svg
      className={cx(style.arrow, style[`arrow_${index}`])}
      width="81"
      height="8"
      viewBox="0 0 81 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.646446 3.64645C0.451187 3.84172 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659735 4.53554 0.464473C4.34027 0.269211 4.02369 0.269211 3.82843 0.464473L0.646446 3.64645ZM81 3.5L1 3.50001L1 4.50001L81 4.5L81 3.5Z"
        fill="black"
      />
    </svg>
  );
};

export default ArrowSVG;
