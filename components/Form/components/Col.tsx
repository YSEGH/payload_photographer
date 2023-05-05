import React, { useState } from "react";
import styles from "../style/index.module.css";
import FieldWrapper from "./FieldWrapper";
import cx from "classnames";

const Col = ({ field }) => {
  const [width, setWidth] = useState(`form__col--${field.width}`);
  const [type, setType] = useState(`form__col--${field.blockType}`);

  return (
    <div className={cx(styles.form__col, styles[width], styles[type])}>
      <FieldWrapper field={field} />
    </div>
  );
};

export default Col;
