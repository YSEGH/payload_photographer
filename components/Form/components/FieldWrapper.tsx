import React, { useEffect, useState, useContext } from "react";
import styles from "../style/index.module.css";
import { kasei } from "../../Layout/Layout";
import cx from "classnames";
import { DataContext } from "../../../context/DataContext";
import { getFieldComponent } from "../utils";

const FieldWrapper = ({ field }) => {
  const type = `form__input_wrapper--${field.blockType}`;
  const { actions, state } = useContext(DataContext);
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(null);

  // Update fields error
  const updateFormError = () => {
    if (error) {
      actions.updateFormError(field.name);
    }
  };

  // Props for fields component
  const propsField = {
    setFocus: setFocus,
    setError: updateFormError,
    field: field,
    success: state.formSuccess,
  };

  useEffect(() => {
    let fieldError: boolean = state.formError.find(
      (error) => error.name === field.name
    );

    if (fieldError) {
      setError(fieldError);
    } else {
      setError(null);
    }
    return () => {};
  }, [state.formError]);

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
        {getFieldComponent(field, propsField)}
      </div>
      <div
        className={cx(styles.form__field_message, {
          [styles.is_error]: error,
        })}
      >
        {!error ? (
          <p className={kasei.className}>{!focus && field.description}</p>
        ) : (
          <p className={kasei.className}>{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default FieldWrapper;
