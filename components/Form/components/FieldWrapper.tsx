import React, { ReactElement, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import styles from "../style/index.module.css";
import { kasei } from "../../Layout/Layout";
import cx from "classnames";

const FieldWrapper = ({ field, error, messageError }) => {
  const [focus, setFocus] = useState(false);
  const type = `form__input_wrapper--${field.blockType}`;

  const getFieldComponent = (): ReactElement => {
    switch (field.blockType) {
      case "text":
      case "email":
        return <Input setFocus={setFocus} field={field} error={error} />;
      case "textarea":
        return <Textarea setFocus={setFocus} field={field} error={error} />;
      default:
        return <div></div>;
    }
  };

  return (
    <div data-name={field.name} className={cx(styles.form__field_wrapper)}>
      <h4
        className={cx(styles.form__field_title, kasei.className, {
          [styles.is_active]: focus,
          [styles.is_error]: error,
        })}
      >
        {field.label}
        {field.required && (
          <span className={styles.form__field_required}>*</span>
        )}
      </h4>
      <div
        className={cx(styles.form__input_wrapper, {
          [styles[type]]: true,
          [styles.is_active]: focus,
          [styles.is_error]: error,
        })}
      >
        {getFieldComponent()}
      </div>
      <div
        className={cx(styles.form__field_message, {
          [styles.is_error]: error,
        })}
      >
        {!error ? (
          <p className={kasei.className}>{!focus && field.description}</p>
        ) : (
          <p className={kasei.className}>{messageError}</p>
        )}
      </div>
    </div>
  );
};

export default FieldWrapper;
