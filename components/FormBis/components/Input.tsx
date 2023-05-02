import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { kasei } from "../../Layout/Layout";

const Input = ({ field, error, messageError }) => {
  const { actions, state } = useContext(DataContext);
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    if (!e.target.value) {
      setFocus(false);
    }
  };

  const onChangeHandler = () => {
    if (error) {
      actions.updateFormError(field.name);
    }
    if ((field.name, inputRef.current.value)) {
      setFocus(true);
      return;
    }
    setFocus(false);
  };

  useEffect(() => {
    if (inputRef.current.value) {
      setFocus(true);
    }
    if (state.formSuccess) {
      inputRef.current.value = "";
      setFocus(false);
    }
    return () => {};
  }, [state.formSuccess]);

  return (
    <div
      data-name={field.name}
      className={`form_contact__field_wrapper ${focus ? "is_active" : ""} ${
        error ? "is_error" : ""
      }`}
    >
      <h4 className={`form_contact__field_title ${kasei.className}`}>
        {field.label}
        {field.required && (
          <span className="form_contact__field_required">*</span>
        )}
      </h4>
      <div className="form_contact__input_wrapper">
        <input
          className={kasei.className}
          ref={inputRef}
          spellCheck="false"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          type={field.blockType}
          name={field.name}
        />
      </div>
      <div className="form_contact__field_message">
        {!error ? (
          <p className={kasei.className}>{!focus && field.description}</p>
        ) : (
          <p className={kasei.className}>{messageError}</p>
        )}
      </div>
    </div>
  );
};

export default memo(Input);
